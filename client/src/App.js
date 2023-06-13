import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Greatness starts here.</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/my-profile" />
          <Route path="/my-tutor" />
          <Route path="/my-tutor/conversation/:id" />
          <Route path="/study-space" />
          <Route path="/community" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
