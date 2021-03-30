let history_method = ()=> console.log("initial props");


const programmaticLink = () => {
    console.log("receiving", history_method)
    history_method.push("/planes");
 }


const Cars = (props) => {
    history_method  = props.history;
    return (<div> 
            <button onClick={programmaticLink}> go to planes </button>
            </div>)
}


export default Cars;