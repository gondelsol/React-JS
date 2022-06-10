import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ({});
    console.log(cartList);

    const addToCart = (item) => {
        console.log("item seleccionado"  ,item);

        setCartList ([
            ...cartList,
            item
        ]);
    }

    const addItem = (item, qty) => {
        const found = cartList.found(el => el.include === item.id);
        const findDuplicated = (found, cartList) => {
            cartList.forEach (element => {
                if (found.id === element.id) { return element.cartList = qty + element.cartList}
            });
        }
        if (found) {findDuplicated(found, cartList)} else { setCartList ( [...cartList, item])}
    }

    const clearList = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        const result = cartList.filter(el => el.id !== parseInt(id));
        setCartList (result);
    }

    const isInCar = (item) => {
        const found = cartList.find(el => el.id === item.id)
        console.log (found);
    }

    const data = {cartList, addToCart, addItem, clearList, removeItem, isInCar};


    return (
        <CartContext.Provider value={data}>
        {children}
        </CartContext.Provider>

    );
}

export default CartContextProvider;