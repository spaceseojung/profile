import useScrollAnimation from '../../hooks/useScrollAnimation';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  delay?: number;
}

const CategoryCard = ({ title, imageUrl, imageAlt, delay = 0 }: CategoryCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`category-card card-hover animate-on-scroll ${isVisible ? 'visible' : ''} ${delay > 0 ? `delay-${delay}` : ''}`}
      data-testid={`card-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="category-card__image"
        data-testid={`img-category-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <div className="category-card__content">
        <h4 className="category-card__title" data-testid={`text-category-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h4>
      </div>
    </div>
  );
};

export default CategoryCard;
