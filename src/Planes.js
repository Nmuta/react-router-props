
const Planes = (props) => {
console.log("the props are ", props)
props.history.push("/aircraft")
return (<div> I am a plane named {props.name} </div>) 

}


export default Planes;