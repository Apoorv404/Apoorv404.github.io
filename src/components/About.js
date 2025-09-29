export default function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2 className="section-title text-center mb-5">About Me</h2>

      <p>
        I am a final Year Computer Science and Engineering (AI & ML) student passionate about
        solving problems with technology. I have worked on projects involving
        quantum machine learning, automation bots, and APIs.
        <br /><br />
        I enjoy learning new technologies and applying them to build full stack
        applications. In my free time, I like reading science novels, playing
        harmonium, and exploring mobile games.
      </p>

      {/* Education Section */}
      <h3 className="mt-5">Education</h3>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>B.Tech in Computer Science (AI & ML)</h4>
            <span className="timeline-date">2022 – 2026</span>
            <p>Rajarambapu Institute of Technology, Islampur</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Higher Secondary (PCM)</h4>
            <span className="timeline-date">2020 – 2022</span>
            <p>Shri Hanumantrao Chate Jr. College of Science, Satara</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Secondary School</h4>
            <span className="timeline-date">2014 – 2020</span>
            <p>Maharaja Sayajirao Vidyalaya, Satara</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <h3 className="mt-5">Achievements</h3>
      <ul className="skills">
        <li>5-Star Badge on HackerRank</li>
        <li>Research Paper on Quantum ML (2025)</li>
        <li>Certified Python Developer</li>
        <li>Elite Badge in NPTEL Course</li>
      </ul>

      {/* Hobbies Section */}
      <h3 className="mt-5">Hobbies</h3>
      <ul className="skills">
        <li>Reading Science Novels</li>
        <li>Playing Harmonium</li>
        <li>Playing Mobile Games</li>
        <li>Watching Tech Videos</li>
        <li>Exploring New Technologies</li>
      </ul>
    </section>
  );
}
