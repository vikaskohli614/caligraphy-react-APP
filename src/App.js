import './App.css';
import React from 'react';
import Main from './HomeComponents/main1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TCF_form from './HomeComponents/TCF_form';
import Hireform from './HomeComponents/hireform';
import Connectwithfun from './HomeComponents/connectwithfun';
import Header from "./HomeComponents/Header";
import Footer from './HomeComponents/footer';
import Become_a_member from './HomeComponents/Become_a_member';
import Join_callichapter from './HomeComponents/Join_callichapter';
import Akshar from './HomeComponents/Akshar';
import Honorary_members from './HomeComponents/Honorary-members';
import Faq from './HomeComponents/Faq'
import Workshop_page from './HomeComponents/Workshop_page';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header title="The Calligraphy Foundation" searchbar={false} />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/TCF_form' element={<TCF_form />} />
          <Route path='/Hireform' element={<Hireform />} />
          <Route path='/Connectwithfun' element={<Connectwithfun />} />
          <Route path='/Become_a_member' element={<Become_a_member/>} />
          <Route path='/calli-chapters' element={<Join_callichapter/>} />
          <Route path='/akshar-mahotsav' element={<Akshar/>} />
          <Route path='/honorary_member' element={<Honorary_members/>} />
          <Route path='/FAQ' element={<Faq/>} />
          <Route path='/Workshop' element={<Workshop_page/>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
