import React, { useState, useEffect } from 'react';
import axios from "axios"
import jwt_decode from "jwt-decode"
import Cookies from 'js-cookie';
import { useNavigate  } from "react-router-dom";
import { Modal } from 'antd';
import "./nav.css"
import { Input } from 'antd';
const { Search } = Input;

const NavBar2 = () =>{
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [modal, contextHolder] = Modal.useModal();
  const countDown = () => {
    let secondsToGo = 2;
    const instance = modal.success({
      title: 'Succes Doing Action',
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      instance.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      instance.destroy();
    }, secondsToGo * 1000);
  };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);
    const [isProfileShow, setIsProfileShow] = useState(false);
  
    const showModal = () => {
      setIsModalOpen(true);
    };
    const showModalProfile = () => {
      setIsProfileShow(true);
    }
  
    const showNestedModal = () => {
      setIsNestedModalOpen(true);
      setIsModalOpen(false); // Close the parent modal
    };
  
    const handleOk = () => {
      setIsNestedModalOpen(false);
      setIsProfileShow(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setIsNestedModalOpen(false);
      setIsProfileShow(false);
    };

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [emailLog,setEmailLog] = useState('');
    const [no_telp,setNoTelp] = useState('');
    const [ttl,setTtl] = useState('');
    const [negara,setNegara] = useState('');
    const [domisili,setDomisili] = useState('');
    const [password,setPass] = useState('');
    const [passwordLog,setPassLog] = useState('');
    const [confPassword,setConfPass] = useState('');
    
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Register = async (e) => {
  e.preventDefault();
  try {
    await axios.post('http://localhost:5000/regist',{
      name:name,
      email:email,
      no_telp:no_telp,
      ttl:ttl,
      negara:negara,
      domisili:domisili,
      password:password,
      confPassword:confPassword
    });
    // navigate.push("/")
    countDown()
    isModalOpen()
    setIsLoggedIn(true);
  } catch (error) {
    if(error.response){
      setMsg(error.response.data.msg);
    }
  }
}
    const Auth = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/login',{
      email:emailLog,
      password:passwordLog
    });
    // navigate.push("/")
    const accessToken = response.data.accessToken;
    Cookies.set('accessToken', accessToken);
    countDown();
    handleCancel();
    setIsLoggedIn(true);
  } catch (error) {
    if(error.response){
      setMsg(error.response.data.msg);
    }
  }
}

const logout = async () => {
  try {
    await axios.delete('http://localhost:5000/logout');
    Cookies.remove('accessToken');
    handleCancel()
    setIsLoggedIn(false);
  } catch (error) {
    console.log(error);
  }
}
    const [nameToken,setNameTok] = useState('');
    const [token,setToken] = useState('');
    const [expire,setExpire] = useState('');

useEffect(() => {
  const storedToken = Cookies.get('accessToken'); // Get the token from the cookie
  if (storedToken) {
    // You might want to validate the token here
    setIsLoggedIn(true);
  }
  refreshToken();
},[])
const refreshToken = async () => {
  try {
    // Get the token from the cookie
    const storedToken = Cookies.get('accessToken');

    if (storedToken) {
      const response = await axios.get('http://localhost:5000/token', {
        headers: {
          Authorization: `Bearer ${storedToken}` // Set the token in the request headers
        }
      });

      setToken(storedToken); // Use the stored token
      const decoded = jwt_decode(storedToken);
      console.log(decoded);
      setExpire(decoded.exp);
      setNameTok(decoded.name);
    } else {
      navigate("/");
    }
  } catch (error) {
    if (error.response) {
      navigate("/");
    }
  }
};

  

    return(
        <>
        {contextHolder}
        <div className="mainNav" >
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
            <a href="/">beranda</a>
            <a href="/pelatihan">pelatihan</a>
            <a href="#">notif</a>
            {/* <a href="#" onClick={logout} >logout</a> */}
            {isLoggedIn?(
               <a href="#" onClick={showModalProfile}>profile</a>
            ):(
              <a href="#" onClick={showModal} >login</a>
            )}
<Modal
  open={isProfileShow}
  onOk={handleOk} 
  onCancel={handleCancel}
  footer={null}
  closable={false}
  width={200}
  style={{
    top: 30,
  }}
  >
    <div className="mainProf">
      <p style={{fontSize:"110%",fontWeight:"bold"}}>{nameToken}</p>
      <ul style={{listStyle:"none"}}>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Pelatihan Saya</a></li>
        <li><a href="#">Sertifikat</a></li>
        <li><a href="#" onClick={logout}>LogOut</a></li>
      </ul>
      
      
      
    </div>
</Modal>

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
                <form onSubmit={Auth}>
                  <p>{msg}</p>
                    <label htmlFor="Email">Email</label><br />
                    <input type="text" id='Email' name='Email' placeholder='username atau email' value={emailLog} onChange={(e) => setEmailLog(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}}/>
                    <label htmlFor="passWord">Password</label><br />
                    <input type="password" id='passWord' name='passWord' placeholder='password' value={passwordLog} onChange={(e) => setPassLog(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}}/>
                    <center>
                      
                    <input type="submit" onSubmit={Auth} value="Login" style={{border:"solid 1px black",padding:"1% 20%",margin:"5%"}}  /><br /><hr />
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
        <form onSubmit={Register} >
          <label htmlFor="NamaLengkap">Nama Lengkap</label><br />
          <input type="text" id='NamaLengkap' name='NamaLengkap' placeholder='Nama Lengkap' value={name} onChange={(e) => setName(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />
          
          <label htmlFor="email">email</label><br />
          <input type="text" id='email' name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="noTelp">no Telepon</label><br />
          <input type="text" id='noTelp' name='noTelp' placeholder='no Telepon' value={no_telp} onChange={(e) => setNoTelp(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="TanggalLahir">tanggal lahir</label><br />
          <input type="text" id='TanggalLahir' name='TanggalLahir' placeholder='tanggal lahir' value={ttl} onChange={(e) => setTtl(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />
          
          <label htmlFor="Negara">Negara</label><br />
          <input type="text" id='Negara' name='Negara' placeholder='Negara' value={negara} onChange={(e) => setNegara(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="Domisili">Domisili</label><br />
          <input type="text" id='Domisili' name='Domisili' placeholder='Domisili' value={domisili} onChange={(e) => setDomisili(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />

          <label htmlFor="KataSandi">Kata Sandi</label><br />
          <input type="text" id='KataSandi' name='KataSandi' placeholder='Kata Sandi' value={password} onChange={(e) => setPass(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />
          <p style={{fontSize:"70%",color:"red"}}>{msg}</p>


          <label htmlFor="confirmPass">Konfirmasi Kata Sandi</label><br />
          <input type="text" id='confirmPass' name='confirmPass' placeholder='konfirmasi kata sandi' value={confPassword} onChange={(e) => setConfPass(e.target.value)} style={{display:"inline-block",width:"100%",padding:"1%",border:"solid black 1px",margin:"2% 0"}} />
          <p style={{fontSize:"70%",color:"red"}}>{msg}</p>

          <center><input type="submit" onSubmit={Register} value="Register" style={{border:"solid 1px black",padding:"1% 20%",margin:"5%"}}  />
</center>
        </form>
      </Modal>
        </div>
        </div>
        </>
    )
}

export default NavBar2;