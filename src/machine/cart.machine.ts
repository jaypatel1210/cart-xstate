import { setup, assign } from 'xstate';
import { CartItem } from '../types';

const cartMachine = setup({
  types: {
    context: {} as {
      items: Array<CartItem>;
    },
    events: {} as
      | {
          type: 'ADD_ITEM';
          value: CartItem;
        }
      | {
          type: 'REMOVE_ITEM';
          value: { id: string };
        }
      | {
          type: 'CHECKOUT';
        },
  },

  guards: {
    isItemInCart: ({ context, event }) => {
      if (event.type === 'ADD_ITEM') {
        return !context.items.some(item => item.id === event.value.id);
      }
      return false;
    },
  },
  /* actions: {
    addTocart: assign({
      items: ({ context, event }) => {
        return context.items.concat('sd');
      },
    }),
  }, */
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QGMCGAnALgYgIIBF8B9ASQBUBRAWQG0AGAXUVAAcB7WAS007YDtmIAB6IAjAE4AzADpRdAGwB2RQFY5k8aJWKANCACeYgEwBfE3rRZpYALYtM+vIVKVajQey49+gkQi1G0gpqdCpGopIALHQAHNp6hgiSatKqkSoqkslp4vKRZhYYmNJ8bJgUdg5OxOTU9ExIIJ7cvAKNfpJGgZGd4pGK4pniivIJiEYj0jGKRhqzkTGS8qLyBSCWxaXllY4AStQA8gBqFC517o3N3m2gHXSKqV3yKjFG4m+R8uJj-jGi0iphs9IqJRKp7op8uZ1kUSmUKvY9ocTkRcAAZNH1DwcFo+dpiMJBZ5yMIRaJxXQGRCSOj-d7iOidOjicQxWkxMzQ0oQOCCDbYrytXyIAC0oh+fWkE360WWMRZUUkaw21h2AtxN2EiH6PyW8gBz0ynT+H1yythWwRDnV12FSQmqRi6TkXzmS11ylk-QioQG4RUULMQA */
  id: 'cart',
  context: {
    items: [],
  },
  initial: 'empty',
  states: {
    empty: {
      on: {
        ADD_ITEM: {
          target: 'notEmpty',
          actions: assign({
            items: ({ context, event }) => {
              return context.items.concat(event.value);
            },
          }),
        },
      },
    },
    notEmpty: {
      on: {
        ADD_ITEM: {
          guard: 'isItemInCart',
          actions: assign({
            items: ({ context, event }) => {
              return context.items.concat(event.value);
            },
          }),
        },
        REMOVE_ITEM: {
          actions: assign({
            items: ({ context, event }) => {
              return context.items.filter(item => item.id !== event.value.id);
            },
          }),
        },
        CHECKOUT: {
          target: 'empty',
          actions: assign({
            items: () => [],
          }),
        },
      },
    },
  },
});

export default cartMachine;
