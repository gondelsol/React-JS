import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([]);


    const addToCart = (item) => {

        console.log('Soy el addCart, estoy recibiendo el siguiente objeto',item);

        setCartList ([
            ...cartList,
            item
        ]);

        }

    const addItem = (item, qty) => {
        const found = cartList.found(item => item.include === item.id);
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
        console.log(id);
        const result = test.cartList.filter( item => item.id  !== parseInt(id));
        console.log('el array filtrado es: '  ,result);
        setCartList(result);
    }

    const isInCar = (item) => {
        const found = cartList.find(el => el.id === item.id)
        console.log (found);
    }

    const calcTotalPerItem = (idItem) => {
        let index =cartList.map(item =>idItem).idexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let TotalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return TotalPerItem.reduce((previusValue, currentValue) => previusValue + currentValue);
    }

    const calcItemQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previusValue, currentValue) => previusValue + currentValue), 0)
    }

    const data = {cartList, addToCart, addItem, clearList, removeItem, isInCar, calcSubTotal, calcTotalPerItem, calcItemQty};


    return (
        <CartContext.Provider value={data}>
        {children}
        </CartContext.Provider>

    );
}

export default CartContextProvider;