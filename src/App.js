import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './page/landingpage/landingpage';
import Blankplayer from './page/blankplayer/blankplayer';
import NewPlayer from './page/newplayer/newplayer';
import ConFirmPage from './page/confirmStart/confirmStart';
import QuestionPage from './page/selectQuestion/selectionQuestion';
import LoadingPage from './page/loadingPage/loadingPage'
import AnswerPage from './page/answerpage/answerpage';
import FinalResultPage from './page/finalResultPage/finalResult';

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
        <Route path='/answerPage' element={<AnswerPage/>}/>
        <Route path='/finalresultpage' element={<FinalResultPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
