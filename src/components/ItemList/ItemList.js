import { ensayos } from "../../utils/ensayos";
import Item from "../Item/Item";

const ItemList = (item) => {

  console.log(item, "item");

  return (

    <>
    <div className="container d-flex justify-content-between flex-wrap">

        {
          ensayos.map((item) => (
          <Item key={item.id} title={item.name} description={item.description} precio={item.precio} image={item.image}
          />

          ))}

</div>
    </>

  );

};

export default ItemList;
