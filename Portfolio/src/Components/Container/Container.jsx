import About from '../../Views/About/About'
import Contact from '../../Views/Contact/Contact'
import Home from '../../Views/Home/Home'
import Projects from '../../Views/Projects/Projects'
import Skills from '../../Views/Skills/Skills'

function Container() {

    return (
        <div>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default Container