
import React from "react";
import "./app.css";

function App() {
  return (
    <div className="website">
      {/* Navigation */}
      <header className="navbar">
        <a href="#home" className="logo">
          React
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Home section */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="small-title">
              WELCOME TO MY WEBSITE
            </span>

            <h1>React</h1>

            <p>
              React is a JavaScript library for building
              user interfaces. It helps developers create
              interactive and reusable website components.
            </p>

            <a href="#about" className="hero-button">
              Learn More
            </a>
          </div>
        </section>

        {/* About section */}
        <section className="about" id="about">
          <h2>Learn About React</h2>

          <p className="section-description">
            Discover the important features of React
            and how it helps developers build websites.
          </p>

          <div className="react-cards">
            <article className="react-card">
              <div className="card-image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React logo"
                />
              </div>

              <div className="card-content">
                <h3>React</h3>

                <p>
                  React is a JavaScript library used to
                  build modern and interactive user interfaces.
                </p>

                <a
                  href="https://react.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Learn React
                </a>
              </div>
            </article>

            <article className="react-card">
              <div className="card-image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React components illustration"
                />
              </div>

              <div className="card-content">
                <h3>React Components</h3>

                <p>
                  Components divide a website into smaller
                  parts that can be reused in different places.
                </p>

                <a
                  href="https://react.dev/learn"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Explore Components
                </a>
              </div>
            </article>

            <article className="react-card">
              <div className="card-image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React learning illustration"
                />
              </div>

              <div className="card-content">
                <h3>Why Learn React?</h3>

                <p>
                  React makes it easier to organize code
                  and build interactive web applications.
                </p>

                <a
                  href="https://react.dev/learn"
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  Start Learning
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Contact section */}
        <section className="contact" id="contact">
          <h2>Contact Us</h2>

          <p>
            Do you want to learn more about React?
            Visit the official React website.
          </p>

          <a
            href="https://react.dev/"
            target="_blank"
            rel="noreferrer"
            className="contact-button"
          >
            Visit React Website
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 React Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
