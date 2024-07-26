import React from 'react';
import { Tilt } from 'react-tilt';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SponsorSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const sponsors = [
    {
      title: "Sponsor a child's education",
      description: "You can donate according to your pocket.",
      button: "Donate Now",
    },
    {
      title: "Provide Meals for a Week",
      description: `Sponsor a snack for 100 children:
Fruit: ~INR 600
Samosa: ~INR 1500
Juice/Flavored Milk: ~INR 1900`,
      button: "Donate for Meals",
    },
    {
      title: "Fund a Health Camp",
      description: "Sponsor a health camp to provide medical checkups and healthcare services to those in need.",
      button: "Fund Now",
    },
    {
      title: "Supply School Supplies",
      description: `Supply school supplies for 10 children:
Stationery items: ~INR 5000
- Pencil
- Pen
- Eraser
- Sharpener
- Scale
- Notebook`,
      button: "Donate Supplies",
    },
    {
      title: "Support After-School Programs",
      description: "Your donation can fund after-school programs that offer tutoring and extracurricular activities.",
      button: "Support Programs",
    },
    {
      title: "Organize a Field Trip",
      description: "Sponsor a field trip for children to give them educational and recreational experiences.",
      button: "Organize Trip",
    },
  ];

  return (
    <section ref={ref} className="flex flex-col items-center justify-center min-h-[70vh] p-8 bg-gray-100 border-[#fee57e] border-t-0 border-8">
      <motion.h2
        className="mb-8 text-3xl font-bold md:text-6xl text-[#280101]"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        <span className='underline-travel'>SPONSOR
        <div className="box-line"></div>
        </span>
      </motion.h2>
      <motion.p
        className="mb-8 text-xl text-center md:text-2xl text-[#280101]"
        initial="hidden"
        animate={controls}
        variants={titleVariants}
      >
        We do not have a revenue-based model. So we need consistent donations to
        increase our reach & grow our work.
      </motion.p>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {sponsors.map((sponsor, index) => (
          <Tilt key={index} className="Tilt" options={{ max: 25, scale: 1.05 }}>
            <motion.div
              className="flex flex-col justify-between h-full p-6 bg-white rounded-lg shadow-lg Tilt-inner"
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div>
                <h3 className="mb-4 text-2xl font-bold">{sponsor.title}</h3>
                <p className="mb-4 whitespace-pre-wrap">{sponsor.description}</p>
              </div>
              <button className="px-4 py-2 mt-4 font-bold text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600">
                {sponsor.button}
              </button>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default SponsorSection;
