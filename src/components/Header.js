import PropTypes from 'prop-types'
import React from 'react'

const Header = props => {
  const blogLinkHandle = () => {
    window.open('https://stevedsimkins.hashnode.dev', '_blank')
  }

  return (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
      <div className="logo">
        <span className="icon fa-code"></span>
      </div>
      <div className="content">
        <div className="inner">
          <h1>Steve Simkins</h1>
          <p>Front End Web3 Developer</p>
        </div>
      </div>
      <nav>
        <ul>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('intro')
              }}
            >
              Intro
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('work')
              }}
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('about')
              }}
            >
              NFT Credentials
            </button>
          </li>
          <li>
            <button onClick={blogLinkHandle}>Blog</button>
          </li>
          <li>
            <button
              onClick={() => {
                props.onOpenArticle('contact')
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
