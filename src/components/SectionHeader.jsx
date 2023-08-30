import './SectionHeader.css'

const SectionHeader = (props) => {
    return (
        <h1 className="section-heading">{props.text}</h1>
    );
}
 
export default SectionHeader;