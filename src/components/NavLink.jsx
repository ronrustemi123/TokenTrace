import './NavLink.css'

const NavLink = (props) => {
    return (
        <li onClick={props.func} className="nav-link mobile-link">{props.text}</li>
    );
}
 
export default NavLink;