import { createContext, useState } from "react";

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([]);


    const addToCart = ({item}, qty) => {

        console.log('Soy el addCart, estoy recibiendo el siguiente objeto',item);
        setCartList ([
            ...cartList,
            {
                id:  item.id,
                name: item.name,
                category: item.category,
                categoryId: item.categoryId,
                resumen: item.resumen,
                stock: item.stock,
                precio: item.precio,
                description: item.description,
                image: item.image,
                qtyItem: qty,
            }
        ]);
    }

    const clearList = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        console.log(id);
        const result = cartList.filter(item => item.id !== parseInt(id));
        console.log("el array filtrado es: ", result);
        setCartList(result);
        }

        const addItem = ({item}, qty) => {
            let found = cartList.find( product => product.id === item.id);
            if ( found === undefined) {
                setCartList ([
                    ...cartList,
                    {
                        id:  item.id,
                        name: item.name,
                        category: item.category,
                        categoryId: item.categoryId,
                        resumen: item.resumen,
                        stock: item.stock,
                        precio: item.precio,
                        description: item.description,
                        image: item.image,
                        qtyItem: qty,
                    }
                ]);
            } else {
                found.qtyItem += qty;
            }
        }



    const isInCar = (item) => {
        const found = cartList.find(el => el.id === item.id)
        console.log (found);
    }

    const calcTotalPerItem = (id) => {
        let index = cartList.map(item => item.id).indexOf(id);
        return cartList[index].precio * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let TotalPerItem = cartList.map(item => calcTotalPerItem(item.id));
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