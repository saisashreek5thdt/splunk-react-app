
function Banner () {
    return (
        <div>
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__moc">
                        <img src="assets/images/slider/cyber_1.png" alt="Awesome" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title">We Deliver <br/> <span>Cyber Threat</span> Intelligence.</h3>
                                <p className="banner-one__text">
                                    We are committed to providing businesses with <br/> Cyber Security Solutions.
                                </p>                                
                                <a href="/" className="banner-one__btn thm-btn "><span>Get Started</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;