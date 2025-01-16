import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Scholarship Finder</title>
        <meta
          name="description"
          content="Discover the best scholarships available for students in the US."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-black">
          <div className="container">
            <a className="navbar-brand" href="/#">
              <i className="navbar-brand-icon bi-book me-2"></i>
              <span>Scholarship Finder</span>
            </a>

            <div className="d-lg-none ms-auto me-3">
              <a href="#section_5" className="btn custom-btn me-3">
                Search Scholarship
              </a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-lg-auto me-lg-4">
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_1">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_2">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_3">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link click-scroll" href="#section_4">
                    Reviews
                  </a>
                </li>
              </ul>

              <div className="d-none d-lg-block">
                <a href="#section_5" className="btn custom-btn ">
                  <i className="btn-icon"></i>
                  <span>Search Scholarships</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          className="hero-section d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 mb-5 pb-5 pb-lg-0 mb-lg-0">
                <h6>Welcome to Scholarship Finder</h6>
                <h1 className="text-white mb-4">
                  Your Gateway to Educational Opportunities
                </h1>
                <a href="#section_2" className="btn custom-btn me-3">
                  Discover More
                </a>
                <a href="#section_3" className="link link--kale">
                  Contact Us
                </a>
              </div>
              <div className="hero-image-wrap col-lg-6 col-12 mt-3 mt-lg-0">
                <img
                  src="/images/education-online-booksa.webp"
                  className="hero-image img-fluid"
                  alt="Scholarship Finder"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                <div className="avatar-group d-flex flex-wrap align-items-center">
                  <img
                    src="/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                    className="img-fluid avatar-image"
                    alt="Beautiful young woman"
                  />
                  <img
                    src="/images/avatar/portrait-young-redhead-bearded-male.jpg"
                    className="img-fluid avatar-image avatar-image-left"
                    alt="Young redhead bearded male"
                  />
                  <img
                    src="/images/avatar/pretty-blonde-woman.jpg"
                    className="img-fluid avatar-image avatar-image-left"
                    alt="Pretty blonde woman"
                  />
                  <img
                    src="/images/avatar/studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg"
                    className="img-fluid avatar-image avatar-image-left"
                    alt="Happy funny smiling boyfriend"
                  />

                  <div className="reviews-group mt-3 mt-lg-0">
                    <strong>4.5</strong>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star-fill"></i>
                    <i className="bi-star"></i>
                    <small className="ms-3">2,564 reviews</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Scholarships Section */}
        <section className="py-lg-5"></section>

        <section className="search-section section-padding" id="section_2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img
                  src="/images/tablet-screen-contents.webp
                  "
                  className="img-fluid"
                  alt="Search Scholarships"
                />
              </div>
              <div className="col-lg-6 col-12">
                <div className="search-section-info">
                  <h6>Find Your Future</h6>
                  <h2 className="mb-4">Search Scholarships</h2>
                  <p>
                    Our platform connects you with tailored scholarships that
                    align with your academic and personal goals. Whether you're
                    an undergraduate or graduate student, explore funding
                    opportunities that match your profile.
                  </p>
                  <p>
                    Use our powerful search and filter tools to discover
                    scholarships based on your location, degree level, and field
                    of study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore Scholarships Preview */}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center">
                <h6>Scholarship Highlights</h6>
                <h2 className="mb-5">Explore Featured Scholarships</h2>
              </div>

              <div className="col-lg-4 col-12">
                <nav
                  id="navbar-example3"
                  className="h-100 flex-column align-items-stretch"
                >
                  <nav className="nav nav-pills flex-column">
                    <a className="nav-link smoothscroll" href="#item-1">
                      Undergraduate Programs
                    </a>
                    <a className="nav-link smoothscroll" href="#item-2">
                      Graduate Fellowships
                    </a>
                    <a className="nav-link smoothscroll" href="#item-3">
                      International Scholarships
                    </a>
                    <a className="nav-link smoothscroll" href="#item-4">
                      STEM Scholarships
                    </a>
                    <a className="nav-link smoothscroll" href="#item-5">
                      Diversity Awards
                    </a>
                  </nav>
                </nav>
              </div>

              <div className="col-lg-8 col-12">
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example3"
                  data-bs-smooth-scroll="true"
                  className="scrollspy-example-2"
                  tabIndex="0"
                >
                  <div className="scrollspy-example-item" id="item-1">
                    <h5>Undergraduate Programs</h5>
                    <p>
                      Find financial aid opportunities for undergraduate
                      students, from merit-based scholarships to need-based
                      funding options.
                    </p>
                    <blockquote className="blockquote">
                      “Education is the most powerful weapon which you can use
                      to change the world.” – Nelson Mandela
                    </blockquote>
                  </div>

                  <div className="scrollspy-example-item" id="item-2">
                    <h5>Graduate Fellowships</h5>
                    <p>
                      Discover fellowships and funding options for graduate
                      students pursuing advanced degrees in diverse fields.
                    </p>
                    <img
                      src="/images/portrait-mature-smiling-authoress-sitting-desk1.webp"
                      class="scrollspy-example-item-image img-fluid"
                      alt=""
                    />
                  </div>
                </div>

                <div className="scrollspy-example-item" id="item-3">
                  <h5>International Scholarships</h5>
                  <p>
                    Explore scholarships for international students looking to
                    study in the US and other top destinations.
                  </p>

                  <img
                    src="/images/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                    class="scrollspy-example-item-image img-fluid"
                    alt=""
                  />
                  <img
                    src="/images/businessman-sitting-by-table-cafe.jpg"
                    class="scrollspy-example-item-image img-fluid"
                    alt=""
                  />
                </div>

                <div className="scrollspy-example-item" id="item-4">
                  <h5>STEM Scholarships</h5>
                  <p>
                    Access scholarships specifically designed for students in
                    science, technology, engineering, and mathematics fields.
                  </p>
                  <img
                    src="/images/portrait-mature-smiling-authoress-sitting-desk2.webp"
                    class="scrollspy-example-item-image img-fluid"
                    alt=""
                  />
                </div>

                <div className="scrollspy-example-item" id="item-5">
                  <h5>Diversity Awards</h5>
                  <p>
                    Find scholarships that promote diversity and inclusion,
                    supporting underrepresented communities in higher education.
                  </p>
                  <img
                    src="/images/portrait-mature-smiling-authoress-sitting-desk3.webp"
                    class="scrollspy-example-item-image img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="team-section section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <img
                  src="/images/portrait-mature-smiling-authoress-sitting-desk.jpg"
                  className="team-image img-fluid"
                  alt="Scholarship Finder Team"
                />
              </div>
              <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                <h6>Meet Our Team</h6>
                <h2 className="mb-4">Dedicated to Your Success</h2>
                <p>
                  Our team is passionate about helping students achieve their
                  dreams. With expertise in financial aid and higher education,
                  we aim to make the scholarship search process seamless.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section section-padding" id="section_4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-12 text-center mb-5">
                <h6>Reviews</h6>
                <h2>What People Are Saying</h2>
              </div>

              <div className="col-lg-4 col-12">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img
                      src="/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                      className="img-fluid avatar-image"
                      alt="Sandy"
                    />
                    <div className="text-center mt-3">
                      <span className="text-white">Sandy</span>
                      <strong className="d-block text-white">Student</strong>
                    </div>
                  </div>

                  <div className="custom-block-info">
                    <div className="reviews-group mb-3">
                      <strong>4.5</strong>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star"></i>
                    </div>
                    <p className="mb-0">
                      Scholarship Finder helped me secure funding for my
                      studies. It’s an amazing platform!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12 my-5 my-lg-0">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img
                      src="/images/avatar/portrait-young-redhead-bearded-male.jpg"
                      className="img-fluid avatar-image avatar-image-left"
                      alt="John"
                    />
                    <div className="text-center mt-3">
                      <span className="text-white">John</span>
                      <strong className="d-block text-white">Researcher</strong>
                    </div>
                  </div>

                  <div className="custom-block-info">
                    <div className="reviews-group mb-3">
                      <strong>4.0</strong>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star"></i>
                      <i className="bi-star"></i>
                    </div>
                    <p className="mb-0">
                      I found scholarships I didn’t even know existed. This is a
                      game-changer for students!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="custom-block d-flex flex-wrap">
                  <div className="custom-block-image-wrap d-flex flex-column">
                    <img
                      src="/images/avatar/pretty-blonde-woman.jpg"
                      className="img-fluid avatar-image"
                      alt="Candy"
                    />
                    <div className="text-center mt-3">
                      <span className="text-white">Candy</span>
                      <strong className="d-block text-white">
                        Scholarship Advisor
                      </strong>
                    </div>
                  </div>

                  <div className="custom-block-info">
                    <div className="reviews-group mb-3">
                      <strong>5.0</strong>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                      <i className="bi-star-fill"></i>
                    </div>
                    <p className="mb-0">
                      The platform is user-friendly and has helped countless
                      students achieve their dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="search-scholarships-section section-padding"
          id="section_5"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 class="mb-4">Search Scholarships</h2>

                {/* Search and Filter Form */}
                <form id="search-form" className="mb-4">
                  <div className="row g-3">
                    <div className="col-md-4">
                      <input
                        type="text"
                        id="search-name"
                        className="form-control"
                        placeholder="Scholarship Name (Optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <select id="search-degree" className="form-control">
                        <option value="">Select Degree Level</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                        <option value="phd">PhD</option>
                      </select>
                    </div>
                    {/* <!-- Add this in the search form --> */}
                    <div class="col-md-4">
                      <select id="search-type" class="form-control">
                        <option value="">Select Type</option>
                        <option value="merit-based">Merit-Based</option>
                        <option value="need-based">Need-Based</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <input
                        type="text"
                        id="search-deadline"
                        class="form-control"
                        placeholder="Enter Deadline (e.g., Before June 2025) (Optional)"
                      />
                    </div>
                  </div>
                  <div className="row g-3 mt-3">
                    <div className="col-md-4">
                      <input
                        type="text"
                        id="search-state"
                        className="form-control"
                        placeholder="State (Optional)"
                      />
                    </div>
                    <div className="col-md-4">
                      <button
                        type="button"
                        id="search-button"
                        className="btn btn-primary w-100"
                      >
                        Search Scholarships
                      </button>
                    </div>
                  </div>
                </form>

                {/* Results Section */}
                <div id="scholarship-results" className="row">
                  {/* Pagination Controls */}
                  <div
                    id="pagination-controls"
                    className="text-center mt-4"
                  ></div>

                  {/* Results will appear here */}
                  <section id="scholarship-results-section">
                    <div id="scholarship-results" className="row">
                      {/* Results will appear here */}
                    </div>

                    <div
                      id="pagination-controls"
                      className="d-flex justify-content-between mt-4"
                    >
                      <button id="prev-page" className="btn btn-secondary">
                        Previous
                      </button>
                      <span id="pagination-info">Page 1 of 1</span>
                      <button id="next-page" className="btn btn-secondary">
                        Next
                      </button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section section-padding" id="section_3">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-12 mx-auto">
                <form
                  className="custom-form scholarship-form bg-white shadow"
                  action="#"
                  method="post"
                  role="form"
                >
                  <div className="text-center mb-5">
                    <h2 className="mb-1">Subscribe for Updates</h2>
                  </div>
                  <div className="form-body">
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                      <span className="input-group-text">
                        <i className="custom-form-icon bi-person"></i>
                      </span>
                    </div>

                    <div className="input-group mb-4">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                      <span className="input-group-text">
                        <i className="custom-form-icon bi-envelope"></i>
                      </span>
                    </div>

                    <button type="submit" className="form-control">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="col-lg-6 col-12">
                <h6 className="mt-5">Contact Us</h6>
                <h2 className="mb-4">We’re Here to Help</h2>
                <p>
                  <i className="bi-geo-alt me-2"></i> Boston, Massachusetts, USA
                </p>
                <p>
                  <a href="tel:1234567890" className="contact-link">
                    +1 123-456-7890
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:info@scholarshipfinder.com"
                    className="contact-link"
                  >
                    info@scholarshipfinder.com
                  </a>
                </p>

                <h6 className="site-footer-title mt-5 mb-3">Follow Us</h6>
                <ul className="social-icon mb-4">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer text-center py-4">
        <p>© 2025 Scholarship Finder. All rights reserved.</p>
      </footer>
    </>
  );
}
