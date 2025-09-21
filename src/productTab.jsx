import { Product } from "./product";
function ProductTab(){
    let styles={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignitems:"center", 
        padding:"0px"
    }
  return (
  <div style={styles}>
    <Product title="prod 1" idx="0"/>
    <Product title="prod 2" idx="1"/>
    <Product title="prod 3" idx="2"/>
    <Product title="prod 4" idx="3"/>
  </div>
  );
}
export {ProductTab};