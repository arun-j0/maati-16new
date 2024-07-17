import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ShubhamKanhaiyaImage from '../assets/Shubham_Kanhaiya.jpg';
import ArunavPrakharImage from '../assets/Arunav_Prakhar.jpg';
import MuneerAshrafImage from '../assets/Muneer_Ashraf.jpg';
import HemantDubeyImage from '../assets/Hemant_Dubey.jpg';
import RishavPandeyImage from '../assets/Rishav_Pandey.jpg';

const CoreMembers = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-4 text-black border-[#fee57e] border-8 bg-gray-100"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-full max-w-6xl p-8 overflow-auto bg-white rounded-md shadow-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.h2
          className="mb-4 text-4xl font-bold text-center"
          initial={{ y: -50, opacity: 0, x: 50 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-4xl font-bold text-[#280101] underline md:text-6xl">
            Core Members
          </span>
        </motion.h2>

        <motion.ul
          className="mb-4 text-lg leading-7 text-gray-600"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <li className="mb-8 flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg sm:flex-row sm:text-left sm:p-6">
            <img
              src={ShubhamKanhaiyaImage}
              alt="Shubham Kanhaiya"
              className="w-56 h-56 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-xl font-semibold">
                Shubham Kanhaiya (Co-Founder)
              </strong>
              <br />
              Mobile: 7091717497
              <br />
              Email:{" "}
              <a
                href="mailto:thekanhaiya17@gmail.com"
                className="text-blue-600 hover:underline"
              >
                thekanhaiya17@gmail.com
              </a>
            </div>
          </li>

          <li className="mb-8 flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg sm:flex-row sm:text-left sm:p-6">
            <img
              src={ArunavPrakharImage}
              alt="Arunav Prakhar"
              className="w-56 h-56 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-xl font-semibold">
                Arunav Prakhar (Co-Founder)
              </strong>
              <br />
              Mobile: 9798470449
              <br />
              Email:{" "}
              <a
                href="mailto:arunavprakhar98@gmail.com"
                className="text-blue-600 hover:underline"
              >
                arunavprakhar98@gmail.com
              </a>
            </div>
          </li>

          <li className="mb-8 flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg sm:flex-row sm:text-left sm:p-6">
            <img
              src={MuneerAshrafImage}
              alt="Muneer Ashraf"
              className="w-56 h-56 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-xl font-semibold">
                Muneer Ashraf (Secretary)
              </strong>
              <br />
              Mobile: 9304268323
              <br />
              Email:{" "}
              <a
                href="mailto:muneerzeeshanashraf@gmail.com"
                className="text-blue-600 hover:underline"
              >
                muneerzeeshanashraf@gmail.com
              </a>
            </div>
          </li>

          <li className="mb-8 flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg sm:flex-row sm:text-left sm:p-6">
            <img
              src={HemantDubeyImage}
              alt="Hemant"
              className="w-56 h-56 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-xl font-semibold">
                Hemant (Assistant Secretary)
              </strong>
              <br />
              Mobile: 7870295287
              <br />
              Email:{" "}
              <a
                href="mailto:hemantdubey1920@gmail.com"
                className="text-blue-600 hover:underline"
              >
                hemantdubey1920@gmail.com
              </a>
            </div>
          </li>

          <li className="mb-8 flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-lg sm:flex-row sm:text-left sm:p-6">
            <img
              src={RishavPandeyImage}
              alt="Rishav Pandey"
              className="w-56 h-56 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-xl font-semibold">
                Rishav Pandey (Treasurer)
              </strong>
              <br />
              Mobile: 9693007418
              <br />
              Email:{" "}
              <a
                href="mailto:pandey2303rishav@gmail.com"
                className="text-blue-600 hover:underline"
              >
                pandey2303rishav@gmail.com
              </a>
            </div>
          </li>
        </motion.ul>

        <button
          onClick={handleBackToHome}
          className="px-4 py-2 mt-4 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Back to Home
        </button>
      </motion.div>
    </motion.div>
  );
};

export default CoreMembers;
