import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import SocialLinks from '../components/SocialLinks'
import { Link } from 'react-router-dom'
import { FaHtml5, FaCss3Alt, FaJs, FaReact} from 'react-icons/fa'
import Project from '../components/Project'


const Home = () => {
  return (
    <>
        <Container className='hero'>
            <Row className='hero d-flex justify-content-center align-items-center gap-2 overflow-hidden'>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Image src='/profile.jpg' className='profile ' width={450} height={450} rounded/>
                </Col>
                <Col className='w-100 d-flex flex-column m-1'>
                    <h5>Hello I'm</h5>
                    <h1 className='display-4 fw-bold'>Erik De Guzman</h1>
                    <h2 className='display-6 fw-semibold'>Aspiring Web Developer</h2>
                    <hr />
                    <p>A 20 year old BSIT Student currently studying in PHINMA University of Pangasinan</p>
                    <div className='d-flex flex-row align-items-center gap-2'>
                        <Link to='/work'>
                            <Button size='lg' variant='dark'>View Work</Button>
                        </Link>
                        <SocialLinks />
                    </div>
                </Col>
            </Row>
            <Container className='mt-3'>
                <Row>
                    <Col>
                        <h1 className='fw-bold'>About me</h1>
                        <p className='w-100'style={{maxWidth:500}}>
                            I'm a hardworking BSIT Student major in Web Development currently learning MERN Stack. 
                            I"m passionate in making website because I think it's fun to be able to deploy it.
                        </p>
                    </Col>
                    <Col>
                        <Container className='bg-dark text-light rounded py-2'>
                            <h1>Tech Stack:</h1>
                            <div className='display-4 d-flex gap-2'>
                                <FaHtml5/>
                                <FaCss3Alt/>
                                <FaJs/>
                                <FaReact/>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <h1 className='display-4 fw-bold'>Recent Projects</h1>
            <div className='d-flex flex-wrap align-items-center gap-2 '>
                <Project/>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
                <h1 className='display-4 fw-bold'>Contact Me</h1>
                <p>Feel free to contact me at my social links down below</p>
                <div className='d-flex align-items-center gap-2'>
                    <SocialLinks />
                    |
                    <Link to='mailto:nata.deguzman.up@phinmaed.com' className='text-decoration-none text-dark'>nata.deguzman.up@phinmaed.com</Link>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Home