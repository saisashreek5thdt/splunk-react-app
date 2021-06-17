
function Faq () {
    return(
        <div>
            <section className="faq-one">
                <img src="assets/images/background/faq-one-bg.png" alt="Awesome" className="faq-one__bg" />
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Want to ask us <span>Something?</span></h2>
                    </div>
                    <div className="accrodion-grp" data-grp-name="faq-accrodion">
                        <div className="accrodion active wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Pre and post launch mobile app marketing pitfalls to avoid</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have alteration in some by 
                                        inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion  wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="100ms">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Boostup your application traffic is just a step away</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have alteration 
                                        in some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens reprimique 
                                        no quo, ea pri verterem phaedr vel ea iisque aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="200ms">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>How to update application new features</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have alteration in 
                                        some by inject humour or random words. Lorem ipsum dolor sit amet, error insolens 
                                        reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>How to connect with the support to improve app experience</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>There are many variations of passages of available but majority have alteration 
                                        in some by inject humour or random words. Lorem ipsum dolor sit amet, error
                                        insolens reprimique no quo, ea pri verterem phaedr vel ea iisque aliquam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Faq;