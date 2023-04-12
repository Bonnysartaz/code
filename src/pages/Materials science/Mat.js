
import AnimatedPage from "../../components/animation/AnimatedPage";
import Topbar from '../../components/topbar/Topbar';
import { BsLinkedin } from 'react-icons/bs';
import ME from '../../assets/cer3.jpeg';
import './mat.css';


export default function Mat() {
  return (
    <AnimatedPage>
      <Topbar/>
    <div className="about">
      <h2 className="title">Material Science</h2>
      



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
    
        <div className="embedContainer1">
        <iframe src="https://www.africau.edu/images/default/sample.pdf" className="embedContent1" title="pdf"></iframe>
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
      <center>
      <iframe src="https://www.africau.edu/images/default/sample.pdf" title="pf" width="700" height="500">
      </iframe>
      </center>

      



    </div>
    </AnimatedPage>
  )
}