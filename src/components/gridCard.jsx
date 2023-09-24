
export default function GridCard (props) {
    const {
        col,
        bgColor,
        title,
        children,
        repImgs
    } = props;
    
    return (
    <>
    {(title||children)&&<div
        className={"mb-3 col col-lg-"+col}
    >
        <div 
            className="rounded rounded-3 p-5 h-100 row me-1"
            style={{backgroundColor: '#'+bgColor}}
        >    
            <div
                className="col-auto order-2"
                style={{maxWidth:'40%'}}
            >
                <h5>{title}</h5>
                {children}
            </div>
            {(title||children)&&repImgs}
        </div>
    </div>}
    {!(title||children)&&repImgs}
    </>
    )
}