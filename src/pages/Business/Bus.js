import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';
import { BsLinkedin } from 'react-icons/bs';
import ME from '../../assets/cer3.jpeg';
import './bus.css';


export default function Bus() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">
      <h2 className="title">Business Competitions</h2>
      



      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://github.com/machadop1407" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            
          </div>
          <h5 className='client__name'>rfgdfgdfgdfgdfggdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg '45'</h5>
          <small className="client__review">dfgdfgdfgdfgdfgggzdfggdg gsgfgdfgdgdgd rtfdgdfgdfgdfgfgrgdfdfdf</small>
        </div>
        <div className="image">
            <img src={ME} alt="me" />
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://github.com/machadop1407" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            
          </div>
          <h5 className='client__name'>rfgdfgdfgdfgdfggdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg '45'</h5>
          <small className="client__review">dfgdfgdfgdfgdfgggzdfggdg gsgfgdfgdgdgd rtfdgdfgdfgdfgfgrgdfdfdf</small>
        </div>
        <div className="image">
            <img src={ME} alt="me" />
          </div>
      
      </section>

      
      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://github.com/machadop1407" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            
          </div>
          <h5 className='client__name'>rfgdfgdfgdfgdfggdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg '45'</h5>
          <small className="client__review">dfgdfgdfgdfgdfgggzdfggdg gsgfgdfgdgdgd rtfdgdfgdfgdfgfgrgdfdfdf</small>
        </div>
        <div className="image">
            <img src={ME} alt="me" />
          </div>
      
      </section>

      
      <section 
        className="container testimonials__container"
      >
        
          <div className="testimonial" >
          <div className="client__avatar">
            <a href="https://github.com/machadop1407" target="_blank" rel="noreferrer">
              <BsLinkedin />
            </a>
            
          </div>
          <h5 className='client__name'>rfgdfgdfgdfgdfggdfgdfgdfgdfgdfgdfgdfgdfgdfgdfg '45'</h5>
          <small className="client__review">dfgdfgdfgdfgdfgggzdfggdg gsgfgdfgdgdgd rtfdgdfgdfgdfgfgrgdfdfdf</small>
        </div>
        <div className="image">
            <img src={ME} alt="me" />
          </div>
      
      </section>

      



    </div>
    </AnimatedPage>
  )
}