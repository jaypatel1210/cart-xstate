import { Button } from 'reactstrap';
import { CartItemProps } from './CartItem';

const DarkCartItem = ({ item, handleRemoveFromCart }: CartItemProps) => {
  return (
    <div className="border p-3 bg-dark border-danger border-4 m-2">
      <ul>
        <li className="text-center">
          <img height={80} src={item.image} alt="icon" />
        </li>
        <li className="text-center">
          <div className="text-primary">{item.name}</div>
          <span className="mr-2 text-white">Price - ₹{item.price}</span>
          <br />
          <Button color="danger" onClick={() => handleRemoveFromCart(item.id)}>
            Delete
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default DarkCartItem;
