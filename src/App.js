import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Kondepu Sirisha</h1>
      <p style={{ fontSize: "1.2rem" }}>Aspiring [Frontend Developer, AI/ML Engineer] | [Web Development, AI/ML] Enthusiast</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>About Me</h2>
      <p>I am a B.Tech Student passionate about AI/ML and Web Development, currently learning React and building projects to strengthen my skills.
      </p>
    </div>
  );
}

function Projects() {
  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Projects</h2>
      <ul>
      <li>AI-Based Theft Detection - Detects suspicious activities using computer vision.</li>
      <li>Translingua - AI based  Multilanguage translator</li>
      <li>React Portfolio - Personal resume portfolio using React.</li>
    </ul>

    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: "1rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Contact</h2>
      <p>Email:kondepusireesha9@gmail.com</p>
      <p>LinkedIn:https://www.linkedin.com/in/kondepu-sirisha-4b6970306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app</p>
      <p>GitHub:https://github.com/KondepuSirisha8</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: "#3b82f6", padding: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to="/projects" style={{ color: "white", textDecoration: "none" }}>Projects</Link>
        <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
