import React from "react";
import Form from "./form";
export const Header = (props) => {
  return (
    <header id="header" className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
            {/* Left Column */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p> 
              </div>
            </div>
            {/* Right Column for Form */}
            <div className="form-style">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <Form />
            </div>
            </div>
          </div>
          </div>
        </div>
    </header>
  );
};
