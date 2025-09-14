import { useEffect, useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    { url: '/images/grid/grid_2.jpg', alt: '그리드 이미지 1' },
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
        <span className="hero-title__slow" style={{ fontWeight: 600 }}>느림 공간 : </span>徐庭
        <span className="hero-title__dimmed mobile-break" style={{ color: "#e0e0e0" }}>의 가치를 더합니다.</span>
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