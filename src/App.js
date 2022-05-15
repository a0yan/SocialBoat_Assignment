import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Results from './Components/Results/Results';
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
        <Route path='/' element={<Results/>}/>
        </Routes>
    </div>
  );
}

export default App;
