import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
import pic05 from '../images/pic05.jpg'
import pic06 from '../images/pic06.jpg'

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
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic04} alt="" />
          </span>
          <p>
            Hey there!
            My name is Steve Simkins and I am a web developer specializing in
            React and web design. I have spent the majority of my professional
            career in both customer service and art, and I believe successful
            web design both solves people's problems and looks good doing it.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <a href="https://waveportal.netlify.app/" target="_blank"><img src={pic06} alt="waveportal site" /></a>
          </span>
          <p>
            Waveportal is a project made with the help of _buildspace,
            and it is a Web3 app with smart contracts on the Ethereum
            blockchain! It really opened my eyes to the possibilities
            of blockchain technology and the future of DeFi. It even
            inspired me to look into blockchain development as a
            career choice!
          </p>
          <span className="image main">
            <a href="https://devtimer.netlify.app/" target="blank"><img src={pic05} alt="devtimer site" /></a>
          </span>
          <p>
            DevTimer is a project currently in development and it's goal is to
            assist film photographers. I personally shoot a lot of film
            photography and develop it myself, and one of the things I've
            always wanted is a timer that will go from stage to stage
            without interruptions. That is the goal of this project
            and you can find our more about it on my <a href="https://stevedsimkins.blog" target="_blank">blog!</a>
          </p>
          <span className="image main">
            <a href="https://stevedylanphoto.com/" target="blank"><img src={pic02} alt="stevedylanphoto site" /></a>
          </span>
          <p>
            stevedylanphoto is my portfolio site for my photography work.
            This is one of my first sites that I have tweaked here and there,
            but it remains a fairly simple yet elegant example of html, css,
            and javascript. I particular enjoy its clean layout using flexbox
            grid, and how well it handles on mobile devices.
          </p>
          <span className="image main">
            <a href="https://manywaters.me/" target="blank"><img src={pic03} alt="manywaters site" /></a>
          </span>
          <p>
            Manywaters is a project I did for Brad Knudsen, a indie artist
            that works in analog synth mediums. This was another fairly simple
            site that implemented slightly more complicated libraries such as
            gsap and scrolltrigger. I also used different animation methods on
            the svgs inside the project.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic01} alt="bio picture" />
          </span>
          <p>
            I currently live in Coastal Virginia with my wife Madison,
            our son Theo, and our four cats. My hobbies and interests
            include film photography, tech, mechanical keyboards,
            and of course web development.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://formspree.io/f/mbjqzjkk">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
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
              <a
                href="https://twitter.com/stevedsimkins" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/sdsimkins" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com/stevedylanphoto/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/stevedsimkins/" className="icon fa-github">
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
