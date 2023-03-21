import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Every from './component/Every';
import NavBar from './component/NavBar';
import Shop from "./component/Shop";
import Download from './component/Download';
import ExistingCust from './component/ExistingCust';
import FootPrint from './component/FootPrint';
import Footer from './component/Footer';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Product from './component/Product';
import Background from './component/Background';
import Error from './component/Error';
import Dashboard from './component/Dashboard';
import Home from './component/Home';
import Contact from './component/Contact';
import Forget from './component/Forget';
import Hist from './component/Hist';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/navbar' element={<NavBar />}></Route>
        <Route path='/Background' element={<Background />}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/download' element={<Download />}></Route>
        <Route path='/existingCust' element={<ExistingCust />}></Route>
        <Route path='/footPrint' element={<FootPrint />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/Every' element={<Every />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/product' element={<Product />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Forget' element={<Forget />} />
        <Route path='/hist' element={<Hist />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
