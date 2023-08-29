import './SectionHeader.css'

const SectionHeader = (props) => {
    return (
        <h1 className="section-header">{props.text}</h1>
    );
}
 
export default SectionHeader;