import { Image } from "react-bootstrap"


export default function About () {


    return (
        <div className="vh-100 d-flex align-items-center justify-content-center mt-5">
            <div
                className="row align-items-center justify-content-center"
            >
                <div className="row justify-content-center">
                    <div className="w-25 d-flex justify-content-center">
                        <Image src="./assets/profile.jpg" className="w-75" style={{minWidth:'150px'}}/>
                    </div>
                    <div className="text-center my-4">
                        <h2 className="prime-font">I'm <span className="text-branding">Irene Dinh</span>.</h2>
                        <h2>Nice to meet you ✨</h2>
                        <div className="col-lg-5 col-sm-10 mx-auto mt-5">
                            <p>Graduated from Simon Fraser University in Interactive Art Technology and Print & Digital Publishing, I find myself passionate about creating meaningful products as user-friendly and accessible as possible. I enjoy practicing creativity every day like designing, drawing, and hand-crafting.</p><br/>
                            <p>Outside work, you can find me holding the camera wandering around the city in my spare time. I love capturing moments through the lens of the camera, exploring different angles, and getting creative.</p><br/>
                            <p>Let’s work together! You can reach me at <a className="text-branding" href="mailto:irene.dinhh@gmail.com">irene.dinhh@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}