import PropTypes from 'prop-types'
import React, { useState } from 'react'
import intro from "../images/intro.jpg";
import nftgallery from "../images/nftgallery.jpeg";
import intotheunknown from "../images/intotheunknown.png";
import nftbarista from "../images/nftbarista.png";
import waveportal from "../images/waveportal.gif";
import stevedylanphoto from "../images/stevedylanphoto.jpg";
import solanaVideo from "../images/solana.mp4";
import nftgameVideo from "../images/nftgame.mp4";
import mintNFT from "../images/mintNFTCollection.png";
import smartContracts from "../images/smartcontracts.png";


class Main extends React.Component {
  state = { textToCopy: "0x2fd0bd0d1c846682f3730cb3f6c22052b43495a9" }
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
            <img src={intro} alt="" />
          </span>
          <p>
            Hey there!
            My name is Steve Simkins and I am a front end Web3 developer
            utilizing tools to build on the Ethereum and Solana blockchains.
            I've spent the last several years in finance, art, and customer service;
            all things I find valuable in the new world of decentralized
            finance and apps. Check out my work to see what I've been working on!
          </p>
          <p>
            Beyond my interest in Web3 development I am also an avid film
            photographer, coffee enthusiest, and mechanical keyboard nerd.
            I'm currently living in Virginia (soon to be Tennessee) with
            my wife, son, and our four cats. I'm excited to help build the
            next generation of the internet by assisting artists
            and those with finanial needs!
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
          <h2>NFT Gallery</h2>
          <span className="image main">
            <a href="https://nftgallery2021.vercel.app/" target="_blank"><img src={nftgallery} alt="NFT Gallery" /></a>
          </span>
          <p>
            NFT Gallery is a dApp built on the solana blockchain
            that allows users to share their favorite NFTs via
            an OpenSea link! Utilizing Anchor, React, and some
            OpenSea whitelist embeds, the site pulls information
            from a Solana program and displays the NFT's on a grid.
            Get a Phantom wallet with some devnet solana to try it out!
          </p>
          <h2>Into the Unknown</h2>
          <span className="image main">
            <a href="https://intotheunknown.vercel.app/" target="_blank"><img src={intotheunknown} alt="Into the Unknown" /></a>
          </span>
          <p>
            Into the Unknown is an NFT based minigame on using
            Ethereum! The art and characters are based on one of
            my favoitre shows "Over the Garden Wall," and the dApp
            allows users to mint a character to their wallet, and then
            fight "the beast." This deals damage to both the boss and
            the NFT character on blockchain! This was built with a mix
            of Solidity and React; all you need is Metamask and some
            Rinkeby test Eth to try it out!
          </p>
          <h2>NFT Barista</h2>
          <span className="image main">
            <a href="https://nft-barista.vercel.app/" target="_blank"><img src={nftbarista} alt="NFT Barista site" /></a>
          </span>
          <p>
            NFT Barista is the end result project of the _buildspace
            "mint your own NFT project." It's a Web3 app made with
            solidity, hardhat, and react. After you connect Metmask
            and get some Rinkeby testnet, you can order yourself a
            cup of "crypto coffee," and the NFT barista will mint an
            NFT for you! It will also provide you a link to see your
            NFT on Opensea.io!
          </p>
          <h2>Waveportal</h2>
          <span className="image main">
            <a href="https://waveportalss.vercel.app/" target="_blank"><img src={waveportal} alt="waveportal site" /></a>
          </span>
          <p>
            Waveportal is a project made with the help of _buildspace,
            and it is a Web3 app with smart contracts on the Ethereum
            blockchain! It really opened my eyes to the possibilities
            of blockchain technology and the future of DeFi. It even
            inspired me to look into blockchain development as a
            career choice!
          </p>
          <h2>Steve Dylan Photo</h2>
          <span className="image main">
            <a href="https://stevedylanphoto.com/" target="blank"><img src={stevedylanphoto} alt="stevedylanphoto site" /></a>
          </span>
          <p>
            stevedylanphoto is my portfolio site for my photography work.
            This is one of my first sites that I have tweaked here and there,
            but it remains a fairly simple yet elegant example of html, css,
            and javascript. I particular enjoy its clean layout using flexbox
            grid, and how well it handles on mobile devices.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''
            }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">NFT Credentials</h2>
          <p>Here is a list of NFTs I've earned by building Web3 projects! You can also see them on my <a href="https://opensea.io/stevedsimkins" target="_blank">OpenSea</a> profile</p>
          <button style={{ width: "100%", margin: "0 auto" }} onClick={() => { navigator.clipboard.writeText(this.state.textToCopy) }}>Copy Wallet Address</button>
          <p></p>
          <h3>
            Buildspace: Build a Solana App | Cohort Alkes | #228
          </h3>
          <span className="image main">
            <video src={solanaVideo} type="video/mp4" autoPlay loop controlsList="nodownload" muted controls="none" autoPictureInPicture="false" disablePictureInPicture />
          </span>
          <p>Contract Address: <a href="https://polygonscan.com/address/0x3cd266509d127d0eac42f4474f57d0526804b44e" target="_blank">0x3CD266509D127d0Eac42f4474F57D0526804b44e</a> Token ID: 2892 <a href="https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/2892" target="_blank">OpenSea Link</a>
          </p>
          <h3>Buildspace: Create a NFT Game | Cohort Alkes | #214</h3>
          <span className="image main">
            <video src={nftgameVideo} type="video/mp4" autoPlay loop controlsList="nodownload" muted controls="none" autoPictureInPicture="false" />
          </span>
          <p>Contract Address: <a href="https://polygonscan.com/address/0x3cd266509d127d0eac42f4474f57d0526804b44e" target="_blank">0x3CD266509D127d0Eac42f4474F57D0526804b44e</a> Token ID: 2238 <a href="https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/2238" target="_blank">OpenSea Link</a>
          </p>
          <h3>Buildspace: Build a Web3 App: Mint Your Own NFT collection | Cohort Alkes | #198</h3>
          <span className="image main">
            <img src={mintNFT} alt="Mint NFT Collection" />
          </span>
          <p>Contract Address: <a href="https://polygonscan.com/address/0x3cd266509d127d0eac42f4474f57d0526804b44e" target="_blank">0x3CD266509D127d0Eac42f4474F57D0526804b44e</a> Token ID: 578 <a href="https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/578" target="_blank">OpenSea Link</a>
          </p>
          <h3>Buildspace: Intro to Web3 | Cohort Capella | #189 of 200</h3>
          <span className="image main">
            <img src={smartContracts} alt="Smart Contract NFT" />
          </span>
          <p>Contract Address: <a href="https://polygonscan.com/address/0x3cd266509d127d0eac42f4474f57d0526804b44e" target="_blank">0x3CD266509D127d0Eac42f4474F57D0526804b44e</a> Token ID: 871 <a href="https://opensea.io/assets/matic/0x3cd266509d127d0eac42f4474f57d0526804b44e/871" target="_blank">OpenSea Link</a>
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
