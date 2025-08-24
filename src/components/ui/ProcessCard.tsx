import useScrollAnimation from '../../hooks/useScrollAnimation';

interface ProcessCardProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  delay?: number;
}

const ProcessCard = ({ title, imageUrl, imageAlt, delay = 0 }: ProcessCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`process-card card-hover animate-on-scroll ${isVisible ? 'visible' : ''} ${delay > 0 ? `delay-${delay}` : ''}`}
      data-testid={`card-process-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="process-card__image"
        data-testid={`img-process-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <h4 className="process-card__title" data-testid={`text-process-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
        {title}
      </h4>
    </div>
  );
};

export default ProcessCard;
