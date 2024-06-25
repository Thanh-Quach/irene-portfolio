// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
// import { Link } from "react-router-dom"
// import { faGlobe } from "@fortawesome/free-solid-svg-icons"

export default function Footer () {

    return (
        <div className="row col-lg-10 col-sm-11 mx-auto align-items-center justify-content-between" 
            style={{minHeight: '25vh'}}
        >
            <div className="col-lg-6 col-sm-10">
                <div 
                    className="col-lg-6 col-sm-12 ms-auto p-5 rounded rounded-5"
                    style={{background: 'rgba(0,0,0,0.1)'}}
                >
                    <p className="text-center mb-4"><b>Contact</b></p>
                    <p>Phone: <span><a href="tel:+17783181569" className="text-branding">+1(778)318-1569</a></span></p>
                    <p>Email: <span><a href="mailto:irene.dinhh@gmail.com" className="text-branding">Email: irene.dinhh@gmail.com</a></span></p>
                </div>
            </div>
            <div className="col-lg-5 col-sm-10">
                <div
                    className="col-lg-6 col-sm-12 me-auto"
                >   
                    {/* <div className="text-branding d-flex justify-content-around my-4">
                        <Link 
                            to="https://www.linkedin.com/in/irene-dinh-8a119b18b/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}    
                            />
                        </Link>
                        <Link 
                            to="https://www.linkedin.com/in/irene-dinh-8a119b18b/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faInstagram}    
                            />
                        </Link>
                        <Link 
                            to="https://www.linkedin.com/in/irene-dinh-8a119b18b/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faGlobe}    
                            />
                        </Link>
                    </div> */}
                    <p className="text-center">© {new Date().getFullYear()} Copyright Thanh Quach. All right reserved.</p>
                </div>
            </div>
        </div>
    )
}