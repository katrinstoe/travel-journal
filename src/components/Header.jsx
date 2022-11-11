import wanderlust from '../assets/header-page.jpg'
export default function Header(){
    return(
        <div>
            <img className="header--img" src={wanderlust} alt="wanderlust-header-img"/>
        </div>
    )
}