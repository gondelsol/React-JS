//import { ensayos } from "../../utils/ensayos";
import Item from "../Item/Item";

const ItemList = (item) => {

  console.log(item, "item");

  return (

    <>

      <div className="container d-flex justify-content-between flex-wrap">

        {item.items.map((item) => (

          <Item
            key={item.id}
            categoryId={item.categoryId}
            id={item.id}
            name={item.name}
            resumen={item.resumen}
            image={item.image}

           />
        ))}

      </div>

    </>

  );

};

export default ItemList;
