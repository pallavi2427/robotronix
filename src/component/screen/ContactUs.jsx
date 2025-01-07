import React from "react";


const ContactUs = () => {
  return (
    <>
      <div className="main">
        {/* <div className="text-center">
          <h1>Contact Us</h1>
          <p>
            Whether you're seeking a solution or have a concern, we're happy to
            assist you.
          </p>
        </div> */}

        <section className="contact-page-sec">
          <div className="container">
          <div className="text-center">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-white">
            Whether you're seeking a solution or have a concern, we're happy to
            assist you.
          </p>
        </div>
            <div className="row">
              <div className="col-md-12"> 
                <div className="contact-page-form mb-5">
                  <form action="/submit-contact-form" method="post">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                          <label>Full Name<span className="text-danger">*</span></label>
                          <input
                            type="text"
                            placeholder="Full Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                        <label>Email<span className="text-danger">*</span></label>

                          <input
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                        <label>Phone Number<span className="text-danger">*</span></label>

                          <input
                            type="text"
                            placeholder="Phone Number"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="single-input-field">
                        <label>Subject</label>

                          <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                      <div className="col-md-12 message-input">
                        <div className="single-input-field">
                        <label>Message<span className="text-danger">*</span></label>

                          <textarea
                          
                            name="message"
                          />
                        </div>
                      </div>

                      <div className="single-input-fieldsbtn d-flex justify-content-center">
                        <button type="submit" className="btn contact-btn">
                          Send Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
