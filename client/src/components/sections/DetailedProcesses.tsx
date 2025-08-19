import ProcessCard from '../ui/ProcessCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const DetailedProcesses = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const processes = [
    {
      title: '레이저 가공',
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      imageAlt: '레이저 가공 작업 과정'
    },
    {
      title: '밴딩',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      imageAlt: '금속 밴딩 작업 과정'
    },
    {
      title: '분체도장',
      imageUrl: 'https://pixabay.com/get/gee2677522a941e0dd6766adc671d285bbd5dbc087f43d36e7b1196043e8de46f2911b222860c26f103ee84070a975a3cf7ed4aceb721f38856abdeade66469dc_1280.jpg',
      imageAlt: '분체도장 작업 과정'
    },
    {
      title: '용접',
      imageUrl: 'https://pixabay.com/get/g7556e7d1f003251069e16f8c8f90847eebd2552e7fb0e28b1088d3437d0e2e70997d796d945a3d9e0e1544cbad51995533cab33aaca0707fbe521f488d9d122f_1280.jpg',
      imageAlt: '전문 용접 작업 과정'
    },
    {
      title: '제작',
      imageUrl: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      imageAlt: '제작 및 조립 과정'
    },
    {
      title: '설치',
      imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      imageAlt: '현장 설치 작업 과정'
    },
    {
      title: '수목 식재',
      imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
      imageAlt: '수목 식재 작업 과정'
    },
    {
      title: '초화류 식재',
      imageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&h=150',
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
