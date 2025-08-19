import CategoryCard from '../ui/CategoryCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ConstructionCategories = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const categories = [
    {
      title: '구조물',
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '현대적인 조경 구조물 시공'
    },
    {
      title: '데크',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '원목 데크 시공'
    },
    {
      title: '산책로',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '자연을 통과하는 아름다운 산책로 조성'
    },
    {
      title: '옹벽',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '조경이 어우러진 석재 옹벽 시공'
    }
  ];

  return (
    <section id="categories" className="section" data-testid="section-categories">
      <div className="container">
        <div 
          ref={titleRef}
          className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title" data-testid="text-categories-title">시공</h2>
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
