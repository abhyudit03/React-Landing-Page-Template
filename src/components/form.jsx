import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    password: '',
    email: '',
    agreeToTerms: false
  });

  // Define your color styles here
  const styles = {
    card: {
      backgroundColor: '48494a', // Dark blue background for the card
      color: '#ffffff', // White text color
      width: '500px',
      height: '500px'
    },
    button: {
      backgroundColor: '#4CAF50', // Green background for the button
      color: '#ffffff' // White text color
    },
    link: {
      color: '#00BFFF' // Color for the 'I'm already a member' link
    }
    // Add more styles as needed
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Perform further actions like sending data to a backend server
  };

  return (
    <div className='container'>
      <div className="row justify-content-center">
      <div class="col d-flex align-items-center justify-content-center">
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4 mt-5">
          {/* Sign Up Card */}
          <div className="card shadow" style={styles.card}>
            <div className="card-body">
              <h3 className="text-center mb-4" style={{ color: styles.card.color }}>Sign In or Sign Up</h3>
              <form onSubmit={handleSubmit}>
                {/* Full Name Input */}
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="ENTER YOUR FULL NAME" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                {/* Password Input */}
                <div className="mb-3">
                  <input 
                    type="password" 
                    className="form-control" 
                    placeholder="ENTER YOUR PASSWORD" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>
                {/* Email Input */}
                <div className="mb-3">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="ENTER YOUR EMAIL" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                {/* Terms of Service Checkbox */}
                <div className="mb-3 form-check">
                  <input 
                    type="checkbox" 
                    className="form-check-input" 
                    id="termsOfServiceCheck" 
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="termsOfServiceCheck" style={{ color: styles.card.color }}>
                    I agree to the terms of service
                  </label>
                </div>
                {/* Sign Up Button */}
                <div className="d-grid gap-2">
                  <button type="submit" className="btn" style={styles.button}>Sign Up</button>
                </div>
                {/* Already a Member */}
                <div className="text-center mt-3">
                  <a href="#" style={styles.link}>I'm already a member</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    </div>
  );
};

export default Form;
