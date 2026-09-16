import './App.css'
import logo from './assets/logopn.png'
function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="De-Sofex Plumbing" className="logo-image"  />
            <h1>De-Sofex Global Empire Services</h1>
            
          </div>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <a href="#contact" className="nav-button">
            Book a Plumber
          </a>
        </nav>
      </header>

      <main>
      <section className="hero-section" id="home">

       <div className="hero-content">

       <p className="hero-small-text">
       PROFESSIONAL PLUMBING SERVICES
       </p>

       <h1>
       Plumbing Solutions
       <br />
       You Can <span>Trust.</span>
       </h1>

        <p className="hero-text">
        From emergency repairs to complete plumbing installations,
       De-Sofex provides reliable, professional plumbing solutions
       for homes and businesses.
       </p>

    <div className="hero-buttons">

      <a href="#contact" className="primary-button">
        Book a Plumber
      </a>

      <a href="#services" className="secondary-button">
        Explore Services
      </a>

    </div>

    <div className="hero-trust">

      <div className="trust-item">
        <strong>10+</strong>
        <span>Years Experience</span>
      </div>

      <div className="trust-item">
        <strong>500+</strong>
        <span>Projects Completed</span>
      </div>

      <div className="trust-item">
        <strong>24/7</strong>
        <span>Emergency Support</span>
      </div>

    </div>

  </div>


  <div className="hero-image">

    <div className="plumber-image">

      <img src="/plumber.png" alt="Professional plumber"/>
      <div className="experience-badge">
        <strong>10+</strong>
        <span>Years of<br />Experience</span>
      </div>

     </div>

   </div>

   </section>
<section className="services-section" id="services">

  <div className="services-heading">

    <div>
      <p className="section-label">OUR SERVICES</p>

      <h2>
        Complete Plumbing
        <br />
        Solutions
      </h2>
    </div>

    <p className="services-intro">
      From small repairs to complete plumbing installations,
      our team provides dependable solutions designed around
      your home or business.
    </p>

  </div>


  <div className="services-grid">

    <div className="service-card">

      <span className="service-number">01</span>

      <div className="service-icon">🚿</div>

      <h3>Bathroom Plumbing</h3>

      <p>
        Professional installation and repair of showers,
        sinks, faucets and complete bathroom plumbing systems.
      </p>

      <a href="#contact" className="service-link">
        Learn More →
      </a>

    </div>


    <div className="service-card">

      <span className="service-number">02</span>

      <div className="service-icon">🔧</div>

      <h3>Pipe & Leak Repair</h3>

      <p>
        Fast detection and repair of leaking, blocked or
        damaged pipes to prevent further property damage.
      </p>

      <a href="#contact" className="service-link">
        Learn More →
      </a>

    </div>


    <div className="service-card">

      <span className="service-number">03</span>

      <div className="service-icon">🚽</div>

      <h3>Toilet Services</h3>

      <p>
        Reliable toilet installation, repair and maintenance
        for residential and commercial properties.
      </p>

      <a href="#contact" className="service-link">
        Learn More →
      </a>

    </div>


    <div className="service-card">

      <span className="service-number">04</span>

      <div className="service-icon">💧</div>

      <h3>Water Systems</h3>

      <p>
        Installation and maintenance of water supply systems,
        tanks, pumps and related plumbing equipment.
      </p>

      <a href="#contact" className="service-link">
        Learn More →
      </a>

    </div>


    <div className="service-card">

      <span className="service-number">05</span>

      <div className="service-icon">🏠</div>

      <h3>Home Plumbing</h3>

      <p>
        Complete plumbing solutions for homes, apartments
        and residential buildings.
      </p>

      <a href="#contact" className="service-link">
        Learn More →
      </a>

    </div>


    <div className="service-card">

      <span className="service-number">06</span>

      <div className="service-icon">🏢</div>

      <h3>Commercial Plumbing</h3>

      <p>
        Professional plumbing services for offices, shops,
        hotels and other commercial properties.
      </p>

      <a href="#contact" className="service-link">
        Learn More →
      </a>

    </div>

  </div>


  <div className="services-button-container">

    <a href="#contact" className="primary-button">
      Request a Plumbing Service
    </a>

  </div>

