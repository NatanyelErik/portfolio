import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
  return (
    <>
        <Link to='https://github.com/NatanyelErik' className='text-dark fs-4'><FaGithub/></Link>
        <Link to='https://www.facebook.com/eriko0919?mibextid=D4KYlr' className='text-dark fs-4'><FaFacebook/></Link>
        <Link to='https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fnatanyelerik%3Figshid%3DOGQ5ZDc2ODk2ZA%253D%253D%26fbclid%3DIwAR3b9yrUzY9jz86UYXSfsyd5pm_69Vm_AykBUbuV_YUtbdXBN-53wd-Xh_Y&h=AT2r1T_0wh1nSUHO87Owfe-Dr916JxP2laOSrveSGHADHzpVY5bp1J4XtTak04CJmvQq6mip7ff7JLhhi4l-qBO2uh9E_St4PH5liZzjuM50kxbDA3Sm9BuplTnL7PWWmmEDsQ' className='text-dark fs-4'><FaInstagram/></Link>
    </>
  )
}

export default SocialLinks