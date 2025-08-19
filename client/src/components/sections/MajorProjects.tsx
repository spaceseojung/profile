import ProjectCard from '../ui/ProjectCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const MajorProjects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation();

  const projects = [
    {
      title: '인터불고호텔 버진로드',
      year: "('22)",
      imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '인터불고호텔 버진로드 조경 프로젝트'
    },
    {
      title: '장기동 720M구간 산책로',
      year: "('22)",
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '장기동 720M구간 산책로 조성 프로젝트'
    },
    {
      title: '유림노르웨이숲 석가산',
      year: '',
      imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '유림노르웨이숲 석가산 조경 프로젝트'
    },
    {
      title: '도시농업박람회 미니 도서관',
      year: '',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '도시농업박람회 미니 도서관 조성 프로젝트'
    },
    {
      title: '동촌네거리 녹색쉼터',
      year: "('21)",
      imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '동촌네거리 녹색쉼터 조성 프로젝트'
    },
    {
      title: '환경연수원 무소인테리어',
      year: "('22)",
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '환경연수원 무소인테리어 프로젝트'
    },
    {
      title: '대구마이스터고 옥상 텃밭',
      year: '',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '대구마이스터고 옥상 텃밭 조성 프로젝트'
    },
    {
      title: '청아람 바닥분수',
      year: '',
      imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '청아람 바닥분수 설치 프로젝트'
    },
    {
      title: '신매 어린이공원 물놀이장',
      year: "('20)",
      imageUrl: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '신매 어린이공원 물놀이장 조성 프로젝트'
    },
    {
      title: '만촌동 주택 담장',
      year: "('20)",
      imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300',
      imageAlt: '만촌동 주택 담장 조경 프로젝트'
    }
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
          {projects.map((project, index) => (
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
            <h3 className="projects-logo__title" data-testid="text-company-logo">SPACE SEO JUNG</h3>
            <div className="projects-logo__divider"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProjects;
