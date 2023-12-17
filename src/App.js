import React from 'react';
import './App.css';
import { RegisterForm } from './Forms/RegisterForm';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { LoginForm } from './Forms/LoginForm';

function App(){
  return (
    <React.Fragment>
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<RegisterForm/>}/>
            <Route path='/Login' element={<LoginForm/>}/>
         </Routes>
      </BrowserRouter>
    </React.Fragment>
       
  );
}
export default App;


