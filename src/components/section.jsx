import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import Slides from "./carousel"




export default function Section (props) {
    const {
        index,
        section,
        projectId
    } = props
    
    const Child = (props) => {
        const {index, children} = props;
        return(
            <div>
                {children.children?
                    <div className={"row "+(children.prototype?"align-items-center":"")}>
                        <div className={"col "+
                                (children.prototype&&index%2===0?"order-3 ":"order-1 ")+
                                (children.style==="inline"?"row align-items-center my-2":"")+
                                (children.style==="card"?
                                "shadow rounded-4 m-2 p-3 border":"")
                        }>
                            {children.title&&
                                <p
                                className={"prime-font "+
                                    (children.style==="inline"?"col-auto font-16pt":"")
                                }>
                                    <b>{children.title}</b>
                                </p>
                            }
                            {
                            children.style==="list"?
                            <ul>
                                {children.children.map((child, index)=>
                                <li>
                                    <Child
                                        key={index}
                                        index={index}
                                    >
                                        {child}
                                    </Child>
                                </li>
                                )}
                            </ul>
                            :
                            <div>
                            {children.children.map((child, index)=>
                                <div className="col">
                                    <Child
                                        key={index}
                                        index={index}
                                    >
                                        {child}
                                    </Child>
                                </div>
                            )}
                            </div>
                            }
                        </div>
                        {children.prototype&&
                            <div className={"col-4 order-2 mt-5 "+(children.prototype&&"drop-shadow p-0 rounded-3 mx-3 overflow-hidden")}>
                                <Image 
                                    src={'./assets/'+projectId+'/'+children.prototype}
                                    className="w-100"    
                                />
                            </div>
                        }
                        {children.image&&
                            <div className="col-12 mt-5">
                                <Image 
                                    src={'./assets/'+projectId+'/'+children.image}
                                    className="w-100"    
                                />
                            </div>
                        }
                    </div>
                    :
                    <p>{children}</p>
                }
            </div>
        )
    }

    return (
        <div className={(index!==0&&index%2===0?"bg-light":"")}>
        {index===0?
            <div className="row col-8 mx-auto mb-5">
                {section.children.map((item, index)=>
                    <div
                        className="col"
                        key={index}
                    >
                        <p className="prime-font">{item.title}</p>
                        <p>{item.children}</p>
                    </div>
                )}
            </div>
            :
            <div className="mx-auto col-8 py-5">
                    <h5 className="secondary-font text-branding col-auto">{section.section}</h5>
                    <div className="col row my-3 justify-content-center">
                    {section.children&&section.children.map((child, index)=>
                        <div
                            key={index}
                            className={""+(child.style==="card"?
                                "shadow rounded-4 col-3 m-2 p-3 border":"row")
                            }
                        >
                            {child.icon&&
                            <div className="text-center my-3">    
                                <i className={child.icon+" font-16pt"}/>
                            </div>    
                            }
                            <h3 className={child.style==="card"?"text-center m-0":""}>{child.title}</h3>
                            <div className="my-3 col">
                            {child.children&&child.children.map((child, index)=>
                                    <Child
                                        key={index}
                                        index={index}
                                    >
                                        {child}
                                    </Child>
                                )
                            }
                            </div>
                            {child.image&&
                            <div className="my-3">
                                <Image 
                                    src={'./assets/'+projectId+'/'+child.image}
                                    className="w-100"    
                                />
                            </div>
                            }
                            {child.images&&
                            <div className="row">
                                {child.images.map((item, index)=>
                                    <div className="col-6" key={index}>
                                        <Image src={'./assets/'+projectId+'/'+item} className="w-100"/>
                                    </div>
                                )}
                            </div>
                            }
                            {child.carousel&&
                            <div className="col-8 mx-auto">
                                <Slides
                                    projectId={projectId}
                                    slides={child.carousel}
                                />
                            </div>
                            }
                            {child.prototypes&&
                            <div className="col-6" key={index}>
                                {child.prototypes.map((items, index)=>
                                    <Image className="w-100 mb-3" key={index} src={'./assets/'+projectId+'/'+items}/>
                                )}
                            </div>
                            }
                        </div>
                    )}
                    </div>
                    {section.reference&&
                    <div className="d-flex justify-content-center col-6">
                        <Link to={section.reference.link}>
                            {section.reference.title}
                        </Link>  
                    </div>
                    }
                    {section.footerImage&&
                    <>
                    <div className="col-2 mx-auto">
                        <Image src={'./assets/'+projectId+'/title.jpeg'} className="w-100"/>
                    </div>
                    <div className="text-center my-3"><p>Join tons of exciting experience hosted by the local</p></div>
                    <div className="col-xl-4 col-md-6 mx-auto">
                        <Image src={'./assets/'+projectId+'/'+section.footerImage} className="w-100" />
                    </div>
                    </>
                    }
            </div>
        }
        </div>
    )
}