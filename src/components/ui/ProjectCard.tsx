import useScrollAnimation from '../../hooks/useScrollAnimation';

interface ProjectCardProps {
  title: string;
  year?: string;
  imageUrl: string;
  imageAlt: string;
  delay?: number;
}

const ProjectCard = ({ title, year, imageUrl, imageAlt, delay = 0 }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`project-card card-hover animate-on-scroll ${isVisible ? 'visible' : ''} ${delay > 0 ? `delay-${delay}` : ''}`}
      data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <img 
        src={imageUrl} 
        alt={imageAlt}
        className="project-card__image"
        data-testid={`img-project-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      <div className="project-card__content">
        <h4 className="project-card__title" data-testid={`text-project-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h4>
        {year && (
          <p className="project-card__year" data-testid={`text-project-year-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {year}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
