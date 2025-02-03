import Image from 'next/image'; 
import me from '@/assets/images/me.png';

export const AboutSection = () => {
  const skills = ['Golang', 'Java', 'AWS', 'Terraform', 'Docker', 'React'];
  return (
    <section id="about" className="py-40 md:py-44 lg:py-60 relative z-0 overflow-hidden about-section">
      <div className="container">
        <h1 className="numbered-heading">About ME</h1>
        {/* Responsive grid layout for text and image */}
        <div className="mt-7 about-inner">
          {/* Left: Text & Skills */}
          <div className="about-text">
            <p className="p-1">
              Hello! My name is Abhishek and I grew up during a time of rapid technological advancement, 
              witnessing firsthand how these changes shaped behaviors and opportunities. This induced
              a great interest in technology, particularly in computer software.
            </p>
            <p className="p-1">
              Fast-forward to today, I’ve worked with small businesses, leveraging software 
              to help their growth. Free and Open Source Software (FOSS) always piques my curiosity,
              inspiring me build and contribute to various projects. I currently contribute 
              at <a href="https://www.siemens.com/global/en/products/buildings/smart-buildings.html" target="_blank" rel="noopener noreferrer" className="text-[#64FFDA]">Siemens</a> focusing on Digital Twin technology and Building X onboarding.
            </p>
            {/* <p className="p-1">
              I enjoy taking on challenges and consistently push myself in all aspects of life. Most 
              of my time is spent building things, geeking out with computers, listening to music, 
              reading. I also play football, grapple, run, cycle and lift dead heavy weights 
              regularly. Along the way, I study human body to better recover/prevent injuries and 
              incorporate healthy-lifestyle.
            </p> */}
            <p className="p-1">Here are a few technologies I’ve been working with recently:</p>
            <ul className="skills-list">
              {skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
          {/* Right: Image */}
          <div className="styled-pic">
            <div className="wrapper">
              <Image src={me} alt="My profile picture" width={300} height={300} className="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
