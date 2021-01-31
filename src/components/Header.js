import PropTypes from 'prop-types'
import React from 'react'


const Header = props => (


  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content" style = {{"background-color": "rgba(0, 0, 0,0)"}}>
      <div className="inner">
        <h1> Ashlesha Kumar </h1>
        <p>
        <b>  AI/ML | DEEP LEARNING AND COMPUTER VISION | SOFTWARE DEVELOPMENT </b>

          </p>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About Me
          </button>
          &nbsp;&nbsp;&nbsp;

            <button
              onClick={() => {
                props.onOpenArticle('projects')
              }}
            >
              <span>Projects </span>
            </button>


      </div>
    </div>
    <nav style = {{"background-color": "rgba(0, 0, 0,0)", "font-width":"bold"}}>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work Experience
          </button>
        </li>


        <li>
          <button
            onClick={() => {
              props.onOpenArticle('skills')
            }}
          >
            Skills
          </button>
          </li>
          <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Get in Touch
          </button>

        </li>
        <li>

          <button
            onClick={() => window.open("https://drive.google.com/file/d/1AVSgb8bFl-xp97NZSSHpmgLDzac5wxIN/view?usp=sharing")   }      >
            Resume
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
