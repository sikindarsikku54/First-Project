import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './ComponentN1/NavBar/Navbar'
import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import NavbarN from './Routing/NavbarN';
import HomeN from './Routing/HomeN';
import ContactN from './Routing/ContactN';
import AboutN from './Routing/AboutN';
import PageNotFound from './ComponentN1/Details/PageNotFound'
import Home from './ComponentN1/Details/Home'
import Contact from './ComponentN1/Details/Contact'
import About from './ComponentN1/Details/About'
import './App.css'
import UserRegistation from './ComponentN1/UserAuthentications/UserRegistation';
import UserLogin from './ComponentN1/UserAuthentications/UserLogin';
import Amazon from './ComponentN1/Amazon/Amazon';
import ProductDetailes from './ComponentN1/Amazon/ProductDetailes';
import Input from './Practice/Input';
import Table from './Practice/Table';
import Task from './Practice/Task';
import Count from './Practice/Count';
import Compare from './Practice/Compare';
import Checkbox from './Practice/Checkbox';
import Object from './Practice/Object';
import TodoList from './Practice/TodoList';
import Color from './Practice/Color';
import TodoDelete from './Practice/TodoDelete';
import AmazonN from './Practice/AmazonN';
import RegistrationN from './Routing/RegistrationN';
import LoginN from './Routing/LoginN';
import MultiProducts from './Practice/MultiProducts';
import Reducer from './Practice/Reducer';
import Login from './Task/login';
import Password from './Task/Password';
import Email from './Task/Email';
import NavbarNN from './Task/NavbarNN';
import Finish from './Task/Finish';
import Axios from './Axios/AxiosN';
import AxiosN from './Axios/AxiosN';
import Parent from './Memo/Parent';
// import Cleanup from './Cleaner Function/Cleanup';
import NavbarTodo from './ToDoList/NavbarTodo';

export default function App() {
  return (
    <>
      
      {/* <BrowserRouter>
       <NavbarNN/>
        <Routes>
           <Route path='/Home' element={<Home/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/*' element={<PageNotFound/>} />
          <Route path='/UserRegistation' element={<UserRegistation/>} />
          <Route path='/UserLogin' element={<UserLogin/>} />
          <Route path='/Amazon' element={<Amazon/>} />
          <Route path='/Product/:id' element={<ProductDetailes/>} /> 
          <Route path='/Email' element={<Email/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Password' element={<Password/>} />
          <Route path='/Finish' element={<Finish/>} />
        </Routes>
      </BrowserRouter> */}

        {/* <Input/> */}

        {/* <Table/> */}

        {/* <Task/> */}

        {/* <Count/> */}

        {/* <Compare/> */}

        {/* <Checkbox/> */}

        {/* <Object/> */}

        <TodoList/>

        {/* <Color/> */}

        {/* <TodoDelete/> */}

        

        {/* <BrowserRouter>
          <NavbarN/>
            <Routes>
                <Route path='/HomeN' element={<HomeN/>}/>
                <Route path='/AboutN' element={<AboutN/>}/>
                <Route path='/ContactN' element={<ContactN/>}/>
                <Route path='/RegistrationN' element={<RegistrationN/>}/>
                <Route path='/LoginN' element={<LoginN/>}/>
                <Route path='/<AmazonN' ele/>
            </Routes>
        </BrowserRouter> */}

        {/* <MultiProducts/> */}

        {/* <Reducer/> */}

        {/* <AxiosN/> */}

        {/* <Parent/> */}

        {/* <Cleanup/> */}

        {/* <AmazonN/> */}

    </>
  )
}
