function Price({oldPrice,newPrice}){
    let oldStyles={
        textDecorationLine:"line-through",
    };
    let newStyles={
        fontWeight:"bold",
    };
    let styles={
        backgroundColor:"yellow",
       color:"red"
    }
    return (
        <div style={styles}>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}
export {Price};