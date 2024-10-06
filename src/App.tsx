import { BrowserRouter as Router } from 'react-router-dom';
import Clock from './components/clock/Clock';
import './App.css';
import Navigationbar from './components/navbar/Navigationbar';
import Footer from './components/footer/Footer';

import useLocalTime from './hooks/useLocalTime';

const App: React.FC = () => {
  // Custom hook to get the local time
  const { hours: localHours, minutes: localMinutes, seconds: localSeconds } = useLocalTime();

  return (
    <Router>
      <div className='app'>
        <Navigationbar />
        <div className='content'>
          <h1 className='content__title'>Current Time</h1>
          <Clock hours={localHours} minutes={localMinutes} seconds={localSeconds} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
