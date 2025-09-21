
function Greet({name,color}){
    let Style={backgroundColor:color};
  return (<div>
<h4 style={Style}>hello {name+"!"}</h4>
  </div>);
}
export default Greet;