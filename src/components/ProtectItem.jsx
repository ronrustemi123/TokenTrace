import './ProtectItem.css'

const ProtectItem = (props) => {
    return (
      <div className="protect-item">
        <img className="protect-icon" src={props.icon} alt="" />
        <div className="protect-text">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </div>
    );
}
 
export default ProtectItem;