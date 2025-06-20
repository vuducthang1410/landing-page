import './App.css'
import { LandingPageDesktop } from './screens/LandingPageDesktop';
import { LandingPageMobile } from './screens/LandingPageMobile';

function App() {
  return (
    <div className="app w-screen">
      <div className="hidden md:block">
        <LandingPageDesktop/>
      </div>
      <div className="block md:hidden">
        <LandingPageMobile/>
      </div>
    </div>
  );
}

export default App
