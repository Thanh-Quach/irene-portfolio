import Carousel from "../../components/carousel"
import TextContainer from "../../components/textContainer"


export default function Home () {


    return (
        <div>
            <Carousel
                bgImage={'./assets/bg.jpg'}
                repImg={'./assets/logo.jpg'}
                title='Thanh Quach'
                substile='Not an ordinary tech guy'
            />
            <TextContainer
                id='featuring'
            >
                <div className="row col-10 py-5 mb-4 mx-auto justify-content-between">

                </div>
            </TextContainer>
        </div>
    )
}