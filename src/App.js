import './my-js/index'
import './App.css'
import profile from './assets/portrait3.jpg'
import pic from './assets/cartoon-html.jpg'
import ReactTyped from "react-typed"

function App() {
  return (
    <div className="App">
      { /*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1 className="text-5xl text-yellow-500 font-bold underline">
      Hello world!
    </h1>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}

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

  
  <a href='#home' id='back-to-top' className='invisible transition-all ease-in-out duration-500 fixed bottom-5 right-5'>
    <div className='text-white bg-blue-700 hover:bg-blue-500 sm:hover:bg-blue-700 hover:transition z-10 p-3 rounded-[50%] w-10 flex justify-center'>
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        class="h-4 w-4"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
      </svg>
    </div>
  </a>
    
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
        <p>HTML5 85%<br/>
          <div class="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[85%]'></div>
          </div>
        </p>
        <p>CSS3 75%<br/>
          <div class="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[75%]'></div>
          </div>
        </p>
        <p>JAVASCRIPT 80%<br/>
          <div class="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[80%]'></div>
          </div>
        </p>
        <p>REACT JS 75%<br/>
          <div class="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[75%]'></div>
          </div>
        </p>
        <p>VUE JS 78%<br/>
          <div class="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[78%]'></div>
          </div>
        </p>
        <p>TAILWIND CSS 75%<br/>
          <div class="w-full bg-blue-200 h-2.5 mt-2">
            <div className='bg-blue-700 h-2.5 w-[75%]'></div>
          </div>
        </p>
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
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>

          <span class="ml-2">My Résumé</span>
        </button>
      </a>
    </div>
  </section>
  <section id="projects" className='px-14 py-0 sm:px-4 sm:mb-20 mb-32'>
      <h1 className='text-center text-3xl font-black mb-2'>PROJECTS SECTION</h1>
      <p className='text-center mb-2'>Below are some of my completed projects</p>
      <div className='mx-auto bg-blue-700 w-12 h-2 mb-2'></div>
      <div id='project-group' className=''>
        <div id='projectbox' className='w-[25em] group bg-neutral-200'>
          <a href='https://cartoon.codecrafted.com.ng' target='_blank' rel='noreferrer' className=''>
            <div className="relative overflow-hidden w-full">
              <img src={pic} alt="project" className="w-full h-auto group-hover:scale-130 ease-in transition-transform duration-500" />
            </div>
            </a>
          <div id='project-info' className='px-3 pt-8'>
            <h3 className='font-bold'>Cartoon Movie Cinema HTML AND CSS</h3>
            <p className='text-sm'><span className='text-blue-500'>HTML AND CSS</span> / May, 2023</p>
            <p className='text-sm'>HTML and CSS site that displays selected cartoon trailers.</p>
            <p className='text-sm'>This site is best viewed on PC and mobile portrait mode only.</p>
            <a href='https://github.com/yemi2022/cmc-html-and-css.git' target='_blank' rel='noreferrer' className='text-sm text-blue-700'>See the code on Github</a><br />
            <a href='https://cartoon.codecrafted.com.ng' target='_blank' rel='noreferrer' className='text-sm text-blue-700'>Visit the Site&#127993;</a>
          </div>
        </div>
        
    
      </div>
  </section>
  <section id="contact" className='p-14 sm:px-4'>
      <h1>CONTACT SECTION</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto a at repudiandae similique exercitationem laudantium iste fugiat? Sapiente consectetur necessitatibus debitis cumque, molestiae tempore non dolor quibusdam nesciunt quidem possimus deserunt ea aut expedita eaque distinctio, maxime natus. Sint nihil ab corrupti voluptatum, architecto corporis quibusdam at veritatis nostrum temporibus ullam iusto res perferendis! Eos, sapiente! Delectus illum laudantium architecto error qui nesciunt eaque obcaecati, ea ipsa reprehenderit explicabo, iure reiciendis adipisci autem modi, vel repudiandae minus ullam? Sint, consequatur fuga consequuntur, distinctio ea ratione natus labore, vel aut nemo quae unde fugit cumque atque veritatis amet molestiae quia expedita asperiores suscipit maiores maxime ipsam et qui. In at architecto ea distinctio amet totam maiores earum minus officiis fuga cupiditate minima quidem esse debitis facilis assumenda eligendi et, blanditiis veniam. Eum placeat soluta natus eveniet excepturi?
  </section>

</main>
    </div>
  );
}

export default App;
