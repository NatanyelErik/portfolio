import { Container, ListGroup } from "react-bootstrap"

const Education = () => {
  return (
    <>
        <Container className="hero d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-2 fw-bold">My Education</h1>
            <ListGroup>
                <ListGroup.Item >
                    <h3>Saint Philomena Academy</h3>
                    <h6>2018-2019</h6>
                    <p>District 3, Pozorrubio</p>
                </ListGroup.Item>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <span style={{width:2, height:30}} className="bg-dark "></span>
                    <span style={{width:20, height:20}} className="bg-dark  rounded-circle"></span>
                </div>
                <ListGroup.Item >
                    <h3>PHINMA UPang Urdaneta </h3>
                    <h6>2019-2020</h6>
                    <p>Nancasayan, Urdaneta</p>
                </ListGroup.Item>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <span style={{width:2, height:30}} className="bg-dark "></span>
                    <span style={{width:20, height:20}} className="bg-dark  rounded-circle"></span>
                </div>
                <ListGroup.Item >
                    <h3>PHINMA UPang Main</h3>
                    <h6>2020-current</h6>
                    <p>Arellano, Dagupan</p>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    </>
  )
}

export default Education