import React from 'react';
import bgImage from '../assets/au1.jpg'; 

const About = () => {
  return (
    <div
      className="about-fullscreen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="about-content">
        <h2>Welcome to Heat-Fit</h2>
        <p>
          Where sweat meets passion and goals become reality! We’re not just a gym — we’re your
          fitness family, pushing you beyond limits with expert coaching, killer workouts, and
          unstoppable energy. Whether you’re crushing your first workout or chasing that next
          personal best, we’ve got the tools, the trainers, and the vibe to help you dominate.
          Join us, transform your body, and unlock the best version of YOU. <strong>Ready to rise?
          Let’s get it!</strong>
        </p>

        <div className="contact-info">
          <p><strong>📞 Phone:</strong> +91 12345 54321</p>
          <p>
            <strong>💼 LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/your-profile
            </a>
          </p>
          <p><strong>📧 Email:</strong> heatfit@example.com</p>
          <p><strong>📍 Location:</strong> Kolkata, India</p>
        </div>

        <a
          href="https://github.com/Souritra007"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default About;
