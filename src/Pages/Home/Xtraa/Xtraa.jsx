
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Xtraa.css';
import pic from '../../../assets/aos.jpg'
import { useEffect } from 'react';

const Xtraa = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <div className="app bg-teal-100 mx-auto text-center">
        <img data-aos="fade-up" className='mx-auto' src={pic} alt="" />
      <h1 data-aos="fade-up" className='text-teal-900 font-semibold'>Welcome to our language club</h1>
      
      <p data-aos="fade-up" data-aos-delay="600" className='text-teal-900 font-semibold'>
      What transferable skills should you include on the CV?  On the previous article we discussed “what are transferable skills”, to recap quickly, here is the definition. Transferable skills are a core set of skills and abilities, which you have learnt and perfected over time, gained from previous jobs, voluntary and charity work, your hobbies and from home. Both Soft skills and Hard skills are transferable skills.
      </p>
      <hr className='border-teal-900 w-2/3 mx-auto' />
    </div>
  );
};

export default Xtraa;
