import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default function Slides (props) {
    const {
        slides,
        projectId
    } = props

  return (
    <Carousel data-bs-theme="dark">
    {slides.map((item, index)=>
      <Carousel.Item 
        key={index}
        interval={item.interval||4000}>
        <div 
            className='overflow-hidden d-flex align-items-center justify-content-center'
            style={{height:'500px'}}
        >
            <Image 
                src={'./assets/'+projectId+'/'+(item.image||item)+'.jpeg'}
                className='w-100'
            />
        </div>
        <Carousel.Caption>
          {item.title&&<h3>{item.title}</h3>}
          {item.cation&&<p>{item.cation}</p>}
        </Carousel.Caption>
      </Carousel.Item>
    )}
    </Carousel>
  );
}
