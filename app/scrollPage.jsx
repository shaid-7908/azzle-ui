import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const sections = [
  { id: 1, title: "Section 1", content: "Content for section 1" },
  { id: 2, title: "Section 2", content: "Content for section 2" },
  { id: 3, title: "Section 3", content: "Content for section 3" },
];

const ScrollPage = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const handleInViewChange = (inView, id) => {
    if (inView) {
      setActiveSection(id);
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left Side */}
      <div
        style={{
          flex: 1,
          position: "sticky",
          top: 0,
          height: "100vh",
          padding: "20px",
        }}
      >
        {sections.map((section) => (
          <div
            key={section.id}
            style={{
              opacity: section.id === activeSection ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              position: section.id === activeSection ? "relative" : "absolute",
            }}
          >
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>

      {/* Right Side */}
      <div style={{ flex: 2, overflowY: "scroll", height: "100vh" }}>
        {sections.map((section) => (
          <Section
            key={section.id}
            id={section.id}
            onInViewChange={handleInViewChange}
            title={section.title}
          />
        ))}
      </div>
    </div>
  );
};

const Section = ({ id, title, onInViewChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust this value to trigger the effect earlier or later
  });

  React.useEffect(() => {
    onInViewChange(inView, id);
  }, [inView, id, onInViewChange]);

  return (
    <div
      ref={ref}
      style={{
        height: "100vh",
        padding: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <h2>{title}</h2>
      <p>This is the content of {title}.</p>
    </div>
  );
};

export default ScrollPage;
