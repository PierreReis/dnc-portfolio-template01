import './Home.css'

// COMPONENTS
import Header from '../components/Header/Header'

// ASSETS
import Adereco from '../assets/adereco.svg'
import Project from '../assets/project.svg'

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
        </>
    )
}

export default Home