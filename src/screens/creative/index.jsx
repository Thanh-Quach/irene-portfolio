import ImgFrame from "../../components/imgFrame"

import GridCard from "../../components/gridCard"
import TextContainer from "../../components/textContainer"
import Publications from "../../projects/publication.json"
import Photography from "../../projects/photography.json"

export default function Creative () {


    return (
        <div className="col-lg-10 mx-auto">
            <div style={{height:'25vh'}}>

            </div>
            <TextContainer
                title="Book Design & Publication"
            >
            <div className="row w-100 mt-5">
            {Publications.map((item, index)=>
                    <GridCard
                        key={index}
                        id={item.id}
                        col={item.col}
                        title={item.title}
                        bgColor={item.bgColor}
                        repImgs={
                            <ImgFrame
                                className={"col "+(item.imgPos==="right"?"order-3":"order-1")}
                                style={{width:index===0?'120%':'90%', minWidth:'300px'}}
                                src={"./assets/publications/"+item.repImgs[0]}
                            />
                        }
                    >
                        {index===0&&
                        <p>The Article: <span><a className="text-branding" rel="noreferrer" target="_blank" href="https://www.sfu.ca/sfunews/stories/2021/06/students-publish-children-s-book-to-raise-awareness-about-textil.html">
                            Students publish children’s Book to raise awareness about textile recycling    
                        </a></span>
                        </p>}
                    </GridCard>
                )}
            </div>
            </TextContainer>
            <TextContainer
                title="Photography"
            >
            {Photography.map((sets, index)=>
                <div key={index} className="row w-100 mt-2">
                    {sets.map((item, index)=>
                    <GridCard
                        key={index}
                        repImgs={
                            <ImgFrame
                                className={"px-1 "+(item.col?"col-"+item.col:"col")}
                                style={{height:item.col?"100%":"auto", width:"100%"}}
                                src={"./assets/photography/"+item.asset[0]}
                            />
                        }
                    />
                    )}
                </div>
                )}
            </TextContainer>
        </div>
    )
}