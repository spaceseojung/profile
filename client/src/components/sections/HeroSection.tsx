import { useEffect, useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    { url: '/images/grid/grid_2.jpeg', alt: '그리드 이미지 1' },
    { url: '/images/grid/grid_1.jpg', alt: '그리드 이미지 2' },
    { url: '/images/grid/grid_3.jpg', alt: '그리드 이미지 3' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero-section" data-testid="section-hero">
      <div className="hero-carousel">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.url})` }}
            data-testid={`hero-slide-${index}`}
          >
            <div className="hero-slide__overlay"></div>
          </div>
        ))}
      </div>
      
      <div className="hero-content">
        <div className="container">
          <div 
            ref={ref}
            className={`hero-text animate-on-scroll ${isVisible ? 'visible' : ''}`}
          >
            <h1 className="hero-title" data-testid="text-hero-title">
                공간에 가치를 더하다.<br />
                <span className="hero-title__highlight">㈜스페이스 서정</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`hero-indicator ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            data-testid={`hero-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;