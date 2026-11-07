# cart-xstate

A shopping cart in React and TypeScript with its state modeled as XState v5 machines. The cart moves between `empty` and `notEmpty` states, and products have their own machine.

Pages load as lazy templates from the URL, so `/Template1` and `/Template2` render the same cart logic with different interfaces.

## Run it

```bash
npm install
npm run dev
```

Then open `http://localhost:5173/Template1`.

## Where things are

- `src/machine/`: the cart and product state machines
- `src/context/CartActorContext.tsx`: shares the cart actor with components
- `src/templates/`: the two page templates
