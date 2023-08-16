import Project from "../components/Project"
const Work = () => {
  return (
    <section>
        <h1 className='display-2 fw-bold'>My Projects</h1>
        <p>Hello! These are my project that I've done so far I hope you like it.</p>
        <hr/>
        <div className='d-flex flex-wrap justify-content-between align-items-center gap-2'>
            <Project/>
        </div>
    </section>
  )
}

export default Work