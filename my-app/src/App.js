import React, { Component } from 'react';
        import { Route, Routes, Navigate} from 'react-router-dom';
        import Navbar from './component/Navbar';
        import Footer from './component/Footer';
        import LandingPage from './component/LandingPage';
        import Products from './component/Products';
        import AboutUs from './component/AboutUs';
        import DetailsPage from './component/DetailsPage';
        import NotFound from './component/NotFound';
        
class App extends Component {
  render() {
    return (
      <div>
        
                  <Navbar/>
                  <Routes>
                  <Route path="/*" element={<LandingPage/>}/>
                  <Route path="/products" element={<Products/>}/>
                  <Route path="/products/:id" element={<DetailsPage/>}/>
                  <Route path="/aboutus" element={<AboutUs/>}/> 
                  <Route path='/notfound' element={<NotFound/>}/>
                  {/* <Route path='/*' element={<Navigate to='/notfound'/>  }/> */}
                  </Routes>
                  <Footer/>
      </div>
    );
  }
}

export default App;





