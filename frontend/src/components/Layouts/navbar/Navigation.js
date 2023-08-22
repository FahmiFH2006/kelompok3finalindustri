import React, { useState } from 'react';
import { Form, Input, Menu, Modal,Button  } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import "./nav.css"

function Navbar() {
  const placeHoldStyle={
    '::placeholder':{
      color : 'grey'
    }
  }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);
  
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const showNestedModal = () => {
      setIsNestedModalOpen(true);
      setIsModalOpen(false); // Close the parent modal
    };
  
    const handleOk = () => {
      setIsNestedModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setIsNestedModalOpen(false);
    };
    return (
        <div className='NavStyle' id='navStyle'>
            <Menu mode="horizontal">
                <h1 className="font-bold" style={{ marginLeft: "3%",marginTop: "1%", fontFamily: "bold", fontSize: "140%" }} >NusaLearning</h1>
                <Form  style={{ marginLeft: "5%",width:"40%", marginTop: "1%", marginBottom:"2%" }}>
                    <Input className='border-black' style={{height: "100%",width:"120%"}} placeholder='Cari Pelatihan ...' />
                </Form>
                <div style={{ marginLeft: "12%" }}>
                    <Menu.Item key="home" >
                        Beranda
                    </Menu.Item>
                    <Menu.Item key="search" >
                        Pelatihan
                    </Menu.Item>
                    <Menu.Item icon={< BellOutlined />}>
                    </Menu.Item>
                    <Menu.Item key="search" onClick={showModal} >
                        Login
                    </Menu.Item>
                </div>
            </Menu>
            <Modal
             open={isModalOpen} 
             onOk={handleOk} 
             onCancel={handleCancel}
             footer={null}
             closable={false}
             width={400}
             style={{
              top: 30,
            }}
             
             >
                <div className="headerLog" style={{width:"100%"}} >
            <h5 style={{display:"inline-block",width:"50%",fontWeight:"bolder",marginTop:"3%",}}>Login</h5>
            <h6 onClick={showNestedModal} style={{display:"inline-block",width:"50%",textAlign:"right",fontWeight:"light",marginTop:"3%",cursor:"pointer"}}>Daftar akun baru</h6>
            <div className="formLog" style={{marginTop:"5%"}}>
                <form action="" method="post">
                    <label htmlFor="userName">Username</label><br />
                    <input type="text" id='userName' name='userName' placeholder='username atau email' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}}/>
                    <label htmlFor="passWord">Password</label><br />
                    <input type="password" id='passWord' name='passWord' placeholder='password' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}}/>
                    <center>
                      
                    <input type="button" value="Login" style={{border:"solid 1px black",padding:"1% 20%",margin:"5%"}}  /><br /><hr />
                    <input type="button" value="Masuk dengan Google" style={{border:"solid 1px black",padding:"1% 20%",margin:"2%"}}  /><br />
                    <input type="button" value="Masuk dengan Facebook" style={{border:"solid 1px black",padding:"1% 20%",margin:"2%"}} /> <br /><hr />
                    <p>masuk ke halaman <a href="#">kelola training</a></p>
                    </center>
                </form>
            </div>
            </div>
           
      </Modal>
      <Modal
        open={isNestedModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={400}
             style={{
              top: 30,
            }}
            footer={null}
            closable={false}
      >
        <h5 style={{fontWeight:"bolder"}}>Daftar Akun Baru</h5><br />
        <form action="" method='post'>
          <label htmlFor="NamaLengkap">Nama Lengkap</label><br />
          <input type="text" id='NamaLengkap' name='NamaLengkap' placeholder='Nama Lengkap' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />
          
          <label htmlFor="email">email</label><br />
          <input type="text" id='email' name='email' placeholder='email' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="noTelp">no Telepon</label><br />
          <input type="text" id='noTelp' name='noTelp' placeholder='no Telepon' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="TanggalLahir">tanggal lahir</label><br />
          <input type="text" id='TanggalLahir' name='TanggalLahir' placeholder='tanggal lahir' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />
          
          <label htmlFor="Negara">Negara</label><br />
          <input type="text" id='Negara' name='Negara' placeholder='Negara' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="Domisili">Domisili</label><br />
          <input type="text" id='Domisili' name='Domisili' placeholder='Domisili' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="KataSandi">Kata Sandi</label><br />
          <input type="text" id='KataSandi' name='KataSandi' placeholder='Kata Sandi' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="confirmPass">Konfirmasi Kata Sandi</label><br />
          <input type="text" id='confirmPass' name='confirmPass' placeholder='Nama Lengkap' style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />
          <center><input type="button" value="Daftar" style={{border:"solid 1px black",padding:"1% 20%",margin:"5%"}}  />
</center>

        </form>

      </Modal>
        </div>
    )
}

export default Navbar