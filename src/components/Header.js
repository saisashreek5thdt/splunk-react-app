import Logo from "./Logo";
import Navbar from "./Navbar";

function Header () {
    return (
        <div>
            <header className="site-header site-header__header-one">
                <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
                    <div className="container clearfix">                        
                         <Logo />                       
                         <Navbar />
                        {/* <div className="right-side-box">
                            <a className="thm-btn header__cta-btn" href="/"><span>Login</span></a>
                        </div> */}
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;