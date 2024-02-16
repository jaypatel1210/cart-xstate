import { createActorContext } from '@xstate/react';
import cartMachine from '../machine/cart.machine';

const CartMachineContext = createActorContext(cartMachine);

export default CartMachineContext;
