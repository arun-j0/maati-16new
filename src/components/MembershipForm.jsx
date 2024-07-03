import React, { useState } from 'react';

const MembershipForm = () => {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    contactNumber: '',
    address: '',
    aadharNumber: '',
    whatsapp: '',
    email: '',
    acceptance: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', form);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Membership/Volunteership Form</h2>
      
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          type="tel"
          id="contactNumber"
          name="contactNumber"
          value={form.contactNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="aadharNumber">Aadhar Number</label>
        <input
          type="text"
          id="aadharNumber"
          name="aadharNumber"
          value={form.aadharNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="whatsapp">WhatsApp</label>
        <input
          type="text"
          id="whatsapp"
          name="whatsapp"
          value={form.whatsapp}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="acceptance">
          <input
            type="checkbox"
            id="acceptance"
            name="acceptance"
            checked={form.acceptance}
            onChange={handleChange}
            required
          />
          I hereby, declare that being the member of MAATI-16 will abide by all the rules and regulations and always follow the ethical code of conduct.
        </label>
      </div>

      <button type="submit">Submit</button>

      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
        }

        .form-container h2 {
          margin-bottom: 20px;
          font-size: 24px;
          font-weight: 700;
          text-align: center;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }

        .form-group input[type="text"],
        .form-group input[type="email"],
        .form-group input[type="tel"],
        .form-group input[type="date"] {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
        }

        .form-group input[type="checkbox"] {
          margin-right: 10px;
        }

        button {
          width: 100%;
          padding: 10px;
          background-color: #ff9800;
          color: #fff;
          font-size: 18px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #e68900;
        }
      `}</style>
    </form>
  );
};

export default MembershipForm;
