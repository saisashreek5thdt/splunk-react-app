
function Mailfun () {
    return(
        <div>
            <section className="mailchimp-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Please <span>Get In Touch</span></h2>
                    </div>
                    <form action="/" className="mailchimp-one__mc-form mc-form" data-url="https://xyz.us18.list-manage.com/subscribe/post?u=20e91746ef818cd941998c598&amp;id=cc0ee8140e">
                        <input type="email" id="mc-email" className="formInput" placeholder="Email address"/>
                        <button type="submit"><i className="dimon-icon-right-arrow"></i>
                            </button>
                    </form>
                    <div className="mc-form__response"></div>
                </div>
            </section>
        </div>
    );
}

export default Mailfun;