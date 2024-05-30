import placeholder from './assets/placeholder.jpg'

function Card(props) {
    return (
        <article className="card">
            <div><img src={props.flag?props.flag:placeholder} className="card-img" alt="" /></div>
            <div className="card-body">
                <h2 className="card-title">{props.countryName}</h2>
            </div>
        </article>
    )
}

export default Card