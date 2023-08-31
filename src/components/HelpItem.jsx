import './HelpItem.css'
import SectionLink from './SectionLink';



const HelpItem = (props) => {
    return (
      <div className="help-item">
        <img className="help-icon" src={props.icon} alt="" />
        <div className="help-text">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <SectionLink text={props.link}/>
        </div>
      </div>
    );
}
 
export default HelpItem;