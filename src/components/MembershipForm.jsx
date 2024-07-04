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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled.button`
  background-color: #ff5c5c;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
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

const Checkbox = styled.input`
  width: auto;
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

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contact: '',
    address: '',
    aadhar: '',
    whatsapp: '',
    email: '',
    acceptance: false,
  });

  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add your form submission logic here
  };

  const handleClose = () => {
    setIsFormVisible(false);
  };

  if (!isFormVisible) return null;

  return (
    <Container>
      <Header>
        <Title>Membership/Volunteership Form</Title>
        <CloseButton onClick={handleClose}>X</CloseButton>
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
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="contact">Contact Number</Label>
          <Input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
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
          <Label htmlFor="aadhar">Aadhar Number</Label>
          <Input
            type="text"
            id="aadhar"
            name="aadhar"
            value={formData.aadhar}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="whatsapp">Whatsapp Number</Label>
          <Input
            type="text"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
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
          <Checkbox
            type="checkbox"
            id="acceptance"
            name="acceptance"
            checked={formData.acceptance}
            onChange={handleChange}
            required
          />
          <Label htmlFor="acceptance">
            I hereby, declare that being the member of MAATI-16 will abide by all the rules and regulations and always follow the ethical code of conduct.
          </Label>
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  );
};

export default Form;
