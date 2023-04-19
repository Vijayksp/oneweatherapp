import {Link , Routes, Route } from 'react-router-dom';
import Home from './Home'
import Login from './Login';
import Contact from './Contact';
import Photo from './Photo';
import Map from './Map';
import News from './News';
import ErrorMsg from './ErrorMsg'



const Header=()=>{


    return(

        <>
    
              <div className="header">
              <h1 className='h1_h'>Weather App</h1>
               <div className="nav">
                    {/* <Link to="/">Home</Link>&nbsp; &nbsp; &nbsp; */}
                    <Link to="/news">News</Link>&nbsp; &nbsp; &nbsp;
                    <Link to="/map">Map</Link>&nbsp; &nbsp; &nbsp;
                    <Link to="/photo">Photo</Link>&nbsp; &nbsp; &nbsp;
                    <Link to="/contact">Contact</Link>&nbsp; &nbsp; &nbsp;
                    <Link to="/login">Login</Link>
                </div> 
              </div>

              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/news" element={<News />} />

                <Route path="/map" element={<Map />} />
                <Route path="/photo" element={<Photo />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                
                {/* <Route path="*" element={<ErrorMsg />} /> */}
            </Routes>
        </>

    )
}

export default Header;