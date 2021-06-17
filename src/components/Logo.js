function Logo () {
    return (
        <div className="logo-box clearfix">
            <a className="navbar-brand" href="index.html">
                <img src="assets/images/logo/logo.png" className="main-logo" width="119" alt="Awesome" />
            </a>
            <button className="menu-toggler" data-target=".main-navigation">
                <span className="fa fa-bars"></span>
            </button>
        </div>
    );
}

export default Logo;