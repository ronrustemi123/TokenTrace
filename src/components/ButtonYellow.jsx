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
        <button onClick={(e) => {props.err1(e) ; props.err2(e)}} type='submit' className='yellow-btn' style={buttonStyle}>{props.text}</button>
    );
}
 
export default ButtonYellow;