</section>
  <section className="plumbing-guide-section" id="guide">

  <div className="guide-heading">
    <p className="section-label">PLUMBING GUIDE</p>

    <h2>
      Understand the Problem
      <br />
      Before You Call
    </h2>

    <p>
      Not every plumbing problem requires an immediate emergency call.
      Follow these simple steps to identify common issues and understand
      what may be causing them.
    </p>
  </div>


  {/* STEP-BY-STEP */}

  <div className="diagnosis-section">

    <div className="diagnosis-title">
      <span>01</span>

      <div>
        <h3>Step-by-Step: Diagnose a Common Plumbing Problem</h3>

        <p>
          Before calling a plumber, these basic checks can help you
          understand what's happening.
        </p>
      </div>
    </div>


    <div className="diagnosis-steps">

      <div className="diagnosis-step">
        <span>1</span>

        <div>
          <h4>Identify the Problem</h4>

          <p>
            Check where the problem is coming from. Look for dripping
            water, unusual sounds, low water pressure or slow drainage.
          </p>
        </div>
      </div>


      <div className="diagnosis-step">
        <span>2</span>

        <div>
          <h4>Check the Water Supply</h4>

          <p>
            Make sure the main water supply is turned on and check
            whether other taps in the property have water.
          </p>
        </div>
      </div>


      <div className="diagnosis-step">
        <span>3</span>

        <div>
          <h4>Inspect Visible Connections</h4>

          <p>
            Look underneath sinks and around visible pipes for leaks,
            loose connections or standing water.
          </p>
        </div>
      </div>


      <div className="diagnosis-step">
        <span>4</span>

        <div>
          <h4>Check for Blockages</h4>

          <p>
            If water is draining slowly, check whether the sink,
            shower or toilet is showing signs of a blockage.
          </p>
        </div>
      </div>


      <div className="diagnosis-step">
        <span>5</span>

        <div>
          <h4>Know When to Call a Professional</h4>

          <p>
            If the problem involves significant leaking, flooding,
            damaged pipes or a problem you cannot safely identify,
            contact a professional plumber.
          </p>
        </div>
      </div>

    </div>

  </div>


  {/* COMMON PROBLEMS */}

  <div className="common-problems">

    <div className="problems-heading">

      <div>
        <span className="guide-number">02</span>

        <h3>
          Common Plumbing Issues
          <br />
          & Their Solutions
        </h3>
      </div>

      <p>
        Understanding the most common plumbing problems can help
        you recognize warning signs before they become bigger issues.
      </p>

    </div>


    <div className="problem-grid">

      <div className="problem-card">
        <div className="problem-icon">💧</div>

        <h4>Leaking Faucet</h4>

        <p>
          A dripping faucet may be caused by a worn washer,
          damaged seal or loose component.
        </p>

        <strong>Possible solution:</strong>

        <span>
          Inspect the faucet components and replace damaged parts.
        </span>
      </div>


      <div className="problem-card">
        <div className="problem-icon">🚿</div>

        <h4>Low Water Pressure</h4>

        <p>
          Low pressure may be caused by blocked fixtures,
          pipe problems or issues with the water supply.
        </p>

        <strong>Possible solution:</strong>

        <span>
          Check multiple fixtures and inspect the affected outlet.
        </span>
      </div>


      <div className="problem-card">
        <div className="problem-icon">🚽</div>

        <h4>Running Toilet</h4>

        <p>
          A toilet that continues running may have a faulty
          flapper, fill valve or float mechanism.
        </p>

        <strong>Possible solution:</strong>

        <span>
          Inspect the tank components and replace damaged parts.
        </span>
      </div>


      <div className="problem-card">
        <div className="problem-icon">🌀</div>

        <h4>Slow Drain</h4>

        <p>
          Slow drainage is often caused by accumulated debris,
          grease, hair or other materials inside the drain.
        </p>

        <strong>Possible solution:</strong>

        <span>
          Clear accessible debris and monitor the drainage.
        </span>
      </div>


      <div className="problem-card">
        <div className="problem-icon">🔧</div>

        <h4>Leaking Pipe</h4>

        <p>
          A leaking pipe can result from corrosion, damaged
          fittings, pressure or physical damage.
        </p>

        <strong>Possible solution:</strong>

        <span>
          Shut off the water supply and contact a professional
          if the leak is significant.
        </span>
      </div>


      <div className="problem-card">
        <div className="problem-icon">🌊</div>

        <h4>Blocked Toilet</h4>

        <p>
          A blocked toilet can prevent normal drainage and may
          cause the water level to rise.
        </p>

        <strong>Possible solution:</strong>

        <span>
          Stop using the toilet and use appropriate basic
          unclogging methods or contact a plumber.
        </span>
      </div>

    </div>

  </div>


  <div className="guide-cta">

    <h3>Not Sure What's Causing the Problem?</h3>

    <p>
      Our plumbing professionals can inspect the issue and
      recommend the appropriate solution.
    </p>

    <a href="#contact" className="primary-button">
      Talk to a Plumber
    </a>

  </div>

