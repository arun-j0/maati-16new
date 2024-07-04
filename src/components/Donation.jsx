import React, { useState } from 'react';
import styled from 'styled-components';
import { motion} from 'framer-motion';
const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin: 20px auto;
  position: relative;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const BankDetails = styled.p`
  margin: 5px 0;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: calc(100% - 10px);
  padding: 8px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: block;
`;

const SubmitButton = styled.button`
  display: inline-block;
  
  color: white;
  padding: 10px 15px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  

`;

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    pan: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  return (
    <div className='border-[#fee57e] border-8'>
    <motion.h2
        className="pt-12 pb-5 mb-4 text-4xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
       <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'> DONATION FORM</span>
      </motion.h2>
    <Container>

      <Header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}>
       
        <BankDetails><strong>Account no:</strong> 49918100000881</BankDetails>
        <BankDetails><strong>Account Holder Name:</strong> Hemanshu</BankDetails>
        <BankDetails><strong>IFSC:</strong> BARB0BUDDHA (5th Character is ZERO)</BankDetails>
        <BankDetails><strong>Branch:</strong> Buddha Colony</BankDetails>
        <BankDetails><strong>Pay Online:</strong> 6205415221@ybl</BankDetails>
      </Header>
      <motion.form onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email ID</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pan">PAN</Label>
          <Input
            type="text"
            id="pan"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="amount">Amount to Donate</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit" className='bg-amber-500 hover:bg-amber-600'>Donate</SubmitButton>
      </motion.form>
    </Container>
    </div>
  );
};

export default DonationForm;
