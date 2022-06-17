//import { ensayos } from "../../utils/ensayos";
import Item from "../Item/Item";

const ItemList = ({items}) => {

  return (

    <>

      <div className="container d-flex justify-content-between flex-wrap">

        {items.map((item) => (

          <Item
            key={item.id}
            categoryId={item.categoryId}
            id={item.id}
            name={item.name}
            resumen={item.resumen}
            image={item.image} />
        ))}

      </div>

    </>

  );

};

export default ItemList;
