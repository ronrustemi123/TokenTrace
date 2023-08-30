import './NavLink.css'

const NavLink = (props) => {
    return (
        <li key={props.id} className="nav-link mobile-link">{props.text}<i className="fa-solid fa-sort-down"></i></li>
    );
}
 
export default NavLink;