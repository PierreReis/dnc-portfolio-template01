import './Home.css'

// COMPONENTS
import Header from '../components/Header/Header'

// ASSETS
import Adereco from '../assets/adereco.svg'
import Project from '../assets/project.svg'
import Interface from '../assets/interface.svg'
import Html from '../assets/html.svg'
import ImageReact from '../assets/image-react.svg'
import Wordpress from '../assets/wordpress.svg'
import FigmaLogo from '../assets/figma-logo.svg'
import LinkedinLogo from '../assets/linkedin-logo.svg'
import InstagramLogo from '../assets/instagram-logo.svg'
import GitHubLogo from '../assets/github-logo.svg'
import DribbbleLogo from '../assets/dribbble-logo.svg'
import YoutubeLogo from '../assets/youtube-logo.svg'

function Home() {
    return (
        <>
            <Header/>
            <div className='d-flex title-projects'>
                <h2>Projetos</h2>
                <div className='adereco'><img src={Adereco}/></div>
            </div>
            <div className='section-projects'>
                <div className='d-flex project-card'>
                    <div className='project-image'>
                        <img src={Project}/>
                        <div className='d-flex tecnologies'>
                            <h4>javascript</h4>
                            <h4>html</h4>
                            <h4>css</h4>
                        </div>
                    </div>
                    <div>
                        <h3>BeDigital</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                    </div>
                </div>
                <div className='d-flex project-card'>
                    <div className='project-image'>
                        <img src={Project}/>
                        <div className='d-flex tecnologies'>
                            <h4>javascript</h4>
                            <h4>html</h4>
                            <h4>css</h4>
                        </div>
                    </div>
                    <div>
                        <h3>BeDigital</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                    </div>
                </div>
                <div className='d-flex project-card'>
                    <div className='project-image'>
                        <img src={Project}/>
                        <div className='d-flex tecnologies'>
                            <h4>javascript</h4>
                            <h4>html</h4>
                            <h4>css</h4>
                        </div>
                    </div>
                    <div>
                        <h3>ReDesign Apps</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                    </div>
                </div>
                <div className='d-flex project-card'>
                    <div className='project-image'>
                        <img src={Project}/>
                        <div className='d-flex tecnologies'>
                            <h4>javascript</h4>
                            <h4>html</h4>
                            <h4>css</h4>
                        </div>
                    </div>
                    <div>
                        <h3>Cloning Website</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipi.
                        Aenean et sem venenatis quam feugiat lla augue sap
                        ien, facilisis blandit purus id, facilisis tinci.</p>
                    </div>
                </div>
            </div>
            <div className='d-flex about-me'>
                <h2>Sobre mim</h2>
                <div className='adereco'><img src={Adereco}/></div>
            </div>
            <div className='d-flex presentation'>
                <div>
                    <p>Pierre Oliveira</p>
                    <p>I'm more than one in love for Front-End. My experience with interface design turn me one extremely criterious with
                    alignments, margins, colors and a lot other resorces in CSS. Today I work with projects in a whole world. Codifiding in my
                    home office, in a quiet interior of São Paulo, Brazil.</p>
                    <span>INSTAGRAM</span><span>GITHUB</span><span>EMAIL</span>
                </div>
            </div>
            <div className="d-flex container-skills">
                <div className='d-flex skill-card'>
                    <div><img src={Interface}/></div>
                    <div>
                        <h5>Interface & Design</h5>
                        <p>Briefing, wireframe, UX, UI and branding.</p>
                    </div>
                </div>
                <div className='d-flex skill-card'>
                    <div><img src={Html}/></div>
                    <div>
                        <h5>HTML & CSS</h5>
                        <p>Responsive websites with fast loading.</p>
                    </div>
                </div>
                <div className='d-flex skill-card'>
                    <div><img src={ImageReact}/></div>
                    <div>
                        <h5>React.js</h5>
                        <p>Build your system with node.js.</p>
                    </div>
                </div>
                <div className='d-flex skill-card'>
                    <div><img src={Wordpress}/></div>
                    <div>
                        <h5>WordPress</h5>
                        <p>BCreate your e-commerce or blog with PHP.</p>
                    </div>
                </div>
            </div>
            <div className="d-flex container-experiences">
                <div>
                    <h5>I've had experiences with</h5>
                    <p>Firebase Database</p>
                    <p>MySQL Database</p>
                    <p>GIT, GitHub, Bitbucket</p>
                    <p>Coding PHP</p>
                    <p>Figma, Adobe XD, Sketch</p>
                    <p>CSS Preprocessors</p>
                    <p>Digital Marketing</p>
                    <p>Coding Python (Django)</p>
                </div>
                <div>
                    <h5>I have years of experience with</h5>
                    <p>Coding HTML5</p>
                    <p>Coding CSS3</p>
                    <p>Coding WordPress</p>
                    <p>Coding JavaScript</p>
                    <p>Using Elementor</p>
                    <p>Using Adobe Package</p>
                    <p>Creating Brand and Logo</p>
                    <p>Creating User Interface</p>
                </div>
                <div>
                    <h5>I work and study about</h5>
                    <p>Coding React.js</p>
                    <p>Coding CSS3</p>
                    <p>Coding JavaScript</p>
                    <p>Coding TypeScript</p>
                    <p>Studying Node.js basics</p>
                    <p>Studying API RESTful</p>
                    <p>Studying User Experience</p>
                </div>
            </div>
            <div className='contact-title'>
                <h2>Contato</h2>
            </div>
            <div className="d-flex network">
                <div><img src={FigmaLogo}/></div>
                <div><img src={LinkedinLogo}/></div>
                <div><img src={InstagramLogo}/></div>
                <div><img src={GitHubLogo}/></div>
                <div><img src={DribbbleLogo}/></div>
                <div><img src={YoutubeLogo}/></div>
            </div>
        </>
    )
}

export default Home