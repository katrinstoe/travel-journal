import locationIcon from '../assets/location-icon.png'

export default function Card(props){
    return(
        <div className="list--object">
            <img className="card--image" src={`/src/assets/${props.item.imageUrl}`} alt={props.title}/>
            <div className="right--column">
                <div className="country--header">
                    <img className="location--icon" src={locationIcon} alt="location-icon"/>
                    <p className="country--name">{props.item.location}</p>
                    <a className="location--link" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="sight--name">{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
            <hr></hr>
        </div>
    )
}