import { Parallax } from 'react-parallax';
import { Image } from 'react-bootstrap';


export default function Carousel (props) {

const {
    bgImage,
    repImg,
    title,
    substile,
} = props;

return(
    <Parallax bgImage={bgImage} style={{height:'100vh'}} bgImageStyle={{backgroundPosition:'center'}} bgImageSize='cover'>
        <div className='d-flex align-items-center justify-content-center h-100 shadow-overlay'>
            <div className='w-75 p-5'>
                {repImg&&<Image  
                    src='./assets/logo.jpg' 
                    roundedCircle
                    className='w-25 drop-shadow mx-auto d-block m-3'
                />}
                {title&&<h1 className='text-white text-center'>{title}</h1>}
                {substile&&<p className='text-white text-center secondary-font font-16pt'>{substile}</p>}
            </div>
        </div>
    </Parallax>

)}