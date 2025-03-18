import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext.jsx';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',  
    dob: '',     
    age: '',     
    number: '',  
  });
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Calculate age from dob and check if age is greater than or equal to 18
    if (formData.dob) {
      const age = calculateAge(new Date(formData.dob));
      if (age < 18) {
        alert('You must be at least 18 years old to register.');
        return;
      }
      setFormData((prev) => ({ ...prev, age })); // Set calculated age
    }

    try {
      // Remove the confirmPassword field from the data before registering
      const { confirmPassword, ...dataToSend } = formData;
      
      // Register the user by passing the form data (without unnecessary fields)
      await register(dataToSend);  // Send data excluding confirmPassword, mymatchesId, favTeam, favPlayers, transactions, balance
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  // Helper function to calculate age from dob
  const calculateAge = (dob) => {
    const diff = Date.now() - dob.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="min-h-screen">
      <div className="rgcontainer">
        <h2 className="title">Create your account</h2>
        <form className="form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="input-group">
            <input
              type="text"
              required
              className="input-field"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email */}
          <div className="input-group">
            <input
              type="email"
              required
              className="input-field"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <input
              type="password"
              required
              className="input-field"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <input
              type="password"
              required
              className="input-field"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>

          {/* Gender */}
          <div className="input-group">
            <select
              className="input-field"
              value={formData.gender}
              onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            >
              <option value="" disabled>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div className="input-group">
            <input
              type="date"
              required
              className="input-field"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
            />
          </div>

          {/* Phone Number */}
          <div className="input-group">
            <input
              type="text"
              className="input-field"
              placeholder="Phone Number"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
            />
          </div>

          <button type="submit" className="button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
