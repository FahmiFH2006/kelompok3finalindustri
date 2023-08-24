import React from 'react';
import { UserOutlined ,BellFilled} from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import "./navP.css"
const NavP = () =>{
    return(
        <>
            <div className="border-bottom border-dark border-3"></div>
        <div className="MNP">
            <div className="logoMNP">
                <h1>NusaLearning</h1>
            </div>
            <div className="berandaP">
            <a style={{textDecoration:"none" ,color:"black"}} href="#">Beranda</a>
            </div>
        <div className="linkMPN">
            <a href="#">pelatihan</a>
            <BellFilled />
            <Avatar className='Navpl' size="small" icon={<UserOutlined />} />
        </div>
        </div>
        <div className="border-bottom border-dark border-3"></div>
        </>
    )
}

export default NavP;