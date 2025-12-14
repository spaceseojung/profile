import useScrollAnimation from '../../hooks/useScrollAnimation';

const CEOIntroduction = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const careerItems = [
    '(주)스페이스 서정 대표',
    '정원엘앤디 대표',
    '구미대학교 도시조경디자인과 겸임교수',
    '경북대학교대학원 조경학 박사수료',
    '대구광역시 경관위원회 심의위원',
    '대구광역시 건축위원회 심의위원',
    '한국건설기술인협회 기술 심의위원',
    '건설기술인 조경분야 특급기술인',
    '영진건설기술교육원 외래강사',
    '前)그린조경학원 외래강사',
    '식물보호/종자/조경기사 외 다수',
    '대구꽃박람회 다육아트 작품전시회 외 다수',
  ];

  return (
    <section id="ceo" className="section ceo-section" data-testid="section-ceo">
      <div className="container">
        <h2 className="section-title" data-testid="text-ceo-title">대표이사 주요약력</h2>
        
        <div className="ceo-grid">
          <div 
            ref={imageRef}
            className={`ceo__image-container animate-on-scroll ${imageVisible ? 'visible' : ''}`}
          >
            <img
              src="/images/ceo/ceo_1.jpeg"
              alt="대표이사 이미선"
              className="ceo__image"
              data-testid="img-ceo-portrait"
            />
          </div>

          <div 
            ref={contentRef}
            className={`ceo__content animate-on-scroll ${contentVisible ? 'visible' : ''}`}
          >
            <h3 className="ceo__name" data-testid="text-ceo-name">이미선</h3>
            
            <div className="ceo__career">
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
