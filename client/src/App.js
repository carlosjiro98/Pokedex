import './App.css';
//components
import Landing from './components/Landing/Landing';
import Create from './components/Create/Create';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav'
//Utils
import { Switch, Route } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMain, getType } from './store/actions'

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{  
    console.log("Me inicio")
    dispatch(getMain());
    dispatch(getType());
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <div className="App">      
      <Switch>
        <Route path='/home'>
          <Nav/>
          <Route path='/home/create'>
            <Create/>
          </Route>

          <Route path='/home/detail'>
            <Detail/>
          </Route>

          <Route path='/home'exact>
            <Home/>
          </Route>
        </Route>

        <Route path='/'>
          <Landing/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
