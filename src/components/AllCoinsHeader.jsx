import './AllCoinsHeader.css'



const AllCoinsHeader = () => {
    return (
        <div className="all-coins-header">
            <div className="all-coins-header-container">
                <div>
                    <h1>Markets Overview</h1>
                    <h3>All price information is in <span>USD</span></h3>
                </div>
                <div className="header-par">
                    <h2>Cryptocurrency Market Insights at Your Fingertips</h2>
                    <p>Get a comprehensive snapshot of all cryptocurrencies available on Token Trace. This page displays the latest prices, 24-hour trading volume, price changes, and market capitalizations for all cryptocurrencies on Token Trace. Users can quickly access key information about these digital assets and access the trade page from here.<br/>The data presented is for informational purposes only. Some data is provided by CoinMarketCap and is shown on an “as is” basis, without representation or warranty of any kind. Please view our General Risk Warning for more information.</p>
                </div>
            </div>
        </div>
    );
}
 
export default AllCoinsHeader;