import './App.css'
import logo from '../src/img/logo.svg'
import { CgMenuRightAlt } from "react-icons/cg";
import BMWVideo from '../src/video/bmw.mp4'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useState } from 'react';
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".heroCont",
        pin: true,
        start: "20% 20%",
        end: "600% 90%",
        scrub: 2,
      }
    })
    tl.to('.divL1', {
      scale: 0.8,
      rotate: '-20deg',
      x: '-100vh',
      y: '-50px'
    }, 'a')
    tl.to('.divL2', {
      scale: 0.8,
      rotate: '50deg',
      x: '-100vh',
      y: '50px'
    }, 'a')
    tl.to('.divR2', {
      scale: 0.4,
      rotate: '40deg',
      x: '100vh',
      y: '50px'
    }, 'a')
    tl.to('.frontCont', {
      opacity: 0,
    }, 'a')
    tl.from('.mainLogo', {
      scale: 0,
      opacity: 0,
      duration: 1,
    }, 'a')


    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".puncHText2 ",
        start: "top 50%",
        end: "400% 20%",
        scrub: 2,
      }
    })
    t2.to('.puncHText2 h1 ', {
      width: '100%',
    })

    let cr = gsap.timeline({
      scrollTrigger: {
        trigger: '.SecondCont',
        start: '59% 50%',
        end: '850% 50%',
        scrub: true,
        pin: true
      }
    })
    cr.to('.svg', {
      maskSize: '300%'
    }, 'a1')
    cr.from('.imgBMW', {
      scale: 1.2
    }, 'a1')
    cr.to('.svg1', {
      maskSize: '300%'
    }, 'b1')
    cr.from('.imgBMW1', {
      scale: 1.2
    }, 'b1')
    cr.to('.svg2', {
      maskSize: '300%'
    }, 'c1')
    cr.from('.imgBMW2', {
      scale: 1.2
    }, 'c1')

    let d = document.querySelector('.scrol').offsetWidth - window.screen.width + 100

    let time1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.SlideCont',
        start: 'top top',
        end: '800% 50%',
        scrub: 2,
        pin: true,
      }
    })
    time1.to('.scrol', {
      x: -d,
      duration: 2,
    }, 'x')
    time1.to('.bigimg1', {
      rotate: -16,

    }, 'x')
    time1.to('.bigimg2', {
      rotate: 16,

    }, 'x')
    time1.to('.bigimg3', {
      rotate: -16,

    }, 'x')
    time1.to('.bigimg4', {
      rotate: 16,

    }, 'x')


    let own = gsap.timeline({
      scrollTrigger: {
        trigger: '.part3',
        start: 'top top',
        end: '280% 80%',
        scrub: 2,
        pin: true,
      }
    })
    own.to('.spnt2', {
      width: '100%',
      stagger: 0.5
    })

  }, [])


  const textArr = ['Experience', 'an', 'entirely', 'new', 'sensation', 'of', 'sheer', 'driving', 'pleasure.', 'After', 'all', 'nothing', 'compares', 'with', 'the', 'feeling', 'of', 'gliding', 'almost', 'silently', 'through', 'urban', 'or', 'rural', 'traffic', 'the', 'instant', 'response', 'of', 'the', 'electric', 'engine', 'and', 'unique', 'acceleration', 'from', 'stand-still', 'And', 'all', 'of', 'this', 'is', 'free', 'of', 'exhaust', 'fumes', 'and', 'local', 'emissions.', 'Join', 'us', 'to', 'explore', 'the', 'world', 'of', 'BMW', 'electric', 'cars.']
  console.log(textArr.length)

  const [MClick , SetMClick] = useState(false)

  function MenuClick(){
    if(MClick == false){
      SetMClick(true)
    }
    else{
      SetMClick(false)
    }
  }

  return (
    <>
      <div className="mainCont">

        {/* NavBar */}
        <div className="NavCont">
          <img className='logo' src={logo} alt="" />
          <CgMenuRightAlt onClick={MenuClick} className='Menu' />
        </div>

        <div  className={`navBox ${MClick == true && 'active'}`}>
          <h1>Models</h1>
          <h1>Electric</h1>
          <h1>Configurator</h1>
          <h1>Visit Online Shop</h1>
          <h1>More BMW</h1>
        </div>

        {/* Hero Cont */}
        <div className="heroCont">
          <div className="VideoBox">
            <video muted autoPlay loop className='video' src={BMWVideo}></video>
            <div className='mainLogoBox'>
              <h1 className='mainLogo'>BMW</h1>
            </div>
          </div>

          {/* FrontEnd Cont */}
          <div className="frontCont">
            <div className='imgHeroCont'>
              <div className="leftDiv">
                <div className="divL1">
                </div>
                <div className="divL2">
                </div>
              </div>
              <div className="rightDiv">
                <div className="divR2">
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Cont */}
        <div className="SecondCont">
          <div className='punch'>
            <div className='puncHText1'>
              <h1>FIND YOUR BMW.</h1>
            </div>
            <div className='puncHText2'>
              <h1>FIND YOUR BMW.</h1>
            </div>
          </div>

          <div className="ShowCase">
            <div className="svg">
              <div className="imgBMW">
                <div className="svg1">
                  <div className="imgBMW1">
                    <div className="svg2">
                      <div className="imgBMW2">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="SlideCont">
          <div className='S1' >
            <div className='scrol'>
              <h1>Find A New Car.</h1>
              <div className="bigimg1">
              </div>
              <div className="bigimg2">
              </div>
              <div className="bigimg3">
              </div>
              <div className="bigimg4">
              </div>
              <div className="bigimg5">
              </div>
            </div>
          </div>
        </div>

        <div className="part3">
          <div className='p3outer'>
            {
              textArr.map((item, index) => (
                <span className='spanOne' key={index}>
                  <h1 className='spnt'>{item}</h1>
                  <span className='spantwo' key={index}>
                    <h1 className='spnt2'>{item}</h1>
                  </span>
                </span>
              ))
            }
          </div>

          {/* Footer */}
          <footer className="footer">
            <div className="footer-content">
              <div className="footer-section">
                <h4>Contact</h4>
                <ul>
                  <li><a href="#!">Find a Dealer</a></li>
                  <li><a href="#!">Request a Test Drive</a></li>
                  <li><a href="#!">Careers</a></li>
                  <li><a href="#!">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#!">Build your BMW</a></li>
                  <li><a href="#!">BMW Financial Services</a></li>
                  <li><a href="#!">BMW Safety</a></li>
                  <li><a href="#!">EMI Calculator</a></li>
                  <li><a href="#!">BMW Premium Selection (Used Cars)</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Experience BMW</h4>
                <ul>
                  <li><a href="#!">BMW Group</a></li>
                  <li><a href="#!">BMW Excellence Club</a></li>
                  <li><a href="#!">BMW Motorrad</a></li>
                  <li><a href="#!">Charging Network</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Legal</h4>
                <ul>
                  <li><a href="#!">Legal Disclaimer/Imprint</a></li>
                  <li><a href="#!">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="social-icons">
                <a href="#!"><i className="fab fa-facebook-f"></i></a>
                <a href="#!"><i className="fab fa-instagram"></i></a>
                <a href="#!"><i className="fab fa-twitter"></i></a>
                <a href="#!"><i className="fab fa-youtube"></i></a>
                <a href="#!"><i className="fab fa-linkedin"></i></a>
              </div>
              <p>© BMW AG 2024</p>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
