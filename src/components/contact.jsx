import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';

const initialState = {
  name: "",
  email: "",
  phoneNo: "",
  companyName: ""
};

export const Contact = (props) => {
  const [formValues, setFormValues] = useState(initialState);
  const [clearForm, setClearForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const clearState = () => {
    setFormValues(initialState);
    setClearForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues.name, formValues.email, formValues.phoneNo, formValues.companyName);

    emailjs
      .sendForm("service_auyxb0a", "template_jdo5fwn", e.target, "oJK6Hc_Tj63AgXr8s")
      .then(
        (result) => {
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (clearForm) {
      setClearForm(false);
    }
  }, [clearForm]);

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        value={formValues.name}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={formValues.email}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        className="form-control"
                        placeholder="Company Name"
                        required
                        onChange={handleChange}
                        value={formValues.companyName}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="tel"
                        pattern="[0-9]+"
                        id="phoneNo"
                        name="phoneNo"
                        className="form-control"
                        placeholder="Phone No"
                        required
                        onChange={handleChange}
                        value={formValues.phoneNo}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Book Free Consultation Call Now
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 LeadGen Finance All Rights Reserved. {" "}
            <Link to="/policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};