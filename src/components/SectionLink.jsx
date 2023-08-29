import './SectionLink.css'

const SectionLink = (props) => {
    return (
        <a href="/" className="section-link">{props.text}<i className="fa-solid fa-chevron-right"></i></a>
    );
}
 
export default SectionLink;