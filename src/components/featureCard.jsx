import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FeatureCard (props) {
    const {
        className,
        theme,
        repImg,
        projectId,
        projectDesc,
        children,
        title,
    } = props;

    return (
        <div className={'drop-shadow rounded rounded-3 '+(theme==='dark'?'bg-dark text-light ':'bg-light ')+className}>
            {repImg?
                <Image src={'./assets/'+projectId+'/cover.jpg'} className='w-100 rounded-top-3'/>
                :
                <div>
                    
                </div>
            }
            <div className="px-3 pt-3">
                {title&&<h4 className="secondary-font">{title}</h4>}
            </div>
            <div
                className="px-3 pb-3 pt-1"
            >
                {children&&children}
                {projectId&&
                    <Link to={'/'+projectId+'-demo'}>
                        <Button variant="outline-light">View demo</Button>
                    </Link>
                }
                {projectDesc&&
                    <Link to={'/'+projectId}>
                        <Button variant="link" className="link-light">Read more</Button>
                    </Link>
                }
            </div>
        </div>
    )
}