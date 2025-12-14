import CategoryCard from '../ui/CategoryCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const ConstructionCategories = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const categories = [
    { title: '구조물', imageUrl: '/images/projects/projects_1.jpg', imageAlt: '구조물 시공' },
    { title: '데크', imageUrl: '/images/projects/projects_2.jpg', imageAlt: '테크 시공' },
    { title: '산책로', imageUrl: '/images/projects/projects_3.jpg', imageAlt: '산책로 조성' },
    { title: '옹벽', imageUrl: '/images/projects/projects_4.jpg', imageAlt: '옹벽 시공' },
    { title: '분수시설', imageUrl: '/images/projects/projects_5.jpg', imageAlt: '놀이시설 설치' },
    { title: '놀이시설물', imageUrl: '/images/projects/projects_6.jpg', imageAlt: '녹지식생 조성' },
    { title: '물놀이장', imageUrl: '/images/projects/projects_7.jpg', imageAlt: '물놀이장 조성' },
    { title: '조형물', imageUrl: '/images/projects/projects_8.jpg', imageAlt: '조형물 설치' },
    { title: '편책', imageUrl: '/images/projects/projects_9.jpg', imageAlt: '편석 시공' },
    { title: '포장', imageUrl: '/images/projects/projects_10.jpg', imageAlt: '포장 시공' },
    { title: '조적', imageUrl: '/images/projects/projects_11.jpg', imageAlt: '조각 작업' },
    { title: '식재', imageUrl: '/images/projects/projects_12.jpg', imageAlt: '석재 시공' },
    { title: '석가산', imageUrl: '/images/projects/projects_13.jpg', imageAlt: '시설 및 기타 시공' },
    { title: '이끼정원', imageUrl: '/images/projects/projects_14.jpg', imageAlt: '시공 작업' },
    { title: '도시농업', imageUrl: '/images/projects/projects_15.jpg', imageAlt: '도시농업 조성' },
    { title: '모스인테리어', imageUrl: '/images/projects/projects_16.jpg', imageAlt: '모스인테리어 시공' },
    { title: '가로환경', imageUrl: '/images/projects/projects_17.jpg', imageAlt: '기로화장 시공' },
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
