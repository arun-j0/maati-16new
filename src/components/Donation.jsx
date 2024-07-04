import React, { useState } from 'react';
import styled from 'styled-components';

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
  background-color: #28a745;
  color: white;
  padding: 10px 15px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  
  &:hover {
    background-color: #218838;
  }
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
    <Container>
      <Header>
        <Title>Donation Form</Title>
        <BankDetails><strong>Account no:</strong> 49918100000881</BankDetails>
        <BankDetails><strong>Account Holder Name:</strong> Hemanshu</BankDetails>
        <BankDetails><strong>IFSC:</strong> BARB0BUDDHA (5th Character is ZERO)</BankDetails>
        <BankDetails><strong>Branch:</strong> Buddha Colony</BankDetails>
        <BankDetails><strong>Pay Online:</strong> 6205415221@ybl</BankDetails>
      </Header>
      <form onSubmit={handleSubmit}>
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
          <Label htmlFor="amount">Amount Donated</Label>
          <Input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  );
};

export default DonationForm;
