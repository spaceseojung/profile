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
            <h3 className="business-card__title" data-testid="text-business-company-name">㈜스페이스 서정</h3>
            <div className="business-card__divider"></div>
            <div className="business-card__info">
              <p className="business-card__name" data-testid="text-business-ceo-name">대표이사 이미선</p>
              <p className="business-card__company" data-testid="text-business-company-english">SPACE SEOJUNG - 대표이사</p>
            </div>
          </div>

          {/* Business Card Back */}
          <div
            ref={cardRef2}
            className={`business-card animate-on-scroll ${cardVisible2 ? 'visible' : ''}`}
            data-testid="card-business-back"
          >
            <div className="business-card__contact-list">
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-text">M</span>
                <span className="business-card__contact-text">010. 8526. 0851</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-text">T</span>
                <span className="business-card__contact-text">035. 763. 0851</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-text">F</span>
                <span className="business-card__contact-text">0504. 201. 0742</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-text">E</span>
                <span className="business-card__contact-text">lms@spaceseojung.kr</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-address">
                <span className="business-card__contact-text">AD</span>
                <span className="business-card__contact-text">대구광역시 달성군 가창면 가창로 1124</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-text">ST</span>
                <span className="business-card__contact-text">대구광역시 수성구 가천동 556</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
