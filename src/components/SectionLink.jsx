import './SectionLink.css'

const SectionLink = (props) => {
    return (
        <p  className="section-link">{props.text}<i className="fa-solid fa-chevron-right"></i></p>
    );
}
 
export default SectionLink;