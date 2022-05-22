import Item from "./Item";

const ItemList = (item) => {
    return (
        <>
        <Item 

          key={item.id}
          title={item.name}
          Precio={item.precio} 
/>
      </>
    );
}
        

export default ItemList;
