import CategoryCard from '../ui/CategoryCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ConstructionCategories = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const categories = [
    { title: '구조물', imageUrl: '/images/projects/projects_1.jpg', imageAlt: '현대적인 조경 구조물 시공' },
    { title: '데크', imageUrl: '/images/projects/projects_2.jpg', imageAlt: '원목 데크 시공' },
    { title: '산책로', imageUrl: '/images/projects/projects_3.jpg', imageAlt: '자연을 통과하는 아름다운 산책로 조성' },
    { title: '옹벽', imageUrl: '/images/projects/projects_4.jpg', imageAlt: '조경이 어우러진 석재 옹벽 시공' },
  ];

  return (
    <section id="categories" className="section" data-testid="section-categories">
      <div className="container">
        <div 
          ref={titleRef}
          className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title" data-testid="text-categories-title">시공 분야</h2>
        </div>

        <div className="grid categories-grid">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              imageUrl={category.imageUrl}
              imageAlt={category.imageAlt}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionCategories;
