import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const placeholderImage = "https://designshack.net/wp-content/uploads/placeholder-image.png";

const blogs = [
  {
    title: "Our Recent Donation Event",
    content: "We recently organized a donation event to support underprivileged children in our community. The event was a great success, with many participants contributing generously.",
    detailedDescription: "On July 5, 2024, our NGO hosted a donation event aimed at supporting underprivileged children in our local community. The event took place at the community center and brought together over 150 attendees, including local families, volunteers, and business partners. We collected funds and essential supplies, including clothing, school supplies, and hygiene products. Local businesses donated generously, providing both goods and sponsorships to ensure the event's success. Thanks to the collective effort of volunteers, we managed to raise over $5,000, which will directly benefit our education and health initiatives for these children. We are immensely grateful for the outpouring of support and look forward to organizing more events like this in the future to continue making a positive impact.",
    author: "Arun",
    date: "2024-07-10",
    id: 1,
    images: [placeholderImage, placeholderImage, placeholderImage]
  },
  {
    title: "Another Donation Event",
    content: "Another donation event was held to support education for children.",
    detailedDescription: "This event took place on June 15, 2024, focusing on gathering funds for educational materials. It successfully engaged the community.",
    author: "Arun",
    date: "2024-06-20",
    id: 2,
    images: [placeholderImage]
  },
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100 border-b-4 border-[#fee57e] border-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 mx-auto bg-white rounded-lg shadow-md w-[95%] lg:w-[80%]"
          >
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-[#280101] mb-8"
            >
              {blog.title}
            </motion.h1>
            {blog.images.length === 1 ? (
              <div className="flex justify-center mb-8">
                <motion.img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="object-cover w-full lg:w-[60%] h-auto rounded-lg"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            ) : (
              <div className="flex justify-center mb-4">
                <Slider {...settings} className='w-full rounded-lg lg:max-w-3xl'>
                  {blog.images.map((image, index) => (
                    <div key={index} className="flex justify-center">
                      <motion.img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="object-cover w-full h-auto rounded-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 text-xl font-bold text-gray-600"
            >
              {blog.content}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-4 text-lg text-gray-600"
            >
              {blog.detailedDescription}
            </motion.p>
            <div className="flex flex-col items-center justify-between text-sm text-gray-500 md:flex-row">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                By {blog.author}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {blog.date}
              </motion.span>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center mt-8"
            >
              <Link to="/blogs" className="bg-[#fee57e] text-[#280101] py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition duration-300">
                Go Back
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* Footer removed */}
    </>
  );
};

export default BlogDetailPage;
