import React from 'react'
import profile_img from '../assets/img/my_img.jpeg'

export default function About() {
    return (
        <div>
                {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2>About</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row about-left">
          <div class="col-lg-3" data-aos="fade-right">
            <img src={profile_img} class="about_img" alt=""/>
          </div>
          <div class="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>MERN Stack Developer &amp; Web Developer.</h3>
            <p class="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div class="row">
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>16 May 1997</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.anshul.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 827 946 7024</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Noida, India</span></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <strong>Gender:</strong> <span>Female</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>MCA</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>anshul.programmingjobs@gmail.com</span></li>
                  <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            {/* <p>
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
            </p> */}
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}

        </div>
    )
}
