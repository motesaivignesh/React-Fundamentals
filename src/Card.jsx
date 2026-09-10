import logo from './assets/RARE ESPORTS.jpeg'
function Card(){
    return(
        <div className="card">
            <img className ="card-img" src ={logo} alt ="Team Logo"></img>
            <h2 className="card-title">Rare Esports</h2>
            <p className="card-text">★★★★</p>
        </div>
        
    );

}
export default Card;