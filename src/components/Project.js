import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const projectData = [
    {
        projectTitle: "Photo Studio",
        projectDescription: "Photography web page that showcase their gallery",
        projectImg:"/photostudio.png",
        url: "https://github.com/NatanyelErik"
    },
    {
        projectTitle: "Food Studio",
        projectDescription: "Food Landing Page that motivates you to eat",
        projectImg:"/foodstudio.jpg",
        url:"https://github.com/NatanyelErik"
    },
    {
        projectTitle: "Blog Website",
        projectDescription: "Web page that informs you latest news",
        projectImg:"/blog.jpg",
        url: "https://github.com/NatanyelErik"
    }
]
const Project = () => {
  return (
    <>
        {projectData.map((project, index) => (
                <Card key={index} style={{ minWidth: '18rem', maxWidth: '19rem'}} className="w-100">
                    <Card.Img variant="top" className="" src={project.projectImg} style={{objectFit:'cover', height:200}}/>
                    <Card.Body>
                        <Card.Title>{project.projectTitle}</Card.Title>
                        <Card.Text>
                            {project.projectDescription}
                        </Card.Text>
                        <Link to={project.url}>
                            <Button variant="dark">View Github</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
    </>
  )
}

export default Project