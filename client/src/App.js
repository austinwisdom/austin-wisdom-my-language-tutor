import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import MyTutorPage from './pages/MyTutorPage/MyTutorPage';
import Header from './components/Header/Header';

import './App.scss';

function App() {
  return (

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/my-profile" />
          <Route path="/my-tutor" element={<MyTutorPage />}/>
          <Route path="/my-tutor/:language" element={<MyTutorPage />}/>
          <Route path="/my-tutor/:language/:topic" element={<MyTutorPage />} />
          <Route path="/study-space" />
          <Route path="/community" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
