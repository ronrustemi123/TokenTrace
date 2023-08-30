import './ButtonYellow.css'

const ButtonYellow = (props) => {

    const buttonStyle = {
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
        <button className='yellow-btn' style={buttonStyle}><a href="/">{props.text}</a></button>
    );
}
 
export default ButtonYellow;