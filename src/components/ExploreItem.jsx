import './ExploreItem.css'

const ExploreItem = (props) => {
    return (
        <div className="explore-item">
            <img src={props.icon} alt="" />
            <div className="item-text">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}
 
export default ExploreItem;