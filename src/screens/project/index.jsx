import { Image } from "react-bootstrap"
import Section from "../../components/section"


export default function Project(props) {
    const {projectDetail} = props
    return (
        <div className="">
            <div className="row vh-100 align-items-center">
                {projectDetail.showProjectTitle&&<div className="col row justify-content-center">
                    <div
                        className="col-6" 
                    >
                        <Image
                            className="w-75 mb-5"
                            src={"./assets/"+projectDetail.projectId+"/title.jpeg"}
                        />
                        <p>{projectDetail.projectIntro}</p>
                    </div>
                </div>}
                <div className="col">
                    <div className="col-10 mx-auto">
                        <Image 
                            className="w-100"
                            src={"./assets/"+projectDetail.projectId+"/header.jpeg"}
                        />
                    </div>
                </div>
            </div>
            {
                projectDetail.projectPage.map((section, index)=>
                    <Section
                        key={index}
                        index={index}
                        projectId={projectDetail.projectId}
                        section={section}
                    />
                )
            }
        </div>
    )
} 