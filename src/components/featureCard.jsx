import { Image, Button } from "react-bootstrap";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function FeatureCard (props) {
    const {
        className,
        style,
        theme,
        repImg,
        projectId,
        ready,
        projectDesc,
        children,
        title,
    } = props;

    const overlay = useRef(null);
    
    return (
        <div 
            className={'drop-shadow rounded rounded-5 mb-5 overflow-hidden position-relative '+(theme==='dark'?'bg-dark text-light ':'bg-light ')+className}
            style={style} 
            onMouseEnter={()=>{overlay.current.style.opacity = 1}}
            onMouseLeave={()=>{overlay.current.style.opacity = ready&&0}}
        >
            {repImg?
                <div className="w-100">
                    <Image src={'./assets/'+projectId+'/cover.jpg'} className='w-100'/>
                </div>    
                :
                <div>
                    
                </div>
            }
            <div
                className="p-5 position-absolute shadow-overlay w-100 h-100 d-flex justify-content-center align-items-center"
                style={{zIndex:10, top:0, opacity:ready?0:1, transition:'0.3s ease'}}
                ref={overlay}


            >
                {ready?<div>
                    {title&&<h4 className="secondary-font">{title}</h4>}
                    {children&&children}
                    {/* {projectId&&
                        <Link to={'/'+projectId+'-demo'} className="pointer">
                            <Button variant="outline-light">View demo</Button>
                        </Link>
                    } */}
                    {projectDesc&&
                        <Link to={'/'+projectId}>
                            <Button variant="outline-light mt-4" className="link-light pointer">Read more</Button>
                        </Link>
                    }
                </div>
                :
                <div>
                    <h4>Coming soon</h4>
                </div>
                }
            </div>
        </div>
    )
}