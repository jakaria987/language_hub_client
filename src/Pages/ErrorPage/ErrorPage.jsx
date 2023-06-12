
import err from '../../assets/error.jpg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <img className='mx-auto my-4 w-[700px] ' src={err}alt="" />
            <div className='text-center'>
            <button className='btn btn-success'>
            <Link className='text-black' to='/'>Click here to go to home page</Link>
            </button>
            </div>
        </div>
    );
};

export default ErrorPage;