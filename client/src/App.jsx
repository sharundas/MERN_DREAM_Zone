import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import News from './pages/News';
import PrivateRoute from './components/PrivateRoute'
import CreateListing from './pages/CreateListing';
import Test from './pages/test';
import Footers from './components/Footer';
import Newsletter from './components/Newsletter';
import Premium from './components/Premium';
import Timelines from './components/Timeline';
import ImageGrid from './components/ImageGrid';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';


function App() {

  return (
   
    <BrowserRouter>
   
    <Header />
    
        

     <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/listing/:listingId' element={<Listing />} />


        <Route element={<PrivateRoute />}>
        <Route path='/profile' element={<Profile />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/update-listing/:listingId' element={<UpdateListing />} />

        </Route>
        <Route path='/news' element={<News />} />
        <Route path='/test' element={<Test />} />

        </Routes>
        
       
        <Newsletter />
        <ImageGrid />
        <Timelines />
        {/* <Premium /> */}
        <Footers />
       
    </BrowserRouter>
   
      
  )
}

export default App
