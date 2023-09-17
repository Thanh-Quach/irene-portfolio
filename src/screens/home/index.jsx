import Carousel from "../../components/carousel"
import TextContainer from "../../components/textContainer"
import FeatureCard from "../../components/featureCard"
import Projects from "../../projects/projectInfo.json"


export default function Home () {


    console.log(Projects)
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
                <div className="row w-75 mx-auto">
                    {Projects.map((item, index)=>
                        <div
                            key={index}
                            className="col"
                        >
                            <FeatureCard
                                theme='dark'
                                repImg={item.repImg}
                                projectId={item.projectId}
                                title={item.title}
                                projectDesc={item.projectDesc}
                            >
                                <p>{item.projectIntro}</p>
                            </FeatureCard>
                        </div>
                    )}
                </div>
            </TextContainer>
        </div>
    )
}