import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HeroSection from './components/sections/HeroSection';
import CEOIntroduction from './components/sections/CEOIntroduction';
import MajorProjects from './components/sections/MajorProjects';
import CompanyIntroduction from './components/sections/CompanyIntroduction';
import DetailedProcesses from './components/sections/DetailedProcesses';
import ConstructionCategories from './components/sections/ConstructionCategories';
import ContactInformation from './components/sections/ContactInformation';

import './styles/tokens.css';
import './styles/base.css';
import './styles/animations.css';
import './styles/components/header.css';
import './styles/components/footer.css';
import './styles/components/cards.css';
import './styles/sections/hero-section.css';
import './styles/sections/ceo-introduction.css';
import './styles/sections/major-projects.css';
import './styles/sections/company-introduction.css';
import './styles/sections/detailed-processes.css';
import './styles/sections/construction-categories.css';
import './styles/sections/contact-information.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <CEOIntroduction />
        <MajorProjects />
        <CompanyIntroduction />
        <DetailedProcesses />
        <ConstructionCategories />
        <ContactInformation />
      </main>
      <Footer />
    </div>
  );
}

export default App;
