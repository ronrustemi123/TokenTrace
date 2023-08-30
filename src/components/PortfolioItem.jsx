import './PortfolioItem.css'

const PortfolioItem = (props) => {
    return (
        <div className="port-item">
            <img className='port-icon' src={props.icon} alt="" />
            <div className="text-cont">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </div>
    );
}
 
export default PortfolioItem;