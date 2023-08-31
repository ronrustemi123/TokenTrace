import './NavButton.css'

const NavButton = (props) => {

    const navButtonStyle = {
        padding: props.padding,
        backgroundColor: '#fcd535',
        color: '#181a20',
        border: 'none',
        outline: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: props.size,
        textAlign: 'center',
        fontWeight: props.weight,
        width: props.width
    }

    return ( 
        <button className='nav-btn' style={navButtonStyle}>{props.text}</button>
    );
}
 
export default NavButton;