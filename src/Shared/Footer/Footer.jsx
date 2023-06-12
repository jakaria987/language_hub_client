import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-cyan-300 px-8 py-4 mb-8 rounded-md'>
  <div className="flex gap-12 justify-between items-center mt-4">
  <img src={logo} className='w-28 h-10' alt="" />
    <p className='text-xl font-semibold'>Copyright © 2023 - All right reserved</p>
    <p className='text-xl font-bold'>Want to sign up ? <Link to='signup' className='text-black'><button className="btn  btn-accent ">Click here</button></Link></p>
  </div>
    </div>
  );
};

export default Footer;
