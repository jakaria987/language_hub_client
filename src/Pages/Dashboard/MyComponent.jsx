
import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Target state
      transition={{ duration: 7 }} // Animation duration
    >
      <h2 className='text-3xl text-center text-white font-bold pb-4'>Language Hub
      </h2>
    </motion.div>
  );
};

export default MyComponent;
