import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.png';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.png';
import pic4 from '../assets/images/andrew-camera.png';
import pic5 from '../assets/images/andrew-flash-1.png';
import pic6 from '../assets/images/andrew-flash-2.png';

import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <div className="major">
          <h2>
            Hi, I'm Andrew. I'm a Full Stack Software Engineer
            <br />
            Proficient In The Following Technologies:
          </h2>
          <p data-aos="fade-right" data-aos-duration="1500">
            JavaScript | Node | React | Redux | HTML5 | CSS3
            <br />
            Git | Agile | Heroku | Travis CI-CD | Webpack | OAuth
            <br />
            Express| Sequelize ORM | PostgresSQL | RESTful API
          </p>
        </div>
      </div>
    </section>
    <section id="projects" className="projects">
      <h2>Projects</h2>
    </section>
    <section id="two" className="wrapper alt style2">
      <section className="spotlight" data-aos="flip-left" data-aos-duration="1500">
        <div className="image">
        <a href="https://haircutz.herokuapp.com/"><img src={pic1} alt="" /></a>
        </div>
        <div className="content">
          <h2><a href="https://haircutz.herokuapp.com/">HairCutz</a></h2>
          <p>
            An online multiplayer tower defense game, created with Phaser.js and Socket.io.
          </p>
          <ul className="icons">
        {config.hairCutz.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
        </div>
      </section>
      <section className="spotlight" data-aos="flip-right" data-aos-duration="1500">
        <div className="image">
        <a href="https://murray-mania.herokuapp.com/home"><img src={pic2} alt="" /></a>
        </div>
        <div className="content">
          <h2><a href="https://murray-mania.herokuapp.com/home">Murray Mania</a></h2>
          <p>
          A hub for all things Bill Murray, featuring forums, games, and sound boards. Built with React, Redux, and Howler.js.
          </p>
          <ul className="icons">
          {config.murrayMania.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        </div>
      </section>
      <section className="spotlight" data-aos="flip-left" data-aos-duration="2000">
        <div className="image">
        <a href="https://would-you-like-this.herokuapp.com/home"><img src={pic3} alt="" /></a>
        </div>
        <div className="content">
          <h2><a href="https://would-you-like-this.herokuapp.com/home">Would You Like This?</a></h2>
          <p>
            An eCommerce website designed with React, Redux, Sequelize, and Express.
          </p>
          <ul className="icons">
          {config.wouldYouLikeThis.map(social => {
            const { style, icon, name, url } = social;
            return (
              <li key={url}>
                <a href={url} className={`icon ${style} ${icon}`}>
                  <span className="label">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
        </div>
      </section>
    </section>
    <section className="wrapper style5">
    <h2 id="about" className="aboutH">About</h2>
			<div className="inner">
				<section>
					<p><span className="image left">
          <img src={pic4} alt="" className="display4" data-aos="zoom-in" data-aos-duration="1500"/>
          <img src={pic5} alt="" className="display5" data-aos="zoom-in" data-aos-duration="1500"/>
          </span>For the last six years, I've been producing events for industry-leading brands, including Timberland, Cholula, Brooklyn Brewery, and Campari America. I’ve held various event production roles at both brands and agencies, and have experience working with clients of all different backgrounds.
          <br />
          <br />
          When COVID-19 hit the event industry hard in 2020, I leaned into my technology background and began teaching myself Software Development, starting with JavaScript and Node.js. I enjoyed it so much that I enrolled in an immersive 550 hour coding bootcamp through Fullstack Academy, where I worked with several teams of Software Engineers to create real world applications.
          <br />
          <br />
          When I'm not busy coding, I'm usually taking photos, buying used synthesizers on eBay, or trying to teach my dog how to drop something that's probably stuck in his mouth.</p>
				</section>

			</div>
		</section>
    <section id="cta" className="wrapper style4">
      <div id="contact" className="inner">
        <header>
          <h2>Want To Get In Touch?</h2>
          <p>
            I'm always happy to collaborate on your project or help develop your app. Feel free to reach out and I'll get back to you as soon as I can.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="mailto:andrcohen847@gmail.com" className="button fit primary">
              Contact
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1l1_u8qVItg0WQ7k1baGtXThW5gMGJ0y1/view?usp=sharing" className="button fit">
              My Resume
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section className="wrapper style5">
    <div className="inner">
      <section>
        <form method="post" action="mailto:andrcohen847@gmail.com">
          <div className="row gtr-uniform">
            <div className="col-6 col-12-xsmall">
              <input type="text" name="demo-name" id="demo-name" defaultValue="" placeholder="Name" />
            </div>
            <div className="col-6 col-12-xsmall">
              <input type="email" name="demo-email" id="demo-email" defaultValue="" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="demo-message" id="demo-message" placeholder="Enter your message" rows="6"></textarea>
            </div>
            <div className="col-12">
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="primary" /></li>
              </ul>
            </div>
          </div>
        </form>
      </section>
    </div>
  </section>
  </Layout>
);

export default IndexPage;
