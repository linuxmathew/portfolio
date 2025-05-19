import React from "react";
import "./testimonialComponent.css";

const TestimonialComponent = ({ item }) => {
  return (
    <div className="testimonial-card" key={item.name}>
      <blockquote>
        <div aria-hidden="true" className="testimonial-overlay"></div>
        <span className="testimonial-quote">{item.quote}</span>
        <div className="testimonial-info">
          <span className="testimonial-name">{item.name}</span>
          <span className="testimonial-title">{item.title}</span>
        </div>
      </blockquote>
    </div>
  );
};

export default TestimonialComponent;
