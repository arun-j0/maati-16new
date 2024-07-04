import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa';

const PersonalDetails = () => {
  return (
    <div style={styles.container}>
      <motion.h2
        style={styles.header}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Personal Details
      </motion.h2>

      <motion.div
        style={styles.content}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          style={styles.details}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <table style={styles.table}>
            <tbody>
              {[
                { label: <><FaUser style={styles.icon} />Founder:</>, value: 'Hemanshu Dubey' },
                { label: <><FaPhone style={styles.icon} />Contact Number / WhatsApp:</>, value: '+91 9870112134' },
                { label: <><FaMapMarkerAlt style={styles.icon} />Registered Address:</>, value: (
                  <>
                    Plot D-5, Block D, <br />
                    Om Vihar, Phase – V, <br />
                    Near West Point School, <br />
                    New Delhi. <br />
                    Zip Code – 110059
                  </>
                )},
                { label: <><FaInstagram style={styles.icon} />Instagram:</>, value: (
                  <a href="https://www.instagram.com/maati16._?igsh=MWt1Y2Y3cThzem5xaQ==" style={styles.link}>maati16</a>
                )},
                { label: <><FaLinkedin style={styles.icon} />LinkedIn:</>, value: (
                  <a href="https://www.linkedin.com/in/hemanshu-dubey-7257092b5" style={styles.link}>Hemanshu Dubey</a>
                )},
              ].map((detail, index) => (
                <motion.tr
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                  style={styles.row}
                >
                  <td style={styles.label}>{detail.label}</td>
                  <td style={styles.value}>{detail.value}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '16px',
    backgroundColor: '#f0f4f8',
    border: '10px solid #ffe082',
  },
  header: {
    marginBottom: '32px',
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#3e2723',
    textDecoration: 'underline',
    textAlign: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '32px',
  },
  details: {
    fontSize: '18px',
    color: '#212121',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  row: {
    borderBottom: '1px solid #ccc',
  },
  label: {
    paddingRight: '16px',
    fontWeight: 'bold',
    color: '#424242',
  },
  value: {
    color: '#616161',
  },
  icon: {
    marginRight: '8px',
  },
  link: {
    color: '#1e88e5',
    textDecoration: 'none',
  },
};

export default PersonalDetails;
