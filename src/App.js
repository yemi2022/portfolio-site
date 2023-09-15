import './my-js/index'
import './App.css'
import profile from './assets/portrait3.jpg'
import pic from './assets/cartoon-html.jpg'
import pic2 from './assets/cartooon-vue.jpg'
import weather from './assets/weather.jpg'
import portfolio from './assets/portfolio.jpg'
import job from './assets/job-api.jpg'
import ReactTyped from "react-typed"

function App() {
  return (
    <div className="App">
      <header>
        <div id="home">
            <div id="headerwrap">
                <div id="summary" className='p-0 bg-none'>
                    <h1 className='text-center text-6xl sm:text-4xl font-bold mb-8 sm:mb-4 sm:tracking-wide'>I am Opeyemi Obidare</h1>
                    <div className='h-4'>
                      <p className="typewrite text-3xl font-bold sm:text-2xl">
                        I am a{" "}
                        <ReactTyped
                          strings={["developer", "designer", "freelancer"]}
                          typeSpeed={100}
                          loop
                          backSpeed={50}
                          cursorChar="|"
                          showCursor={true}
                      />
                      </p>
                    </div>
                </div>
            </div>
        </div>

        
        
          
        <div id="top" className='text-white w-screen h-[11vh] landscape:sm:h-[15vh] sm:h-[8vh] z-10'>
          <h2 className='text-2xl sm:text-xl  landscape:sm:ml-[4em] sm:mt-2 font-mono ml-[5em] sm:ml-4'><a href="#home">&lt;ope-d-developa /&gt;</a></h2>
          <div id="for-mobile" className="lg:hidden mr-4">
            <button
              id="hamburger-button"
              className="relative h-8 w-8 text-2xl sm:text-xl landscape:sm:mr-[3em] sm:mt-2 lg:hidden"
              onClick={() => {
                document.getElementById('mobile-menu').classList.toggle("hidden");
                document.getElementById('hamburger-button').classList.toggle("hidden");
              }}
              >
              &#9776;
            </button>
          </div>
          <nav className='sm:hidden'>
            <ul id="nav" className='text-sm font-bold mr-[8em]'>
              <a href="#home"><li id="home-nav" className="btn btn-ltr active">HOME</li></a>
              <a href="#about"><li id="about-nav" className="btn btn-ltr">ABOUT</li></a>
              <a href="#projects"><li id="project-nav" className="btn btn-ltr">PROJECTS</li></a>
              <a href="#contact"><li id="contact-nav" className="btn btn-ltr">CONTACT</li></a>
            </ul>
          </nav>
        </div>
        <div id='mobile-menu' className='lg:hidden fixed animate-open-menu top-0 bottom-0 right-0 left-0 px-4 pt-3 z-20 text-white hidden bg-[#4e4e4ee6]'>
          <div className='w-full text-right mb-4'>
            <button
            id="close-button"
            className="relative h-8 w-8 text-2xl"
            onClick={() => {
              document.getElementById('mobile-menu').classList.toggle("hidden");
              document.getElementById('hamburger-button').classList.toggle("hidden");
            }}
            >
              &times;
            </button>
          </div>
          
          <nav>
            <ul className='flex flex-col gap-6 bg-white h-screen p-4 text-sm text-black' 
            onClick={() => {
              document.getElementById('mobile-menu').classList.toggle("hidden");
              document.getElementById('hamburger-button').classList.toggle("hidden");

            }}>
              <li id="home-mobile" className="showing"><a href="#home">HOME</a></li>
              <li id="about-mobile" className=""><a href="#about">ABOUT</a></li>
              <li id="project-mobile" className=""><a href="#projects">PROJECTS</a></li>
              <li id="contact-mobile" className=""><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>
        </div>
      </header>

<main className='bg-neutral-100 px-20 sm:landscape:px-5 font-light pt-14 sm:px-3'>
  <section id="about" className='py-14 px-12 sm:landscape:px-6 sm:landscape:gap-6 sm:px-4 sm:landscape:flex-row sm:mb-20 mb-32 flex sm:flex-col sm:gap-10 gap-6'>
    <div id='about-sect-1' className=' w-1/2 sm:w-full h-full flex flex-col gap-5 sm:landscape:text-base text-sm'>
      <div id='profile' className='flex gap-20 sm:gap-10 sm:landscape:gap-3 sm:landscape:flex-row sm:flex-col'>
        <img src={profile} alt='profile' className='w-36 sm:landscape:ml-0 sm:landscape:w-32 rounded sm:rounded-lg ml-4'></img>
        <div className='flex flex-col sm:landscape:h-48 sm:h-36 justify-between'>
          <p><span className='font-semibold'>Name: </span><span>Obidare Opeyemi Emmanuel</span></p>
          <p><span className='font-semibold'>Profile: </span><span>Front-end web developer</span></p>
          <p><span className='font-semibold'>E-mail: </span><span>obidareopeyemi@gmail.com</span></p>
          <p><span className='font-semibold'>Phone: </span><span>+2348131382221</span></p>
        </div>
      </div>
      <div id='skills' className='flex flex-col gap-4'>
        <p className='font-semibold'>Skill</p>
        <div>HTML5 85%<br/>
          <div className="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[85%]'></div>
          </div>
        </div>
        <div>CSS3 75%<br/>
          <div className="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[75%]'></div>
          </div>
        </div>
        <div>JAVASCRIPT 80%<br/>
          <div className="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[80%]'></div>
          </div>
        </div>
        <div>REACT JS 75%<br/>
          <div className="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[75%]'></div>
          </div>
        </div>
        <div>VUE JS 78%<br/>
          <div className="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[78%]'></div>
          </div>
        </div>
        <div>TAILWIND CSS 75%<br/>
          <div className="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[75%]'></div>
          </div>
        </div>
      </div>
    </div>
    <div id='about-sect-2'  className='w-1/2 sm:w-full sm:landscape:text-lg h-full'>
      <h1 className='font-semibold sm:landscape:mb-12 mb-8 text-2xl underline sm:landscape:text-3xl decoration-4 decoration-blue-700 underline-offset-[15px]'>About me</h1>
      <p className='mb-4'>Hello and welcome to my portfolio website! I am a passionate front-end web developer with a keen eye for detail and a love for creativity. I invite you to explore my world of projects and experiences to get to know me better.</p>
      <p className='mb-4'>I'm not just a front-end web developer. I'm a problem solver, a creative thinker, and a lifelong learner. I believe in the power of design, technology, and innovation to make the world a better place. Throughout my journey, I've continually strived at honing my skills in HTML, CSS, Javascript, React JS, and Vue JS and have had the pleasure of working on a few projects in the course of my learning.</p>
      <a href='Resume.pdf' target='_blank'>
        <button 
          type="button" 
          className="px-4 py-3 bg-blue-700 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform flex"
      >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>

          <span className="ml-2">My CV</span>
        </button>
      </a>
    </div>
  </section>
  <section id="projects" className='p-0 sm:px-4 sm:mb-20 mb-32'>
      <h1 className='text-center text-3xl font-black mb-4'>PROJECTS</h1>
      <p className='text-center mb-4'>Below are some of my completed projects</p>
      <div className='mx-auto bg-blue-700 w-12 h-2 mb-12'></div>
      <div id='project-group' className='flex flex-wrap justify-center items-stretch gap-8'>
        <div id='projectbox' className='w-[22em] group bg-neutral-200'>
          <a href='#home' className=''>
            <div className="relative overflow-hidden w-full">
              <img src={portfolio} alt="project" className="w-full h-auto group-hover:scale-130 sm:group-hover:scale-100 ease-in transition-transform duration-500" />
            </div>
            </a>
          <div id='project-info' className='px-3 pb-4 pt-8'>
            <h3 className='font-bold mb-2'>Portfolio Site</h3>
            <p className='text-sm mb-2'><span className='text-blue-500'>React and Tailwind CSS</span> / September, 2023</p>
            <p className='text-sm mb-2'>Portfolio site built with React and Tailwind CSS.</p>
            <p className='text-sm mb-2'>This site is fully responsive and can be viewed in portrait, and landscape mode.</p>
            <a href='https://github.com/yemi2022/portfolio-site.git' target='_blank' rel='noreferrer' className='text-sm flex gap-3 text-blue-700 -mb-5 mt-42'>              
              <span>Source Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a><br />
            <a href='#home' className='text-sm text-blue-700'>Visit the Site&#127993;</a>
          </div>
        </div>
        
        <div id='projectbox' className='w-[22em] group bg-neutral-200'>
          <a href='https://job.codecrafted.com.ng' target='_blank' rel='noreferrer' className=''>
            <div className="relative overflow-hidden w-full h-48">
            <img src={job} alt="job site" className="w-full h-auto group-hover:scale-130 sm:group-hover:scale-100 ease-in transition-transform duration-500" />
            </div>
            </a>
          <div id='project-info' className='px-3 pt-8 pb-4'>
            <h3 className='font-bold mb-2'>Job API Website</h3>
            <p className='text-sm mb-2'><span className='text-blue-500'>Vue and Tailwind CSS</span> / September, 2023</p>
            <p className='text-sm mb-2'>Vue app that displays a list of IT job vacancies in the US using DevIT jobs API.</p>
            <p className='text-sm mb-2'>This site can be viewed on PC and mobile.</p>
            <a href='https://github.com/yemi2022/job-api' target='_blank' rel='noreferrer' className='text-sm flex gap-3 text-blue-700 -mb-5 mt-2'>
              <span>Source Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a><br />
            <a href='https://job.codecrafted.com.ng' target='_blank' rel='noreferrer' className='text-sm text-blue-700'>Visit the Site&#127993;</a>
          </div>
        </div>
        
        <div id='projectbox' className='w-[22em] group bg-neutral-200'>
          <a href='https://weather.codecrafted.com.ng' target='_blank' rel='noreferrer' className=''>
            <div className="relative overflow-hidden w-full">
              <img src={weather} alt="project" className="w-full h-auto group-hover:scale-130 sm:group-hover:scale-100 ease-in transition-transform duration-500" />
            </div>
            </a>
          <div id='project-info' className='px-3 pt-8 pb-4'>
            <h3 className='font-bold mb-2'>Weather API Website</h3>
            <p className='text-sm mb-2'><span className='text-blue-500'>Vue</span> / August, 2023</p>
            <p className='text-sm mb-2'>Vue app that uses open weather API to retrieve and display the current weather of searched locations.</p>
            <p className='text-sm mb-2'>This site is best viewed on PC.</p>
            <p className='text-sm mt-2 -mb-5'>Source code unavailable to prevent API token exposure</p><br />
            <a href='https://weather.codecrafted.com.ng' target='_blank' rel='noreferrer' className='text-sm text-blue-700'>Visit the Site&#127993;</a>
          </div>
        </div>
        
        <div id='projectbox' className='w-[22em] group bg-neutral-200'>
          <a href='https://cmc.codecrafted.com.ng' target='_blank' rel='noreferrer' className=''>
            <div className="relative overflow-hidden w-full">
              <img src={pic2} alt="project" className="w-full h-auto group-hover:scale-130 sm:group-hover:scale-100 ease-in transition-transform duration-500" />
            </div>
            </a>
          <div id='project-info' className='px-3 pt-8 pb-4'>
            <h3 className='font-bold mb-2'>Cartoon Movie Cinema</h3>
            <p className='text-sm mb-2'><span className='text-blue-500'>Vue and Tailwind CSS</span> / July, 2023</p>
            <p className='text-sm mb-2'>Cartoon site rebuilt with Vue and Tailwind CSS with light and dark depending on the device's active theme.</p>
            <p className='text-sm mb-2'>This site is best viewed on PC and mobile portrait mode.</p>
            <a href='https://github.com/yemi2022/vue-cartoon-site.git' target='_blank' rel='noreferrer' className='text-sm flex gap-3 text-blue-700 -mb-5 mt-2'>              
              <span>Source Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a><br />
            <a href='https://cmc.codecrafted.com.ng' target='_blank' rel='noreferrer' className='text-sm text-blue-700'>Visit the Site&#127993;</a>
          </div>
        </div>
        
        <div id='projectbox' className='w-[22em] group bg-neutral-200'>
          <a href='https://cartoon.codecrafted.com.ng' target='_blank' rel='noreferrer' className=''>
            <div className="relative overflow-hidden w-full">
              <img src={pic} alt="project" className="w-full h-auto group-hover:scale-130 sm:group-hover:scale-100 ease-in transition-transform duration-500" />
            </div>
            </a>
          <div id='project-info' className='px-3 pt-8 pb-4'>
            <h3 className='font-bold mb-2'>Cartoon Movie Cinema</h3>
            <p className='text-sm mb-2'><span className='text-blue-500'>HTML AND CSS</span> / June, 2023</p>
            <p className='text-sm mb-2'>HTML and CSS site that displays selected cartoon trailers.</p>
            <p className='text-sm mb-2'>This site is best viewed on PC and mobile portrait mode.</p>
            <a href='https://github.com/yemi2022/cmc-html-and-css.git' target='_blank' rel='noreferrer' className='text-sm flex gap-3 text-blue-700 -mb-5 mt-2'>
              <span>Source Code</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.49.5.09.682-.218.682-.486 0-.24-.009-.875-.013-1.713-2.782.603-3.369-1.338-3.369-1.338-.454-1.154-1.11-1.462-1.11-1.462-.905-.619.068-.607.068-.607 1.003.07 1.532 1.03 1.532 1.03.89 1.527 2.337 1.086 2.904.831.09-.645.35-1.086.638-1.336-2.23-.255-4.576-1.116-4.576-4.962 0-1.097.393-1.995 1.04-2.696-.105-.255-.452-1.278.099-2.665 0 0 .846-.271 2.769 1.03A9.67 9.67 0 0112 5.85c.825.005 1.657.111 2.447.328 1.923-1.3 2.768-1.03 2.768-1.03.552 1.387.206 2.41.101 2.665.647.701 1.038 1.599 1.038 2.696 0 3.858-2.35 4.704-4.592 4.954.36.312.682.924.682 1.862 0 1.345-.012 2.425-.012 2.75 0 .27.18.584.688.485C19.138 20.16 22 16.415 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a><br />
            <a href='https://cartoon.codecrafted.com.ng' target='_blank' rel='noreferrer' className='text-sm text-blue-700'>Visit the Site&#127993;</a>
          </div>
        </div>

        <a href='#home' id='back-to-top' className='invisible transition-all ease-in-out duration-500 fixed bottom-5 right-5'>
    <div className='text-white bg-blue-700 hover:bg-blue-500 sm:hover:bg-blue-700 hover:transition z-10 p-3 rounded-[50%] w-10 flex justify-center'>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        className="h-4 w-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
      </svg>
    </div>
  </a>
        
    
      </div>
  </section>
  <section className='w-[98.7vw] flex justify-center py-[8.5vh] -ml-20 sm:-ml-3 sm:portrait:py-[] sm:landscape:py-[14.9vh] sm:landscape:-ml-5 sm:w-[100vw] h-max bg-[#1d4ed8cc]'>
    <div id="contact" className='bg-white w-[80%] h-max p-14 sm:portrait:p-4  sm:portrait:w-[90%] flex flex-wrap gap-6 justify-center'>
      <div className='w-[45%] sm:portrait:w-full'>
        <h1 className='font-semibold text-2xl mb-1'>Send me a message</h1>
        <div className='bg-blue-700 w-32 h-1 mb-4'></div>
        <form action='mailto:obidareopeyemi@gmail.com' method='get' encType='text/plain' >
          <input type="text" name="subject" className='border text-sm mb-4 w-full p-2 placeholder-gray-500 border-gray-300 focus:outline-blue-500' placeholder="Your Name" minLength={3} maxLength={30} required /><br/>
          <input type="email" name="email" placeholder="Your Email" className='border text-sm mb-4 w-full p-2 placeholder-gray-500 border-gray-300 focus:outline-blue-500' required /><br/>
          <textarea name="body" rows="5" cols="30" placeholder="Your Message" className='border text-sm mb-4 w-full p-2 placeholder-gray-500 border-gray-300 focus:outline-blue-500'></textarea><br/>
          <input type="submit" value="Send" className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center' />
        </form>
      </div>
      <div className='w-[45%] sm:portrait:w-full sm:portrait:mb-16'>
        <h1 className='font-semibold text-2xl mb-1'>Get in touch</h1>
        <div className='bg-blue-700 w-32 h-1 mb-4'></div>
        <p className='mb-6'>You can reach me on any of the following social media.</p>
        <div className='flex justify-center gap-4'>
          <a href='https://wa.link/bc73co' target='_blank' rel='noreferrer'>
            <svg
            className="w-6 h-6 text-black hover:text-green-700 sm:text-green-700 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
              <path
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              ></path>
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/opeyemi-obidare-371715193/' target='_blank' rel='noreferrer'>
            <svg
            className="w-6 h-6 text-black hover:text-blue-800 sm:text-blue-800 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              ></path>
            </svg>
          </a>
          <a href='https://twitter.com/ope_obidare' target='_blank' rel='noreferrer'>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black fill-current" viewBox="0 0 512 512">
          
          <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
          </a>
        </div>
        
      </div>
    </div>
  </section>

</main>
<footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Obidare Opeyemi Emmanuel</p>
      </div>
    </footer>
    </div>
  );
}

export default App;
