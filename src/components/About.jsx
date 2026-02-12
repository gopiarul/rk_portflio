export default function About() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="about-hero text-white d-flex align-items-center">
        <div className="container">
          <h1 className="fw-bold">About Us</h1>
          <p className="lead col-md-6">
            RK Software Solutions helps businesses grow with affordable,
            scalable and reliable digital solutions.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <h2 className="fw-bold">Our Story</h2>
              <p className="text-muted mt-2">
                From simple websites to enterprise-level software systems,
                we build technology that works for real businesses.
              </p>
            </div>
          </div>

          {/* THREE COLUMNS */}
          <div className="row text-center">
            <div className="col-md-4">
              <h5 className="fw-bold">Company History</h5>
              <p className="text-muted">
                RK Software Solutions is based in Puducherry with
                <strong> 6+ years of experience</strong> delivering
                production-ready web, mobile, and business software
                for startups and growing companies.
              </p>
            </div>

            <div className="col-md-4 border-start border-end">
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-muted">
                Our mission is to provide high-quality, affordable,
                and scalable software solutions that help businesses
                succeed in today’s digital world.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="fw-bold">Our Values</h5>
              <p className="text-muted">
                Quality delivery, honest pricing, clean code,
                long-term support, and a genuine passion for
                customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTO SECTION */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3 className="fw-bold">Leadership</h3>
              <p>
                RK Software Solutions is led by
                <strong> Rajkumar B</strong>,
                a Senior Software Developer & CTO with
                <strong> 6+ years of hands-on industry experience</strong>.
              </p>
              <p>
                He specializes in full-stack development, backend
                architecture, REST APIs, database-driven systems,
                and Android application development.
              </p>

              <a
                href="https://sites.google.com/view/rajkumar-b-senior-software-dev/home"
                target="_blank"
                className="btn btn-primary mt-2"
              >
                View CTO Profile
              </a>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold">Rajkumar B</h5>
                  <p className="text-muted">
                    CTO & Senior Software Developer
                  </p>
                  <ul className="list-unstyled">
                    <li>✔ Full Stack Development</li>
                    <li>✔ Backend Architecture</li>
                    <li>✔ Android Applications</li>
                    <li>✔ API & Database Design</li>
                    <li>✔ Project Leadership</li>
                  </ul>
                  <p className="fw-bold">
                    Pricing: ₹3,000 – ₹3,00,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
