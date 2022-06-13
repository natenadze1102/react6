import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

let CartProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatch({ type: 'ADD', item: item });

    };

    const removeItemFromCartHandler = (id) => {
        dispatch({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;