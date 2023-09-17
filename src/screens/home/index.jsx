import TextContainer from "../../components/textContainer"
import FeatureCard from "../../components/featureCard"
import Projects from "../../projects/projectInfo.json"

import { Image } from "react-bootstrap"


export default function Home () {


    return (
        <div>
            <div
                className="bg-white row align-items-center justify-content-center"
                style={{height: "75vh"}}
            >
                <div className="row justify-content-center">
                    <Image src="./assets/avatar.png" style={{width:'8%'}}/>
                    <div className="text-center">
                        <h2>Hey! come on in ✨</h2>
                        <h3 className="prime-font">I'm <span className="text-branding">Irene Dinh</span>.</h3>
                        <p>I’m a passionate UX/UI Designer based in Canada with <br/> specialties in designing human-computer interaction.</p>    
                    </div>
                </div>
            </div>
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