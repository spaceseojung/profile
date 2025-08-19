import useScrollAnimation from '../../hooks/useScrollAnimation';

const CEOIntroduction = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const careerItems = [
    '㈜스페이스서정 대표이사 / 정원앤엔터 대표',
    '구미대학교 도시조경디자인과 겸임교수',
    '경북대학교 대학원 조경학 박사수료',
    '前 그린조경학원 외래 강사',
    '한국건설기술인협회 특급기술인 (식물보호/종자/조경기술)',
    '제2회 도시농업박람회 제안설계·시공 (다육아트작가협동)',
    '대구꽃박람회 다육아트 작품 전시'
  ];

  return (
    <section id="ceo" className="section ceo-section" data-testid="section-ceo">
      <div className="container">
        <div className="ceo-grid">
          <div 
            ref={imageRef}
            className={`ceo__image-container animate-on-scroll ${imageVisible ? 'visible' : ''}`}
          >
            <img 
              src="https://pixabay.com/get/gf510880a129f2d412eed273b16f62d6bba4a412fa7eeb1692394ce4f203911cd1e95d13e948e476b4d6fa6a096105ddb0e4551f3bc9fccad4aebdaf141bb31e2_1280.jpg"
              alt="대표이사 이미선"
              className="ceo__image"
              data-testid="img-ceo-portrait"
            />
          </div>

          <div 
            ref={contentRef}
            className={`ceo__content animate-on-scroll ${contentVisible ? 'visible' : ''}`}
          >
            <h2 className="ceo__title" data-testid="text-ceo-title">대표이사 소개</h2>
            <h3 className="ceo__name" data-testid="text-ceo-name">이미선</h3>
            
            <div className="ceo__career">
              <h4 className="ceo__career-title">주요 약력</h4>
              <ul className="ceo__career-list">
                {careerItems.map((item, index) => (
                  <li key={index} className="ceo__career-item" data-testid={`text-career-${index}`}>
                    <div className="ceo__career-dot"></div>
                    <p className="ceo__career-text">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOIntroduction;
