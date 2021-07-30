import React from "react";

const Contact = () => {
  return (
    <div>
      <section class="contact section-bg" id="contact">
        <div class="container">
          <div class="section-title">
            <h3>Contact</h3>

            <p>Do you have any questions? Please do not hesitate to contact me.</p>
          </div>
          <div class="row">


            <div class="col-lg-4 col md-4">
              <div class="contact-about">
                <h3>Hello,</h3>
                <p>
                  I'd love to hear from you!
                  <br></br>
                  Please fill out this form with your information and a brief message, or follow the one of the thinks to my social media. Thank you for stopping by!
                </p>
                <div class="social-links">
                  <a href="twitter.com" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="instagram.com" class="instagram"><i class="bi bi-instagram"></i></a>
                  <a href="linkedin.com" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  <a href="github.com" class="github"><i class="bi bi-github"></i></a>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4">
              <div class="info">
                <div class="d-flex align-items-center">
                  <i class="bi bi-geo-alt">

                  </i>
                  <p>Phoenix, Arizona</p>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-envelope">
                  </i>
                  <p>rsbeach97@gmail.com</p>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-phone">
                  </i>
                  <p>666-666-6666</p>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-8">
              <form action="forms/contact.php" method="post" class="php-email-form">
                <div class="form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required></input>
                </div>
                <div class="form-group mt-3">
                  <input type="email" name="email" class="form-control" id="email" placeholder="Your Email" required></input>
                </div>
                <div class="form-group mt-3">
                  <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required></input>
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Contact;



