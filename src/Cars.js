
const Cars = (props) => {
    console.log("here are cars props, ", props);
    props.history.push("/autos");
    return (<div> 
               Welcome to the Cars component. 
            </div>)
}


export default Cars;