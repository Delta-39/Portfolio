import About from '../../Views/About/About'
import Contact from '../../Views/Contact/Contact'
import Home from '../../Views/Home/Home'
import Projects from '../../Views/Projects/Projects'
import Skills from '../../Views/Skills/Skills'
import Nav from '../Nav/Nav'


function Container() {
    return (
        <div>
            <Nav />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Container