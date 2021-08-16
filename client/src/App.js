
import './App.css';
import { Router} from '@reach/router';
import Main from './views/Main';
import Detail from './components/Detail';
import Edit from './components/Edit';

function App() {
  return (
    <div >
       
       <Router>                            
        {/* <Main path="/pets/"/> */}
        <Main default/>
        <Detail path="/pets/:id" />
        <Edit path="/pets/:id/edit"/>
      </Router>  
    </div>
  );
}

export default App;
