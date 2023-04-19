import './App.css';
import {Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import LogReg from './components/LogReg';
import AllQuotes from './components/AllQuotes';
import EditQuote from './components/EditQuote';
import AddQuote from './components/AddQuote';
import OneQuote from './components/OneQuote';
import ByType from './components/ByType';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LogReg/>} />
          <Route path="/quote" element={<AddQuote/>} />
          <Route path= "/quotes" element={<AllQuotes/>} />
          <Route path='/quotes/:id' element={<EditQuote/>} />
          <Route path="/quoted/:type" element={<ByType/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/quote/:id" element={<OneQuote/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
