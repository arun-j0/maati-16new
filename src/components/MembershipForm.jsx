import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  color: white;
  padding: 10px 15px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`;

const MembershipForm = () => {
  const [showForm, setShowForm] = useState(false);
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

  return (
    <div className='border-[#fee57e] border-8'>
      <motion.h2
        className="pt-12 pb-5 mb-4 text-4xl font-bold text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className='text-4xl font-bold text-[#280101] underline-travel md:text-6xl'>
          MEMBERSHIP FORM
        </span>
      </motion.h2>
      {!showForm ? (
        <Container>
          <ul>
            <li>Every Member will have to donate some amount in group funds per month for the on-field operations. We believe in full transparency thus every detail of the total collected money and expenses will be shared with you via WhatsApp group.</li>
            <li>Remember the main motto of joining MAATI-16, it is to be a helping hand to society and that's why it is compulsory for all the members to actively participate in every drive or any event of the foundation, failing which you will be answerable to the core team.</li>
            <li>We will have proper on-field meetings which are compulsory to attend for every member.</li>
            <li>You are not allowed to share photos or footage of any on-field activity or drive conducted by us without the watermark, logo, or mention of MAATI-16's identity. No self-promotion will be tolerated. Note that here we are working as a team termed as MAATI-16, not as an individual.</li>
            <li>Not just humans, we the team of MAATI-16 will try to help every living being so keeping this in mind every member must feed animals like dogs, cows, etc. You can also keep grains for birds or water outside your house for thirsty animals. Help as much as you can.</li>
            <li>Last and most important, if you do not abide by any of the rules you will be terminated from the group.</li>
          </ul>
          <p>For any query, you can contact us at:</p>
          <p>+91 9870112134</p>
          <p>Mail us at: maati16official@gmail.com</p>
          <p>You can also connect with us on Instagram: @maati16._</p>
          <SubmitButton onClick={() => setShowForm(true)} className='bg-amber-500 hover:bg-amber-600'>
            View Form
          </SubmitButton>
        </Container>
      ) : (
        <Container>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
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
            <SubmitButton type="submit" className='bg-amber-500 hover:bg-amber-600'>Submit</SubmitButton>
          </motion.form>
        </Container>
      )}
    </div>
  );
};

export default MembershipForm;
