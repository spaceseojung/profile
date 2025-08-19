import useScrollAnimation from '../../hooks/useScrollAnimation';

const ContactInformation = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardRef1, isVisible: cardVisible1 } = useScrollAnimation();
  const { ref: cardRef2, isVisible: cardVisible2 } = useScrollAnimation();

  return (
    <section id="contact" className="section section--gray" data-testid="section-contact">
      <div className="container">
        <div 
          ref={titleRef}
          className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title" data-testid="text-contact-title">회사 연락처 및 정보</h2>
        </div>

        <div className="contact-grid">
          {/* Business Card Front */}
          <div 
            ref={cardRef1}
            className={`business-card business-card--front animate-on-scroll ${cardVisible1 ? 'visible' : ''}`}
            data-testid="card-business-front"
          >
            <h3 className="business-card__title" data-testid="text-business-company-name">㈜스페이스서정</h3>
            <div className="business-card__divider"></div>
            <div className="business-card__info">
              <p className="business-card__name" data-testid="text-business-ceo-name">대표이사 이미선</p>
              <p className="business-card__company" data-testid="text-business-company-english">SPACE SEO JUNG Co., Ltd.</p>
            </div>
          </div>

          {/* Business Card Back */}
          <div 
            ref={cardRef2}
            className={`business-card animate-on-scroll ${cardVisible2 ? 'visible' : ''}`}
            data-testid="card-business-back"
          >
            <h4 className="business-card__section-title" data-testid="text-contact-section-title">연락처</h4>
            <div className="business-card__contact-list">
              <div className="business-card__contact-item" data-testid="text-contact-phone">
                <div className="business-card__contact-dot"></div>
                <span className="business-card__contact-text">전화: 053-XXX-XXXX</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-address">
                <div className="business-card__contact-dot"></div>
                <span className="business-card__contact-text">주소: 대구광역시 OO구 OO로 XXX번길 XX</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <div className="business-card__contact-dot"></div>
                <span className="business-card__contact-text">이메일: info@spaceseojeong.co.kr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
