import './NavLink.css'

const NavLink = (props) => {
    return (
        <li className="nav-link mobile-link">{props.text}<i class="fa-solid fa-sort-down"></i></li>
    );
}
 
export default NavLink;