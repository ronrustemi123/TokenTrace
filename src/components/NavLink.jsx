import './NavLink.css'

const NavLink = (props) => {
    return (
        <li className="nav-link mobile-link">{props.text}</li>
    );
}
 
export default NavLink;