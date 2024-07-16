import React from 'react';
import { motion } from 'framer-motion';

const CoreMembers = () => {
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
              src="path/to/shubham_image.jpg"
              alt="Shubham Kanhaiya"
              className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-lg font-semibold">
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
              src="path/to/arunav_image.jpg"
              alt="Arunav Prakhar"
              className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-lg font-semibold">
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
              src="path/to/muneer_image.jpg"
              alt="Muneer Ashraf"
              className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-lg font-semibold">
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
              src="path/to/hemant_image.jpg"
              alt="Hemant"
              className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-lg font-semibold">
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
              src="path/to/rishav_image.jpg"
              alt="Rishav Pandey"
              className="w-24 h-24 rounded-full mb-4 sm:mb-0 sm:mr-4 border-4 border-[#fee57e]"
            />
            <div>
              <strong className="text-lg font-semibold">
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
      </motion.div>
    </motion.div>
  );
};

export default CoreMembers;

