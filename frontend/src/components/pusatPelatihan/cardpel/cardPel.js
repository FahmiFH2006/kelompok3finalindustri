
import React from 'react';
import { Button,  Progress } from 'antd';

const Pelcard = () => (
  <div style={{ background: "gray", width: "20%", height: "90%",marginLeft:"10%" }}>
    <h4 style={{marginLeft:"5%"}}>Proggres</h4> 
    <p style={{marginLeft:"5%"}}>0%</p>
    <Progress percent={0} showInfo={false} style={{width: "90%" ,marginLeft:"5%"}} />
    <br /><br /><br />
    <div className="border-bottom border-dark border-3"></div>
    <h4 style={{marginLeft:"5%"}}>Modul1</h4>
    <div className="border-bottom border-dark border-3"></div>
    <br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 1</Button>
    <br /><br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 2</Button>
    <br /><br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 3</Button>
    <br /><br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 4</Button>
    <br /><br />
    <div className="border-bottom border-dark border-3"></div>
    <h4 style={{marginLeft:"5%"}}>Modul2</h4>
    <div className="border-bottom border-dark border-3"></div>
    <br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 1</Button>
    <br /><br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 2</Button>
    <br /><br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 3</Button>
    <br /><br />
    <Button style={{width:"75%",marginLeft:"11%"}}>Sub Modul 4</Button>
    <br /><br />
    <div className="border-bottom border-dark border-3"></div>
    <h4 style={{marginLeft:"5%"}}>Final Quiz</h4>
    <div className="border-bottom border-dark border-3"></div>
    <br /><br /><br /><br />
  </div>  




);

export default Pelcard;
