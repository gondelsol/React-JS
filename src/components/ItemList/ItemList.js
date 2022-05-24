import { ensayos } from "../../utils/ensayos";
import Item from "../Item/Item";

const ItemList = (item) => {

  console.log(item, "item");

  return (

    <>

{
          ensayos.map((item) => 
          <div className="container d-flex justify-content-between flex-wrap">
  <Item title={item.name} description={item.description} precio={item.precio} image={item.image}/>

          </div>
        

          )
        }


 

    
    </>

  );

};
        

export default ItemList;
