import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './page/landingpage/landingpage';
import Blankplayer from './page/blankplayer/blankplayer';
import NewPlayer from './page/newplayer/newplayer';
import ConFirmPage from './page/confirmStart/confirmStart';
import QuestionPage from './page/selectQuestion/selectionQuestion';
import LoadingPage from './page/loadingPage/loadingPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/blankPlayer' element={<Blankplayer/>}/>
        <Route path='/newPlayer' element={<NewPlayer/>}/>
        <Route path='/confirmStart' element={<ConFirmPage/>}/>
        <Route path='/selectQuestion' element={<QuestionPage/>}/>
        <Route path='/loadingPage' element={<LoadingPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
