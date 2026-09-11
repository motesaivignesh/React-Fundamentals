
function Usergreeting(props){

    const welcome=<h2 className="wel">welcome {props.username}</h2>

    const login=<h2 className="Log">Please login to continue</h2>

    return(props.isLogged?welcome:login);
}
export default Usergreeting;