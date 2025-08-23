import useScrollAnimation from '../../hooks/useScrollAnimation';

const CompanyIntroduction = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  return (
    <section id="company" className="section" data-testid="section-company">
      <div className="container">
        <div className="company-grid">
          <div 
            ref={contentRef}
            className={`company__content animate-on-scroll ${contentVisible ? 'visible' : ''}`}
          >
            <h2 className="company__title" data-testid="text-company-title">회사 소개</h2>

            <div className="company__sections">
              <div className="company__section">
                <h4 className="company__section-title" data-testid="text-philosophy-title">1. 쉬고 싶은 공간에 대한 철학</h4>
                <div className="company__section-content" data-testid="text-philosophy-content">
                  <p>• 바쁜 현대인의 삶 속</p>
                  <p>• 시간을 멈추게 하고픈 공간.</p>
                  <p>• ㈜스페이스서정이 추구하는 공간입니다.</p>
                </div>
              </div>

              <div className="company__section">
                <h4 className="company__section-title" data-testid="text-experience-title">2. 꾸준히, 폭 넓은 조경 경험</h4>
                <div className="company__section-content" data-testid="text-experience-content">
                  <p>• 개인 주택에서 아파트까지. 상업 공간에서 공원 조성까지.</p>
                  <p>• 다육아트에서 모스인테리어, 이끼정원, 수석산 등.</p>
                  <p>• ㈜스페이스서정은 미적·감각적 감각을 바탕으로</p>
                  <p>• 이용자의 요구에 맞는 다양한 공간을 조성하는 회사입니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={imageRef}
            className={`company__image-container animate-on-scroll ${imageVisible ? 'visible' : ''}`}
          >
            <img
              src="/images/company/company_1.jpg"
              alt="자연 조경 작업 배경"
              className="company__main-image"
              data-testid="img-company-main"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntroduction;
