import React, { useEffect, useRef, useState } from 'react';

// Define the type for the props, including the 'delay' prop (default to 0 if not provided)
interface FadeInElementProps {
  children: React.ReactNode;
  delay?: number; // Optional delay prop
}

const FadeInElement: React.FC<FadeInElementProps> = ({ children, delay = 0 }) => {
  const elementRef = useRef<HTMLDivElement | null>(null); // Ref type to HTMLDivElement
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply the delay before showing the element
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.disconnect(); // Disconnect once the element is in view
          }
        });
      },
      { threshold: 0.25 } // Element will trigger when 25% of it is in the viewport
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [delay]); // Re-run the effect if delay prop changes

  return (
    <div
      ref={elementRef}
      className={`fade-in ${isVisible ? 'visible' : ''}`}
    >
      {children}  {/* Displaying the content passed as children */}
    </div>
  );
};

export default FadeInElement;
