

export default function TextContainer (props) {
    const {
        id,
        substile,
        children
    } = props;

    return (
    <div
        id={id}
        className='bg-black m-0 align-items-center justify-content-center'
        style={{height: '75vh'}}
    >
        {id&&<h1 className='text-white text-center'>{id[0].toUpperCase() +
    id.slice(1)}</h1>}
        {substile&&<p className='text-white text-center secondary-font font-16pt'>{substile}</p>}
            {children}
    </div>
    )
}