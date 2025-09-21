import "./title.css"
function Title({value}){
  return (
    <div>
      {value>=300?<p>greater then 300</p>:<p>lless then 300</p>}
    </div>
    
  );
}
function Head(){
  return <h1></h1>;
}
export{ Title,Head}