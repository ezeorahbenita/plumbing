import './App.css'
import { useState } from "react";
import logo from './assets/logopn.png'
function App() {
  const [booking, setBooking] = useState({
  fullName: "",
  phone: "",
  email: "",
  service: "",
  address: "",
  problem: "",
  date: "",
  time: "",
  emergency: "No"
});
const handleBookingChange = (e) => {
  const { name, value } = e.target;

  setBooking({
    ...booking,
    [name]: value
  });
};
const handleBookingSubmit = (e) => {
  e.preventDefault();

  localStorage.setItem(
    "plumbingBooking",
    JSON.stringify(booking)
  );

  alert("Your plumbing request has been submitted successfully!");

  setBooking({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    problem: "",
    date: "",
    time: "",
    emergency: "No"
  });
};
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
 <header>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
  <nav className="navbar">
    <div className="logo">
     <img src={logo}alt="De-Sofex Plumbing"className="logo-image"/>
     <h1>De-Sofex Global Empire Services</h1>
    </div>
    <button className={`menu-toggle ${menuOpen ? "active" : ""}`}
      onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
   <li>
    <a href="#home" onClick={() => setMenuOpen(false)}>
      Home
    </a>
   </li>

   <li>
    <a href="#services" onClick={() => setMenuOpen(false)}>
      Services
    </a>
   </li>

   <li>
    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>
   </li>

   <li>
    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>
   </li>

   <li>
    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>
   </li>

   <li>
    <a href="#contact" className="mobile-book-button"
    onClick={() => setMenuOpen(false)} > Book a Plumber </a>
  </li>
 </ul>
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

      <a href="#booking" className="primary-button">
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
        WHY CHOOSE DE-SOFEX</p>

    <h2> Plumbing You Can <br /> 
    <span>Depend On.</span></h2>
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
<section className="how-it-works-section" id="process">

  <div className="process-heading">
    <p className="section-label">HOW IT WORKS</p>

    <h2>
      Simple Process.
      <br />
      <span>Reliable Service.</span>
    </h2>

    <p>
      Getting professional plumbing help should be simple.
      From your first request to the completion of the job,
      we make the process straightforward.
    </p>
  </div>


  <div className="process-container">

    <div className="process-step">

      <div className="process-number">
        01
      </div>

      <div className="process-icon">
        💬
      </div>

      <h3>Tell Us Your Problem</h3>

      <p>
        Contact us and describe the plumbing issue you are
        experiencing. We'll help you understand the next step.
      </p>

    </div>


    <div className="process-line"></div>


    <div className="process-step">

      <div className="process-number">
        02
      </div>

      <div className="process-icon">
        📅
      </div>

      <h3>Schedule a Visit</h3>

      <p>
        Choose a convenient time for our plumbing professional
        to visit your home or business.
      </p>

    </div>


    <div className="process-line"></div>


    <div className="process-step">

      <div className="process-number">
        03
      </div>

      <div className="process-icon">
        🔍
      </div>

      <h3>We Inspect & Fix</h3>

      <p>
        Our plumber identifies the problem and carries out
        the appropriate repair or installation.
      </p>

    </div>


    <div className="process-line"></div>


    <div className="process-step">

      <div className="process-number">
        04
      </div>

      <div className="process-icon">
        ✓
      </div>

      <h3>Enjoy the Solution</h3>

      <p>
        Once the work is completed, your plumbing system is
        ready to perform reliably again.
      </p>

    </div>

  </div>


  <div className="process-cta">

    <div>
      <h3>Ready to Fix Your Plumbing Problem?</h3>

      <p>
        Get professional help from De-Sofex Global Empire Services.
      </p>
    </div>

    <a href="#booking" className="primary-button">
      Book a Plumber
    </a>

  </div>

</section>
<section className="projects-section" id="projects">

  <div className="projects-heading">

    <div>
      <p className="section-label">OUR PROJECTS</p>

      <h2>
        Recent Plumbing
        <br />
        <span>Work.</span>
      </h2>
    </div>

    <p>
      Take a look at some of the plumbing projects completed
      by the De-Sofex team for homes, businesses and other
      properties.
    </p>

  </div>


  <div className="projects-grid">

    <div className="project-card">

      <div className="project-image">
        <img
          src="/project-bathroom.jpg"
          alt="Modern bathroom plumbing installation"
        />

        <span className="project-category">
          Residential
        </span>
      </div>

      <div className="project-content">

        <h3>Modern Bathroom Installation</h3>

        <p>
          Complete plumbing installation for a modern
          residential bathroom.
        </p>

        <a href="#contact">
          View Project →
        </a>

      </div>

    </div>


    <div className="project-card">

      <div className="project-image">
        <img
          src="/project-pipes.jpg"
          alt="Pipe installation and repair"
        />

        <span className="project-category">
          Pipework
        </span>
      </div>

      <div className="project-content">

        <h3>Pipe Installation & Repair</h3>

        <p>
          Professional pipework installation and repair
          for a residential property.
        </p>

        <a href="#contact">
          View Project →
        </a>

      </div>

    </div>


    <div className="project-card">

      <div className="project-image">
        <img
          src="/project-water-system.jpg"
          alt="Water supply system installation"
        />

        <span className="project-category">
          Water Systems
        </span>
      </div>

      <div className="project-content">

        <h3>Water Supply System</h3>

        <p>
          Installation of a reliable water supply system
          for a large residential property.
        </p>

        <a href="#contact">
          View Project →
        </a>

      </div>

    </div>


    <div className="project-card">

      <div className="project-image">
        <img
          src="/project-commercial.jpg"
          alt="Commercial plumbing project"
        />

        <span className="project-category">
          Commercial
        </span>
      </div>

      <div className="project-content">

        <h3>Commercial Plumbing</h3>

        <p>
          Plumbing installation and maintenance for a
          commercial building.
        </p>

        <a href="#contact">
          View Project →
        </a>

      </div>

    </div>


    <div className="project-card">

      <div className="project-image">
        <img
          src="/project-bathroom2.jpg"
          alt="Bathroom renovation plumbing"
        />

        <span className="project-category">
          Renovation
        </span>
      </div>

      <div className="project-content">

        <h3>Bathroom Renovation</h3>

        <p>
          Plumbing upgrades completed as part of a
          residential bathroom renovation.
        </p>

        <a href="#contact">
          View Project →
        </a>

      </div>

    </div>


    <div className="project-card">

      <div className="project-image">
        <img
          src="/project-maintenance.jpg"
          alt="Plumbing maintenance service"
        />

        <span className="project-category">
          Maintenance
        </span>
      </div>

      <div className="project-content">

        <h3>Plumbing Maintenance</h3>

        <p>
          Inspection and maintenance of plumbing systems
          to keep the property operating efficiently.
        </p>

        <a href="#contact">
          View Project →
        </a>

      </div>

    </div>

  </div>


  <div className="projects-button">

    <a href="#contact" className="primary-button">
      Start Your Project
    </a>

  </div>

</section>
<section className="testimonials-section">

  <div className="testimonials-heading">

    <p className="section-label">CUSTOMER TESTIMONIALS</p>

    <h2>
      What Our
      <br />
      <span>Customers Say.</span>
    </h2>

    <p>
      We value the trust our customers place in us.
      Here are some of the experiences we've received
      from people we've worked with.
    </p>

  </div>


  <div className="testimonials-grid">

    <div className="testimonial-card">

      <div className="testimonial-top">
        <div className="stars">
          ★★★★★
        </div>

        <span className="quote-mark">"</span>
      </div>

      <p className="testimonial-text">
        De-Sofex responded quickly when we had a serious
        pipe leak at home. The plumber identified the
        problem and fixed it professionally. Everything
        was explained clearly before the work started.
      </p>

      <div className="customer">

        <div className="customer-avatar">
          AO
        </div>

        <div>
          <h4>Alex Okafor</h4>
          <span>Residential Customer</span>
        </div>

      </div>

    </div>


    <div className="testimonial-card">

      <div className="testimonial-top">

        <div className="stars">
          ★★★★★
        </div>

        <span className="quote-mark">"</span>

      </div>

      <p className="testimonial-text">
        We needed plumbing work completed for our office
        renovation. The team was professional, organized
        and completed the installation according to plan.
      </p>

      <div className="customer">

        <div className="customer-avatar">
          CN
        </div>

        <div>
          <h4>Chika Nwosu</h4>
          <span>Business Owner</span>
        </div>

      </div>

    </div>


    <div className="testimonial-card">

      <div className="testimonial-top">

        <div className="stars">
          ★★★★★
        </div>

        <span className="quote-mark">"</span>

      </div>

      <p className="testimonial-text">
        Our bathroom needed a complete plumbing upgrade.
        De-Sofex handled the installation carefully and
        the final result was exactly what we needed.
      </p>

      <div className="customer">

        <div className="customer-avatar">
          EM
        </div>

        <div>
          <h4>Emeka Martins</h4>
          <span>Homeowner</span>
        </div>

      </div>

    </div>

  </div>

</section>
<section className="emergency-section">

  <div className="emergency-container">

    <div className="emergency-content">

      <p className="emergency-label">
        EMERGENCY PLUMBING
      </p>

      <h2>
        Plumbing Emergency?
        <br />
        <span>We're Ready to Help.</span>
      </h2>

      <p>
        Burst pipes, serious leaks, blocked toilets or sudden
        plumbing problems can happen at any time. Contact
        De-Sofex Global Empire Services for professional
        plumbing assistance.
      </p>

      <div className="emergency-buttons">

        <a
          href="tel:+2347037465079"
          className="emergency-button"
        >
          📞 Call Now
        </a>

        <a
          href="#contact"
          className="emergency-outline-button"
        >
          Request a Plumber
        </a>

      </div>

    </div>


    <div className="emergency-card">

      <div className="emergency-icon">
        🚨
      </div>

      <h3>Need Help Now?</h3>

      <p>
        Our team is available to respond to urgent
        plumbing problems.
      </p>

      <a href="tel:+2347037465079">
        +234 703 746 5079
      </a>

      <span>
        Emergency Plumbing Support
      </span>

    </div>

  </div>

</section>
{/* BOOK A PLUMBER */}
<section className="booking-section" id="booking">

  <div className="booking-heading">
    <p className="section-label">BOOK A PLUMBER</p>

    <h2>Request a Plumbing Service</h2>

    <p>
      Tell us what you need and provide your location so our team
      can understand how best to assist you.
    </p>
  </div>

  <form className="booking-form"onSubmit={handleBookingSubmit} >

    <div className="form-row">

      <div className="form-group">
        <label>Full Name</label>
        <input type="text"name="fullName" placeholder="Enter your full name" value={booking.fullName}
  onChange={handleBookingChange} required/>
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          required
          value={booking.phone}
          onChange={handleBookingChange}
        />
      </div>

    </div>


    <div className="form-row">

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={booking.email}
          onChange={handleBookingChange} />
      </div>

      <div className="form-group">
        <label>Service Needed</label>

        <select 
        name="service"
        value={booking.service}
        onChange={handleBookingChange}
        required>
          <option value="">Select a service</option>
          <option>Bathroom Plumbing</option>
          <option>Pipe & Leak Repair</option>
          <option>Toilet Services</option>
          <option>Water Systems</option>
          <option>Home Plumbing</option>
          <option>Commercial Plumbing</option>
          <option>Emergency Plumbing</option>
          <option>Other</option>
        </select>

      </div>

    </div>


    <div className="form-group">
      <label>Full Address</label>

      <input
        type="text"
        name="address"
        value={booking.address}
        onChange={handleBookingChange}
        placeholder="Enter the address where service is needed"
        required
      />
    </div>


    <div className="form-group">
      <label>Describe the Problem</label>

      <textarea
      name="problem"
        rows="5"
        placeholder="Tell us what plumbing problem you are experiencing..."
        value={booking.problem}
        onChange={handleBookingChange}
        required
      ></textarea>
    </div>


    <div className="form-row">

      <div className="form-group">
        <label>Preferred Date</label>

        <input
          type="date"
          name="date"
          value={booking.date}
          onChange={handleBookingChange}
          required
        />
      </div>


      <div className="form-group">
        <label>Preferred Time</label>

        <input
          type="time"
          name="time"
          value={booking.time}
          onChange={handleBookingChange}
          required
        />
      </div>

    </div>


    <div className="form-group">

      <label>Is this an emergency?</label>

      <div className="radio-group">

        <label>
          <input
            type="radio"
            name="emergency"
            value="Yes"
            checked={booking.emergency === "Yes"}
            onChange={handleBookingChange}
          />
          Yes
        </label>
        
        <label>
          <input
            type="radio"
            name="emergency"
            value="No"
            checked={booking.emergency === "No"}
            onChange={handleBookingChange}
          />
          No
        </label>

      </div>
    </div>


    <button type="submit" className="booking-submit">
      Request a Plumber
    </button>

  </form>

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
 <footer className="footer">

   <div className="footer-container">

    {/* BRAND */}
    <div className="footer-brand">
      <div className="footer-logo">
        <img src={logo} alt="De-Sofex Global Empire Services" />
        <h3>De-Sofex Global Empire Services</h3>
      </div>

      <p>
        Professional plumbing solutions you can trust.
        From repairs and installations to emergency plumbing,
        we're here to keep your home and business running smoothly.
      </p>
      <div className="footer-socials">

  <a
    href="#"
    aria-label="Instagram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-instagram"></i>
  </a>

  <a
    href="#"
    aria-label="Facebook"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-facebook-f"></i>
  </a>

  <a
    href="#"
    aria-label="WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-whatsapp"></i>
  </a>

  <a
    href="#"
    aria-label="TikTok"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="fa-brands fa-tiktok"></i>
  </a>

</div>
      <a href="#booking" className="footer-button">
        Book a Plumber
      </a>
    </div>


    {/* QUICK LINKS */}
    <div className="footer-column">
      <h4>Quick Links</h4>

      <a href="#home">Home</a>
      <a href="#services">Services</a>
      <a href="#about">About Us</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>


    {/* SERVICES */}
    <div className="footer-column">
      <h4>Our Services</h4>

      <a href="#services">Bathroom Plumbing</a>
      <a href="#services">Pipe & Leak Repair</a>
      <a href="#services">Toilet Services</a>
      <a href="#services">Water Systems</a>
      <a href="#services">Commercial Plumbing</a>
    </div>


    {/* CONTACT */}
    <div className="footer-column footer-contact">
      <h4>Contact Us</h4>

      <p>📞 +234 703 746 5079</p>
      <p>📍 Nigeria</p>
      <p>🕒 Available 24/7 for emergencies</p>

      <a href="tel:+2347037465079" className="footer-call">
        Call a Plumber
      </a>
    </div>

   </div>


   {/* BOTTOM BAR */}
   <div className="footer-bottom">

    <p>
      © 2026 De-Sofex Global Empire Services. All rights reserved.
    </p>

    <div className="footer-bottom-links">
      <a href="#home">Privacy</a>
      <a href="#home">Terms</a>
    </div>

   </div>
 </footer>
    </>
  )
}

export default App