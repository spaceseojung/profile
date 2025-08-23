import ProcessCard from '../ui/ProcessCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const DetailedProcesses = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const processes = [
    {
      title: '레이저 가공',
  imageUrl: '/images/processes/processes_1.jpg',
      imageAlt: '레이저 가공 작업 과정'
    },
    {
      title: '밴딩',
  imageUrl: '/images/processes/processes_2.jpg',
      imageAlt: '금속 밴딩 작업 과정'
    },
    {
      title: '분체도장',
  imageUrl: '/images/processes/processes_3.jpg',
      imageAlt: '분체도장 작업 과정'
    },
    {
      title: '용접',
  imageUrl: '/images/processes/processes_4.jpg',
      imageAlt: '전문 용접 작업 과정'
    },
    {
      title: '제작',
  imageUrl: '/images/processes/processes_5.jpg',
      imageAlt: '제작 및 조립 과정'
    },
    {
      title: '설치',
  imageUrl: '/images/processes/processes_6.jpg',
      imageAlt: '현장 설치 작업 과정'
    },
    {
      title: '수목 식재',
  imageUrl: '/images/processes/processes_7.jpg',
      imageAlt: '수목 식재 작업 과정'
    },
    {
      title: '초화류 식재',
  imageUrl: '/images/processes/processes_8.jpg',
      imageAlt: '초화류 식재 작업 과정'
    }
  ];

  return (
    <section id="processes" className="section section--gray" data-testid="section-processes">
      <div className="container">
        <div 
          ref={titleRef}
          className={`animate-on-scroll ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="section-title" data-testid="text-processes-title">㈜스페이스 서정이 하는 일</h2>
        </div>

        <div className="grid processes-grid">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              title={process.title}
              imageUrl={process.imageUrl}
              imageAlt={process.imageAlt}
              delay={index % 4 + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedProcesses;
