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
import UserInterface from './component/UserInterface';
import Signin from './component/Signin';
import Product from './component/Product';
import Background from './component/Background';
import Error from './component/Error';
function App() {
  return (
    <>
     <NavBar/>
    <Background/>
    <Every/>
       <Shop/>
       <Every/>
       <Download/>
       
       <ExistingCust/>
       {/* <UserInterface/> */}
       <Product/>
       <FootPrint/>
        <Every/>
         <Footer/> 
        {/* <Error/>   */}
      <Routes>
        {/* <Route path='/' element={<Ho />} /> */}
         {/* <Route path='/navbar' element={<NavBar />}></Route>
        <Route path='/Background' element={<Background/>}></Route>
        <Route path='/shop' element={<Shop />}></Route>
        <Route path='/download' element={<Download />}></Route>
        <Route path='/existingCust' element={<ExistingCust />}></Route>
        <Route path='/footPrint' element={<FootPrint />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/signup' element={<Signup />} /> */}
        <Route path='/signin' element={<Signin />} />
        {/* <Route path='/userinterface' element={<UserInterface />} />  */}
        <Route path='/Error' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;