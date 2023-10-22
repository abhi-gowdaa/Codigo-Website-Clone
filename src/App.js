
import './App.css';
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dis from './components/Main/Dis';
import Anim from './components/Main/Anim';


function App() {
  return (
    <div className="App">
<Header/>
   <Dis/>
    <Anim/>
    </div>
  );
}

export default App;
