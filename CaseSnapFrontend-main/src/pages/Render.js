import React, { useEffect } from "react";
import "../style.css";
import "../styles/render.css";

export const Render = () => {
  useEffect(() => {
    document.title = "Home - CaseSnap AI"; // Set the page title dynamically
  }, []);
  return (
    <div className="content">
      <div className="main">
        <div className="navbar">
          <a href="/">
            <div className="logo"><p>CaseSnap AI</p></div>
          </a>
          <div className="left">
            <a href="/">
              <div className="logo aboutus"><p>About Us</p></div>
            </a>
            <a href="/">
              <div className="logo whatwedo"><p>What We Do</p></div>
            </a>
            <a href="/">
              <div className="logo getinvolved"><p>Get Involved</p></div>
            </a>
            <a href="/">
              <div className="logo knowledge"><p>Knowledge Corner</p></div>
            </a>
          </div>
        </div>
        <div className="mainContent">
          <div className="content-item content-item1">Streamline Legal Dispute</div>
          <div className="content-item content-item2">Serving Humanity, Serving Justice</div>
          <div className="content-item content-item3">CaseSnap Society</div>
          <div className="content-item content-item4">
            Compassion drives us. Together we serve, uplift, enhance courtroom efficiency
          </div>
          <div className="content-item content-item5">and support fairer, quicker responses</div>
          <a   href="http://localhost:5000/download/chat_log.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                download>
          <button class="joinus download">
          Download Chat Log PDF
        </button>
          </a>
          
        </div>
        

       
      </div>
    </div>
  );
};



