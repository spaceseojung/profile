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

        <div className="contact-grid" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {/* Business Card Back */}
          <div
            ref={cardRef2}
            className={`business-card animate-on-scroll ${cardVisible2 ? 'visible' : ''}`}
            data-testid="card-business-back"
          >
            <div className="business-card__contact-list">
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-label">M</span>
                <span className="business-card__contact-text">010. 8526. 0851</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-label">T</span>
                <span className="business-card__contact-text">053. 763. 0851</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-label">F</span>
                <span className="business-card__contact-text">0504. 201. 0742</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-label">E</span>
                <span className="business-card__contact-text">lms@spaceseojung.kr</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-label">HP</span>
                <span className="business-card__contact-text">www.spaceseojung.kr</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-address">
                <span className="business-card__contact-label">AD</span>
                <span className="business-card__contact-text">대구광역시 달성군 가창면 가창로 1124, 3층</span>
              </div>
              <div className="business-card__contact-item" data-testid="text-contact-email">
                <span className="business-card__contact-label">ST</span>
                <span className="business-card__contact-text">대구광역시 수성구 고모로35 (가천동)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
