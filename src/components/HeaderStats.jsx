import './HeaderStats.css'

const HeaderStats = (props) => {
    return (
        <div className="header-stats">
            <div className="stat">
                <h2 className="stat-title">{props.text}</h2>
                <p className="stat-desc">{props.desc}</p>
            </div>
        </div>
    );
}
 
export default HeaderStats;