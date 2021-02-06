import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getAuthUser} from './js/actions/authActions'
import AppNavbar from './components/AppNavBar';
import Home from './components/pages/Home'
import Dashboard from './components/pages/Dashboard'
import PrivateRoute from './components/routes/PrivateRoute'

function App() {
  const dispatch = useDispatch();
  const getUser = () => dispatch(getAuthUser())

  useEffect(()=>{
    getUser();
  },[])
  return (
    <BrowserRouter>
      <AppNavbar />
      <switch>
        <Route exact path="/" component={Home}/>
        <PrivateRoute path="/dashboard" component={Dashboard}/>
      </switch>
    </BrowserRouter>


  );
}

export default App;
