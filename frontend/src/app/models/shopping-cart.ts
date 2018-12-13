import {User} from './user';
import {CartItem} from './cart-item';

export class ShoppingCart {
	public cartItem: CartItem[];
	public cartTotal: number;
	public user: User;
}
