const goto = null;

const programmaticLink = () => {
   // goto.push("cars")
}

const Trucks = (props1, props2) => {
    console.log("props1 coming in", props1)
    console.log("props2 coming in", props2)
    props1.history.push("/cars");
    return (<div> 
            <button onClick={programmaticLink}> go to cars </button>
            </div>)
}


export default Trucks;