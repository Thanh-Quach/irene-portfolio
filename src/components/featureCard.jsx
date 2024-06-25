import { Image } from "react-bootstrap";
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
        // projectDesc,
    } = props;

    const overlay = useRef(null);
    
    return (
        <Link to={ready?'/'+projectId:"#"}>
        <div
            className={'rounded rounded-5 mb-5 drop-shadow position-relative overflow-hidden '+(theme==='dark'?'bg-dark text-light ':'bg-light ')+className}
            style={style} 
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
                <div>
                    <h4>Coming soon</h4>
                </div>
            </div>
        </div>
        </Link>
    )
}