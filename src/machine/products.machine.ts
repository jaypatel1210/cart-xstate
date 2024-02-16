import { setup, fromPromise, assign } from 'xstate';
import { Product } from '../types';

const productsMachine = setup({
  types: {
    context: {} as {
      products: Array<Product>;
      retries: number;
      error: string | null | unknown;
    },
    events: {} as
      | {
          type: 'FETCH';
        }
      | {
          type: 'RETRY';
        },
    input: {} as {
      apiURL: string;
    },
  },
  actors: {
    fetchProducts: fromPromise(({ input }: { input: { apiURL: string } }) => {
      return fetch(input.apiURL)
        .then(response => response.json())
        .then(data => data as Product[]);
    }),
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcBOB7CBXAxgF1gDoBLCAGzAGIAxAUQBUBhACQG0AGAXURXVmLzF0AOx4gAHogCMAFgBshGQGYlAVgCc6gOxbV7LbLkAaEAE9EAJjkAOQtYPtrc9dfZyt1gL6eTaTLgJCMnQAQwhiYShKCBEwEmEAN3QAazi-bHwiYLCIqAQIpJwQwREOTjKxZD4BIVEkCURVVVtVXVULdpktdylVE3MEKR1CDS12dgslVxULKSVvXwwMwOzwyMowVAxUQmQyYoAzdFQAW12lgKzQtbyC9CKS4TKK+qr+R7FJQflFFQ1tXT6Qz9RDWKSEJQWCzqIY6TROCwLEDpS6EA4hYhkLCoKgAJQYuIAmi9eO9ap9pD9lGpNDo9AZ5CDBlolCN1HI1OMZBZdN1VN4fCBhJg4JULplKtUPvUvgBaYxmRCy1SETS07pKdSa2bcpEozIkchgSVkkQUhCtQg6Lp6VzWJSyZRMqzqQjsTXuqTqVRTboyPXilbXXImmpmmWIJQydiKPlyDqQ5yzJlDFWtblKMZaGRSXMWf2C-WBWC4HBweCvKXkiMIXSs70Orrs3RyGQp7RW7lSOTu+xeuYB-wG9GY7HGyumuqgL7clOOQjQ1uqWSOAzWawF7xAA */
  id: 'products',
  context: {
    products: [],
    retries: 0,
    error: null,
  },
  initial: 'idle',
  states: {
    idle: {
      on: {
        FETCH: 'loading',
      },
    },
    loading: {
      invoke: {
        src: 'fetchProducts',
        input: {
          apiURL: 'https://fakestoreapi.com/products',
        },
        onDone: {
          target: 'success',
          actions: assign({
            products: ({ event }) => event.output as Product[],
          }),
        },
        onError: {
          target: 'failure',
          actions: assign({
            error: ({ event }) => event.error,
          }),
        },
      },
    },
    success: {
      type: 'final',
    },
    failure: {
      on: {
        RETRY: {
          target: 'loading',
          actions: assign({
            retries: ({ context }) => context.retries + 1,
          }),
        },
      },
    },
  },
});

export default productsMachine;
