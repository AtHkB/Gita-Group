import React from 'react';

export const OurPurpose = (props) => {
  return (
    <div id="ourPurpose">
      <div className="container">
        <div className="row">

          <div className="col-xs-12 col-md-6">
            <div className="purpose-text">
              <h2>Our Purpose</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="list-style">
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/ourPurpose.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
