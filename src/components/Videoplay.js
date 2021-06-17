
function Videoplay () {
    return (
        <div>
            <section className="video-one" id="video">
                <img src="assets/images/background/video-one-bg.png" alt="Awesome" className="video-one__bg" />
                <div className="container wow fadeInUp" data-wow-duration="1500ms">
                    <div className="video-one__box ">
                        <img src="assets/images/resources/video-1-1.jpg" alt="" />
                        <div className="video-one__content">
                            <a href="https://www.youtube.com/watch?v=coI_aT4BDNA" className="video-popup video-one__btn">
                                <i className="fa fa-play"></i>
                            </a>                                
                            <h2 className="video-one__title">Watch Our <span>Tutorial</span> <br/> Videos.</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Videoplay;