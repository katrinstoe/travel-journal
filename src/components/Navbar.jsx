import world from '../assets/world.png'

export default function Navbar(){
    return(
        <nav>
            <img className="nav--logo" src={world} alt="world-icon"/>
            <h3 className="nav--text">my travel journal</h3>
        </nav>
    )
}