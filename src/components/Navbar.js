
function Navbar () {
    return (
        <div className="main-navigation">
            <ul className="one-page-scroll-menu navigation-box">
                <li className="current scrollToLink">
                    <a href="#banner">Home</a>
                    <ul className="sub-menu">
                        <li><a href="/">Home 01</a></li>
                        <li><a href="/">Home 02</a></li>
                        <li><a href="/">Header Versions</a>
                            <ul className="sub-menu">
                                <li><a href="/">Header 01</a></li>
                                <li><a href="/">Header 02</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="scrollToLink">
                    <a href="#features">Features</a>

                </li>
                <li className="scrollToLink">
                    <a href="#video">Video</a>

                </li>
                <li className="scrollToLink">
                    <a href="#pricing">Pricing</a>
                </li>
                <li className="scrollToLink">
                    <a href="#screenshots">App Screenshots</a>
                </li>
                <li className="scrollToLink">
                    <a href="#news">News</a>
                    <ul className="sub-menu">
                        <li><a href="/">News Page</a></li>
                        <li><a href="/">News Details</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;