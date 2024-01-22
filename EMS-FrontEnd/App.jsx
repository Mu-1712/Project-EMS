import React from 'react';
import './App.css';
import { FooterComponent } from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import EmployeeComponent from './Components/EmployeeComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path='/' element={<ListEmployeeComponent />} />

          {/* //http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployeeComponent />} />

          {/* //http://localhost:3000/add-employees */}
          <Route path='/add-employee' element={<EmployeeComponent />} />

          {/* //http://localhost:3000/edit-employees */}
          <Route path='/edit-employee/:id' element={<EmployeeComponent />} />

        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
