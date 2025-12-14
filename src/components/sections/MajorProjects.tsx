import ProjectCard from '../ui/ProjectCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const MajorProjects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation();

  const projects = [
    {
      title: '대구마이스터고 옥상 텃밭',
      year: "",
      imageUrl: '/images/experience/EX1.png',
      imageAlt: '대구마이스터고 옥상 텃밭 조성 프로젝트'
    },
    {
      title: '도시농업박람회 미니도서관',
      year: "",
      imageUrl: '/images/experience/EX2.png',
      imageAlt: '도시농업박람회 미니도서관 조성 프로젝트'
    },
    {
      title: '상도코아루 센트럴하임',
      year: '',
      imageUrl: '/images/experience/EX3.png',
      imageAlt: '상도코아루 센트럴하임 조경 프로젝트'
    },
    {
      title: '유림노르웨이숲 석가산',
      year: '',
      imageUrl: '/images/experience/EX4.png',
      imageAlt: '유림노르웨이숲 석가산 조경 프로젝트'
    },
    {
      title: '신매 어린이공원 물놀이장',
      year: "",
      imageUrl: '/images/experience/EX5.png',
      imageAlt: '신매 어린이공원 물놀이장 조성 프로젝트'
    },
    {
      title: '만촌동 개인주택 담장',
      year: "",
      imageUrl: '/images/experience/EX6.png',
      imageAlt: '만촌동 개인주택 담장 조경 프로젝트'
    },
    {
      title: '계명문화대 개교60주년기념 광장개선',
      year: "",
      imageUrl: '/images/experience/EX12.png',
      imageAlt: '계명문화대 개교60주년기념 광장개선 프로젝트'
    },
    {
      title: '동촌네거리 녹색쉼터 조성',
      year: '',
      imageUrl: '/images/experience/EX7.png',
      imageAlt: '동촌네거리 녹색쉼터 조성 프로젝트'
    },
    {
      title: '경북환경연수원 모스인테리어',
      year: '',
      imageUrl: '/images/experience/EX8.png',
      imageAlt: '경북환경연수원 모스인테리어 프로젝트'
    },
    {
      title: '장기동 완충녹지 720m 산책로',
      year: "",
      imageUrl: '/images/experience/EX9.png',
      imageAlt: '장기동 완충녹지 720m 산책로 조성 프로젝트'
    },
    {
      title: '공항교 꽃길 조성 공사',
      year: "",
      imageUrl: '/images/experience/EX10.png',
      imageAlt: '공항교 꽃길 조성 공사 프로젝트'
    },
    {
      title: '인터불고엑스코 그랑파티오 버진로드',
      year: "",
      imageUrl: '/images/experience/EX11.png',
      imageAlt: '인터불고엑스코 그랑파티오 버진로드 조경 프로젝트'
    },
  ];

  return (
    <section id="projects" className="section section--gray" data-testid="section-projects">
      <div className="container">
        <div 
          ref={titleRef}
          className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title" data-testid="text-projects-title">주요 시공 경력</h2>
        </div>

        <div className="grid projects-grid">
          {[...projects].reverse().map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              year={project.year}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              delay={index % 4 + 1}
            />
          ))}
        </div>

        <div 
          ref={logoRef}
          className={`projects-logo animate-on-scroll ${logoVisible ? 'visible' : ''}`}
        >
          <div className="projects-logo__container" data-testid="container-company-logo">
            <h3 className="projects-logo__title" data-testid="text-company-logo">
              <span className="projects-logo__title--secondary">SPACE </span>
              <span className="projects-logo__title--primary">SEOJUNG. CO</span>
            </h3>
            <div className="projects-logo__divider"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProjects;
