import React from "react";

const Contact = () => {
  return (
    <div class="mb-4" id="contact">
      <div class="form">
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>

        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me.</p>

        <div class="row">


          <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">


              <div class="row">


                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control" />
                    <label for="name" class="">Your name</label>
                  </div>
                </div>



                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control" />
                    <label for="email" class="">Your email</label>
                  </div>
                </div>


              </div>



              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control" />
                    <label for="subject" class="">Subject</label>
                  </div>
                </div>
              </div>



              <div class="row">


                <div class="col-md-12">

                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                  </div>

                </div>
              </div>


            </form>

            <div class="text-center text-md-left">
              <a href="moviepoopshoot.com" class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div class="status"></div>
          </div>



          <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
              <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p>Phoenix, AZ USA</p>
              </li>

              <li><i class="fas fa-phone mt-4 fa-2x"></i>
                <p>+ 01 234 567 89</p>
              </li>

              <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>rsbeach97@gmail..com</p>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div id="find-me">
        <h1 class="find-me-title">Where you can find me...</h1>
        <div class="icons">
          <a href="https://github.com/beachybeach" target="_blank" rel="noreferrer">
            <i class="fab fa-github fa-7x" aria-hidden="true"></i>
          </a>
          <a href="https://www.linkedin.com/in/rileysbeach/" target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin-in fa-7x"></i>
          </a>
          <a href="https://stackoverflow.com/users/15348326/riley-beach" target="_blank" rel="noreferrer">
            <i class="fab fa-stack-overflow fa-7x"></i>
          </a>
          <a href="https://www.instagram.com/beachybeachhh" target="_blank" rel="noreferrer">
            <i class="fab fa-instagram fa-7x"></i>
          </a>
        </div>
      </div>

    </div>
  )
}

export default Contact;



