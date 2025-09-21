function handlesubmit(){
    console.log("Form submitted");
}
export default function Form(){
    return (
        <div>
            <p>Enter number</p>
            <input type="text" />
            <button onMouseOver={handlesubmit}>Submit</button>
        </div>
    );
}