import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import Header from './components/header/header';

import './App.scss';

function App() {
  return (

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/my-profile" />
          <Route path="/my-tutor" />
          <Route path="/my-tutor/conversation/:id" />
          <Route path="/study-space" />
          <Route path="/community" />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
