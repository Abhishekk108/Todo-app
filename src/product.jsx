import "./product.css";
import { Price } from "./price";

function Product({title,idx}){
    let oldPrices=["100","200","300","400"];
    let newPrices=["300","500","700","800"];
    let description=["1st description","2nd description","3rd description","4th description"];
  return (
  <div className="card">
    <p>{title}</p>
    <p>{description[idx]}</p>
    <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
  </div>);
}
export {Product};