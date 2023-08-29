import './HeaderFormBtn.css'

const HeaderFormBtn = (props) => {
    return (
        <button className="header-form-btn"><i className={props.icon}></i>{props.text}</button>
    );
}
 
export default HeaderFormBtn;