import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';import { Form, Menu, Modal,Button  } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import "./nav.css"
import { Input } from 'antd';
const { Search } = Input;

const NavBar2 = () =>{
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);
  
    // const showModal = () => {
    //   setIsModalOpen(true);
    // };
  
    // const showNestedModal = () => {
    //   setIsNestedModalOpen(true);
    //   setIsModalOpen(false); // Close the parent modal
    // };
  
    // const handleOk = () => {
    //   setIsNestedModalOpen(false);
    // };
  
    // const handleCancel = () => {
    //   setIsModalOpen(false);
    //   setIsNestedModalOpen(false);
    // };
    return(
        <>
        <div className="mainNav">
            <div className="logoNav">
                <h1>NusaLearning</h1>
            </div>
            <div className="formNav">
            <Search className='srchNav'
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 450 }}
    />
            </div>
        <div className="linkNav">
            <a href="#">beranda</a>
            <a href="#">pelatihan</a>
            <a href="#">notif</a>
            <a href="#">login</a>
        </div>
        </div>
        </>
    )
}

export default NavBar2;