import { Children, createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({Children}) => {

    const [cartList, setcartList] = useState ([]);

    return (
        <CartContext.Provider value={cartList}>
        {Children}
        </CartContext.Provider>

    );
}

export default CartContextProvider;