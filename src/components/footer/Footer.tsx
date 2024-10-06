import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <p className='footer__text'>Kevin © 2024</p>

      <div className='footer__social'>
        <a className='footer__social-icon' target='_blank' href='https://github.com/Lagergrenk'>
          <FaGithub />
        </a>
        <a
          className='footer__social-icon'
          target='_blank'
          href='https://www.linkedin.com/in/kevin-lagergren-2256951a0/'>
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
