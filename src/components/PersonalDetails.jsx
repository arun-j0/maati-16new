import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa';

const PersonalDetails = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-black bg-gray-100 border-[#fee57e] border-8">
      <motion.h2
        className="mb-8 text-4xl font-bold text-[#280101] underline-travel md:text-6xl"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Personal Details
      </motion.h2>

      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative mb-8 md:mb-0 md:mr-12"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://designshack.net/wp-content/uploads/placeholder-image.png"
            alt="Hemanshu Dubey"
            className="object-cover w-64 h-64 rounded-full"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-75 rounded-full hover:bg-opacity-0 transition-opacity duration-300"
          >
            <span className="text-lg font-bold text-center">Hemanshu Dubey</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <table className="w-full">
            <tbody>
              {[
                { label: <><FaUser className="inline mr-2" />Founder:</>, value: 'Hemanshu Dubey' },
                { label: <><FaPhone className="inline mr-2" />Contact Number / WhatsApp:</>, value: '+91 9870112134' },
                { label: <><FaMapMarkerAlt className="inline mr-2" />Registered Address:</>, value: (
                  <>
                    Plot D-5, Block D, <br />
                    Om Vihar, Phase – V, <br />
                    Near West Point School, <br />
                    New Delhi. <br />
                    Zip Code – 110059
                  </>
                )},
                { label: <><FaInstagram className="inline mr-2" />Instagram:</>, value: (
                  <a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" className="text-black hover:text-gray-700">maati16</a>
                )},
                { label: <><FaLinkedin className="inline mr-2" />LinkedIn:</>, value: (
                  <a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" className="text-black hover:text-gray-700">Hemanshu Dubey</a>
                )},
              ].map((detail, index) => (
                <motion.tr
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  className="border-b border-gray-200"
                >
                  <td className="pr-2 font-semibold">{detail.label}</td>
                  <td>{detail.value}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalDetails;
