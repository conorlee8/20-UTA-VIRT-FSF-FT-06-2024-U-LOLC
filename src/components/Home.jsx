import React from 'react';
import '../App.css';

function Home() {
  return (
    <div className="content-container">
      <header>
        <h1>Welcome to Conor Lee's Portfolio</h1>
      </header>

      <div className="profile-section">
        <img src="public/assets/images/CONOR_LEE_HEADSHOT-removebg-preview.png" alt="Conor Lee" className="profile-image" />
        <h2>Hi! I'm Conor Lee, a passionate web developer with a strong foundation in React, JavaScript, and front-end development.</h2>
        <p>
          I specialize in creating dynamic, responsive, and user-friendly web applications. My expertise includes working with modern frameworks like React, ensuring seamless user experiences and maintaining clean, efficient code.
        </p>
        <p>
          Whether you're looking for a developer to bring your ideas to life or need someone who can optimize your existing applications, I'm here to help. Explore my portfolio to see some of the projects I've worked on, and feel free to get in touch if you'd like to collaborate!
        </p>
      </div>

      <div className="quick-links-section">
        <h2>Quick Links</h2>
        <div className="video-links">
          <div className="video-container">
            <video loop muted autoPlay>
              <source src="/src/assets/videos/854274-hd_1280_720_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-container">
            <video loop muted autoPlay>
              <source src="/src/assets/videos/854233-hd_1280_720_29fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-container">
            <video loop muted autoPlay>
              <source src="/src/assets/videos/854223-hd_1920_1080_30fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
