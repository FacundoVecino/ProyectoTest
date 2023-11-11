import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomeView from './views/HomeView';
import DetailsView from './views/DetailsView';
import LoginView from './views/LoginView';
import AdminView from './views/AdminView';
import ErrorView from './views/ErrorView';

import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';

import './Router.css'

const Router = () => {
  return (
  <BrowserRouter>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<HomeView />} />
        <Route path='/details' element={<DetailsView />} />
        <Route path='/login' element={<LoginView />} />
        <Route path='/admin' element={<AdminView />} />
        <Route path='*' element={<ErrorView />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
  );
}

export default Router
