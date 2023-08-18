import { Container} from "react-bootstrap"
import Project from "../components/Project"

const Work = () => {
  return (
    <>
       <Container className="hero d-flex flex-column justify-content-center align-items-center">
        <h1 className='display-2 fw-bold'>My Projects</h1>
          <p>Hello! These are my project that I've done so far I hope you like it.</p>
          <hr/>
          <div className='d-flex flex-wrap justify-content-between align-items-center gap-2'>
              <Project/>
          </div>
       </Container>
    </>
  )
}

export default Work