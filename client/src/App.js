import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage/Homepage';
import MyTutorPage from './pages/MyTutorPage/MyTutorPage';
import Header from './components/Header/Header';
import StudyPage from './pages/StudyPage/StudyPage';
import PracticeWordsPage from './pages/PracticeWordsPage/PracticeWordsPage';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {

  return (

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/my-profile" />
          <Route path="/my-tutor" element={<MyTutorPage />}/>
          <Route path="/my-tutor/:languageParam/:topicParam" element={<MyTutorPage />} />
          <Route path="/my-tutor/:languageParam" element={<MyTutorPage />}/>
          <Route path="/study" element={<StudyPage />} />
          <Route path="/study/practice-words" element={<PracticeWordsPage />} />
          <Route path="/community" />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