</section>    

   <section className="why-us-section" id="about">

  <div className="why-us-container">

    {/* IMAGE SIDE */}

    <div className="why-us-image">

      <img
        src="/plumber-about.jpg"
        alt="Professional plumber working"
      />

      <div className="why-us-badge">
        <strong>10+</strong>
        <span>Years of<br />Experience</span>
      </div>

    </div>


    {/* CONTENT SIDE */}

    <div className="why-us-content">

      <p className="section-label">
        WHY CHOOSE AQUAFIX
      </p>

      <h2>
        Plumbing You Can
        <br />
        <span>Depend On.</span>
      </h2>

      <p className="why-us-description">
        We believe good plumbing is more than fixing a leak.
        It's about providing dependable solutions, quality
        workmanship and service you can trust.
      </p>


      <div className="benefits-list">

        <div className="benefit-item">

          <div className="benefit-icon">
            ✓
          </div>

          <div>
            <h3>Experienced Professionals</h3>

            <p>
              Our team approaches every plumbing job with
              care, attention to detail and professional
              workmanship.
            </p>
          </div>

        </div>


        <div className="benefit-item">

          <div className="benefit-icon">
            ✓
          </div>

          <div>
            <h3>Fast Response</h3>

            <p>
              We understand that plumbing problems can
              disrupt your day, so we respond promptly
              to service requests.
            </p>
          </div>

        </div>


        <div className="benefit-item">

          <div className="benefit-icon">
            ✓
          </div>

          <div>
            <h3>Quality Workmanship</h3>

            <p>
              We focus on doing the job properly and
              providing solutions designed to last.
            </p>
          </div>

        </div>


        <div className="benefit-item">

          <div className="benefit-icon">
            ✓
          </div>

          <div>
            <h3>Transparent Service</h3>

            <p>
              We explain the problem and the required
              solution before work begins.
            </p>
          </div>

        </div>

      </div>


      <a href="#contact" className="primary-button">
        Work With Us
      </a>

    </div>

  </div>


  {/* TRUST STATS */}

  <div className="why-us-stats">

    <div className="stat">
      <strong>500+</strong>
      <span>Projects Completed</span>
    </div>

    <div className="stat">
      <strong>10+</strong>
      <span>Years Experience</span>
    </div>

    <div className="stat">
      <strong>24/7</strong>
      <span>Emergency Support</span>
    </div>

    <div className="stat">
      <strong>100%</strong>
      <span>Professional Service</span>
    </div>

  </div>

</section>     

        <section className="contact-section" id="contact">
          <p className="section-label">GET IN TOUCH</p>

          <h2>Need a Plumber?</h2>

          <p>
            Tell us what you need and we'll help you find the right
            plumbing solution.
          </p>

          <a href="tel:+2347037465079" className="primary-button">
            Call a Plumber
          </a>
        </section>
      </main>

      <footer>
        <p>© 2026 De-Sofex Plumbing Services. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App