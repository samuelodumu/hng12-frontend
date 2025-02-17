import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/Events';
import MyTickets from './pages/MyTickets';
import AboutProject from './pages/AboutProject';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Events />}
        />
        <Route
          path='/my-tickets'
          element={<MyTickets />}
        />
        <Route
          path='/about'
          element={<AboutProject />}
        />
      </Routes>
    </Router>
  );
}

export default App;
