

export default function TextContainer (props) {
    const {
        title,
        substile,
        children
    } = props;

    return (
    <div
        className='m-0 mb-5 align-items-center justify-content-center'
    >
        {title&&<h2 className='mb-5'>{title}</h2>}
        {substile&&<p className='text-white text-center secondary-font font-16pt'>{substile}</p>}
            {children}
    </div>
    )
}