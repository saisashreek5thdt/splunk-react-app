
function Footer () {
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

    return(
        <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget__about">
                                    <img src="assets/images/logo/logo.png" width="119" alt="" className="footer-widget__logo"/>
                                    <p className="footer-widget__contact"><a href="tel:9811460684">9811460684</a></p>
                                    <p className="footer-widget__contact"><a href="tel:9966780269">9966780269</a></p>                                    
                                    <p className="footer-widget__contact"><a href="mailto:info@5thdt.com">info@5thdt.com</a> </p>                                    
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Explore</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a rel="noopener noreferrer" href="/">About</a></li>
                                        <li><a rel="noopener noreferrer" href="/">Our Team</a></li>
                                        <li><a rel="noopener noreferrer" href="/">Features</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Functions</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a rel="noopener noreferrer" href="/">Security</a></li>
                                        <li><a rel="noopener noreferrer" href="/">IT</a></li>
                                        <li><a rel="noopener noreferrer" href="/">DevOps</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Address</h3>
                                    <p className="footer-widget__contact">808, 8th Floor, <br/> Deccan Towers, <br/> Basheer Bagh <br/> Hyderabad, India</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="site-footer__social">
                                        <a rel="noopener noreferrer" href="https://twitter.com/splunk" target='_blank' className="fa fa-twitter"></a>
                                        <a rel="noopener noreferrer" href="https://www.facebook.com/splunk" target='_blank' className="fa fa-facebook-square"></a>
                                        <a rel="noopener noreferrer" href="https://www.linkedin.com/company/splunk" target='_blank' className="fa fa-linkedin-square"></a>
                                        <a rel="noopener noreferrer" href="https://www.youtube.com/user/splunkvideos" target='_blank' className="fa fa-youtube-play"></a>                                            
                                        <a rel="noopener noreferrer" href="https://www.instagram.com/splunk/" target='_blank' className="fa fa-instagram"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="inner-container text-center">
                            <p className="site-footer__copy">
                                &copy; copyright {getCurrentYear()} by <a rel="noopener noreferrer" href="http://5thdt.com/" target='_blank'>5TH Dimension Technologies</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;