import { Route } from 'react-router';
import './App.css';
import Macha from './components/friend/macha.component';
import HomePage from './pages/homepage/home.page';

function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage}/>
      <Route path='/dosth' component={Macha}/>
    </div>
  );
}

export default App;
