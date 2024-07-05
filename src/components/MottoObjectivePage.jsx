import React from 'react';

const MottoPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">OUR MOTO</h1>
      <p className="text-lg mb-4">
        Maati-16 Trust is committed to bridging the gap in educational access for disadvantaged children. By offering resources, support, and opportunities for learning, they are paving the way for these children to overcome barriers and reach their full potential. Through their dedication, Maati-16 Trust is not just changing lives but also shaping a better tomorrow for communities in need.
      </p>
      <p className="text-lg">
        Maati-16 Trust is dedicated to providing education to underprivileged children, ensuring they have the opportunity to build a brighter future. Through their efforts, they aim to break the cycle of poverty by empowering young minds with knowledge and skills. With a focus on education, Maati-16 Trust strives to create a more equitable society where every child has access to quality learning regardless of their background or circumstances.
      </p>
      <style>{`
        .container {
          max-width: 100%;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 640px) {
          .container {
            max-width: 640px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (min-width: 768px) {
          .container {
            max-width: 768px;
          }
        }

        @media (min-width: 1024px) {
          .container {
            max-width: 1024px;
          }
        }
        
        @media (min-width: 1280px) {
          .container {
            max-width: 1280px;
          }
        }

        .text-lg {
          font-size: 1.125rem;
          line-height: 1.75rem;
        }

        @media (min-width: 768px) {
          .text-lg {
            font-size: 1.25rem;
            line-height: 2rem;
          }
        }

        .text-xl {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }

        @media (min-width: 768px) {
          .text-xl {
            font-size: 1.5rem;
            line-height: 2.25rem;
          }
        }

        .text-3xl {
          font-size: 1.875rem;
          line-height: 2.25rem;
        }

        @media (min-width: 768px) {
          .text-3xl {
            font-size: 2.25rem;
            line-height: 2.75rem;
          }
        }

        .font-bold {
          font-weight: 700;
        }

        .mb-4 {
          margin-bottom: 1rem;
        }

        .py-8 {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default MottoPage;
