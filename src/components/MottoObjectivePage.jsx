import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  position: relative;

  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-decoration: underline;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const MottoPage = () => {
  const handleClose = () => {
    console.log('Close button clicked');
    // Add your close functionality here
  };

  const handleObjectives = () => {
    console.log('Objectives button clicked');
    // Add your objectives functionality here
  };

  return (
    <Container>
      <Title>OUR MOTO</Title>
      <Paragraph>
        Maati-16 Trust is committed to bridging the gap in educational access for disadvantaged children. By offering resources, support, and opportunities for learning, they are paving the way for these children to overcome barriers and reach their full potential. Through their dedication, Maati-16 Trust is not just changing lives but also shaping a better tomorrow for communities in need.
      </Paragraph>
      <Paragraph>
        Maati-16 Trust is dedicated to providing education to underprivileged children, ensuring they have the opportunity to build a brighter future. Through their efforts, they aim to break the cycle of poverty by empowering young minds with knowledge and skills. With a focus on education, Maati-16 Trust strives to create a more equitable society where every child has access to quality learning regardless of their background or circumstances.
      </Paragraph>
      <ButtonContainer>
        <Button onClick={handleClose}>Close</Button>
        <Button onClick={handleObjectives}>Objectives</Button>
      </ButtonContainer>
    </Container>
  );
};

export default MottoPage;
