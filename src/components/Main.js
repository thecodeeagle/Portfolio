import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import me3 from '../images/me3.jpg'
import defect from '../images/defect.jpeg'
import Confusion from '../images/Confusion.png'
import mask from '../images/mask.jpg'
import DB2 from '../images/DB2.jpg'
import skills from '../images/skills.jpg'
import logos from '../images/logos.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me 👩‍🎓</h2>
          <span className="image main">
            <img src={me3} alt="" />
          </span>
          <p>
            Hey there, I’m Ashlesha! 👋
            <br/>
            I’m a third-year undergraduate student currently pursuing a Double Major in Computer Science and Economics from BITS Pilani, India.
            <br/><br/>
            A nature lover passionate about solving puzzles, I enjoy modelling and engineering algorithms that mimic either the “human” way of thinking or naturally occurring phenomena.
            My goal is to use my capabilities in a way that helps the community take better, data-driven decisions and improve their day-to-day lives.
            <br/> <br/>
            Shortly after my research internship at the <b> Institute of Genomics and Integrative Biology (CSIR-IGIB) </b>, where I developed a medical diagnosis software for Diabetic Retinopathy, I worked at <b> The Council of Scientific and Industrial Research-CEERI (CSIR-CEERI), Pilani, </b> as a research intern for six months. I built a deep learning-based solution that significantly improved the existing accuracy in recognizing distracted drivers, a leading cause of road accidents.
            <br/> <br/>
            Technologies I enjoy the most working with include:
            <b> Python, C/C++, Keras, Tensorflow and PyTorch. </b>
            You can find more about my skills *here*.
            <br/> <br/>
            I am always open to collaborations with impactful work. Feel free to reach out if you want to work together :)

            </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work Experience</h2>
          <p>
            <ol>
            <b><li> Council Of Scientific And Industrial Research–Central Electronics Engineering Research Institute (CSIR–CEERI), Pilani, India </li> </b>
            &nbsp; <i>August 2020 - January 2020 </i>
            <ul>
            <li> Worked as a Research Intern under the supervision of Senior Scientist,<br/> Dr. Dhiraj Sangwan</li>
            <li> Developed a weighted ensemble of neural network architectures to accurately predict whether a driver is distracted or driving safely </li>
            <li> Used the nature-inspired "Genetic Algorithm" to efficiently create the ensemble </li>
            <li> Tested the approach on two popular driver distraction datasets, the AUC Distracted Driver Dataset, achieving an accuracy of 96.498%(~0.5% gain above state-of-art)
            and the State Farm Driver Distraction Dataset, attaining an accuracy of 99.75%.</li>
            <li> Tech Stack Used : Python, Keras and PyTorch </li>
            <li> Check out the project *here*. </li>
            <br/>
            </ul>
            <b><li>Institute of Genomics and Integrative Biology (CSIR–IGIB), New Delhi, India </li></b>
            &nbsp; <i>May 2020 - June 2020 </i>
            <ul>
            <li> Worked as a Research Intern under the supervision of Senior Scientist, <br/>Dr. S. Ramachandran</li>
            <li> Created a fully functioning GUI based software, “Detect Retino”, used to deliver a probabilistic score indicative of a patient having Diabetic Retinopathy  </li>
            <li> Designed a questionaaire asking user for select information such as ethnicity, allele type for particular genes and daily lifestyle habits</li>
            <li> Created two weighting schemes to accurately predict the risk score based on user information entered </li>
            <li> Integrated string.db API's to capture interactions between genes for their influence on the risk factor </li>
            <li> Tech Stack Used : Python, R, Kivy </li>
            <li> Check out the project *here* </li>
            </ul>
            </ol>
            </p>
          {close}
        </article>
        <article
          id="projects"
          className={`${this.props.article === 'projects' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <p>
          <hr/>
          <b> <center> Driver Distraction Recognition Using GA-Based Ensemble of CNN's </center></b>
          <span className="image main">
            <img src={Confusion} alt="" />
          </span>
          <p> Through this project, I aim to tackle the driver distraction classification problem, creating an ensemble of deep learning architectures(six models) weighted using a Genetic Algorithm.
          Driver distraction is the leading cause of fatalities and road accidents, and hence I designed a system that is efficient in real-time detection as well. The project detects and classifies drivers as distracted by 10 types of factors including texting or talking on phone, drinking/eating, adjusting hair or conversing with co-passengers.
          <br/> Click below for further details:
          </p>
          <center>  <button><a href="https://github.com/thecodeeagle/Genetic-Algorithm-Based-Ensemble-for-Driver-Distraction-Recognition" className="icon fa-github">   Source  </a></button></center>
          <hr/>

            <b> <center>  Vision-Based Defect Recognition Using Fusion Techniques </center></b>
            <span className="image main">
              <img src={defect} alt="" />
            </span>
            <p>The basic idea behind this project is to automatically extract the defect information in modern manufacturing parts making use of a three-level Gaussian pyramid to generate multi-level information of the defect, in order to ensure more data for model training.
            Achieved an accuracy of 99.55% in less than 5 epochs for each level.
            <br/> Click below for further details:
            </p>

            <center>  <button><a href="https://github.com/thecodeeagle/Defect-Recognition-Using-Fusion-Techniques" className="icon fa-github"> Source  </a></button></center>
            <hr/>
            <b> <center> COVID-19 : Real-Time Vision-based Face Mask Detection </center></b>
            <span className="image main">
              <img src={mask} alt="" />
            </span>
            <p> This project was inspired by the need for having an efficient, accurate yet fast system for the face mask detection during the COVID-19 pandemic in public areas.
            Making use of an advanced deep learning baseline Framework, EfficientNet B0, I achieved an accuracy of 99.75% with an inference speed of 117 frames per second, ideal for real-time applications.
            <br/> Click below for further details:
            </p>
            <center>  <button><a href="https://github.com/thecodeeagle/COVID-19-Real-Time-Face-Mask-Detector" className="icon fa-github">   Source  </a></button></center>

            <hr/>
            <b> <center> Diabetic Retinopathy Risk Prediction Software </center></b>
            <span className="image main">
              <img src={DB2} alt="" />
            </span>
            <p>The current project aims to deliver a probabilistic score indicating a person's risk of being diagnosed with Diabetic Retinopathy. DetectRetino, the GUI based software developed as an outcome of this project employs a  user-interface that is designed in such a way that the user only needs to enter select information and fill in few multiple-choice questions per gene pertaining to allele type, SNP polymorphisms, ethnicity, gender and lifestyle habits. The program based on the algorithm then calculates a risk score automatically indicating the probability of the patients having Diabetic Retinopathy.
            <br/> Click below for further details:
            </p>
            <center>  <button><a href="https://github.com/thecodeeagle/Diabetic-Retinopathy-Risk-Prediction" className="icon fa-github">   Source  </a></button></center>


            </p>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <span className="image main">
            <img src={logos} alt="" />
          </span>
          <p>
         <h3> Technical </h3>
         <ol>
         <li> Deep Learning and Computer Vision</li>

           <ul>
             <li> Feature Extraction and Feature Scaling, Data Augmentation and Preprocessing </li>
             <li> Image Processing and Classification </li>
             <li> Object Recognition; Action Recogntion; Object Localisation </li>
             <li> Convolutional Neural Networks, Recurrent Neural Networks </li>
             <li> Transfer Learning Techniques </li>
           </ul>

          <li> Software Development</li>

            <ul>
              <li> Object Oriented Programming and Design Patterns</li>
              <li> GUI Basics (Using Python and Tkinter) </li>
              <li> Frontend Web Dev : Responsive Website Design, UI/UX </li>
             </ul>
         </ol>

         <h3> Programming</h3>
         <ul>
         <li> <b>Languages : </b> Proficient: Python, C/C++; Familiarity: Java, R </li>
         <li> <b>Frameworks :</b>
         <ul>
           <li> Python-Based : Keras, Tensorflow, Numpy, Scikit-Learn </li>
           <li> Web : Django, Flask, Bootstrap </li>
         </ul>
         </li>
         <li><b> Platforms:</b> Jupyter, Google Colab </li>
         <li><b>Version Control Systems :</b> Git and GitHub </li>
         <li><b>Database Management Systems : </b>PostgreSQL </li>
         </ul>
         </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
          <li>
              <a href="https://www.linkedin.com/in/ashlesha-kumar-bitsp" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/thecodeeagle"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
