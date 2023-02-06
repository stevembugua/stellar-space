
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import HomePage from '../homepage/HomePage';
import Map from '../AsteroidsMap/map';
import Login from '../FirebaseConfig/Login';
import SignUp from '../FirebaseConfig/SignUp';
import PrivateRoute from '../PrivateRoutes/PrivateRoutes';
import './App.css';
import NearEarthObjects from '../neo/NearEarthObjects';
import MarsRoversPhotos from '../mars-rovers-photos/MarsRoversPhotos';
import AboutMars from '../weather/AboutMars';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/map' element={<Map/>} />
          <Route path='/near-earth-objects' element={<NearEarthObjects/>} />
          <Route path='/mars-rovers-photos' element={<MarsRoversPhotos/>} />
          <Route path='/mars-weather' element={<AboutMars/>} />
        </Route>
        <Route path='/homepage' element={<HomePage/>} />
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
