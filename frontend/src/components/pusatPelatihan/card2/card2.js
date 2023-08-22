import React from "react";
import { CardData } from "./dataCard2";
import { Card,Button } from 'antd';
import "./card.css"
const { Meta } = Card;

const CardList = () => {
    return (
      <div style={{padding:"4%"}}>
        <div className="tekskat">
        <h5 style={{margin:"1%",fontWeight:"bold"}}>Kategori pelatihan</h5>
        <p style={{margin:"1%"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates consectetur accusantium ullam. Quam ducimus eos odio magni nemo beatae soluta deleniti, eveniet, atque blanditiis, hic nihil quo aliquam perferendis voluptatem.</p>
        </div>
        <div style={{display:"flex"}} className="cardmap">
        {CardData.map((card) => (
        //   <Card key={index} title={card.title}>
        //     {card.content}
        //   </Card>
        <Card className="Card2"
    hoverable
    style={{
      width: "15%",
      border:"solid black 1px",
      padding:"1%",
      margin:"1%",
      height:"40%"
    }}
    cover={<img style={{width:"100%"}} alt="example" src={card.image} />}
  >
    <Meta title={<p style={{fontSize:"80%"}}>{card.judul}</p>} description={<p style={{fontSize:"80%"}}>{card.desc}</p>}/> 
    <Button style={{width:"100%"}} type="primary" href={card.link}>
        Buka Link
      </Button>
  </Card>
        ))}
        </div>
      </div>
    );
  };
  
  export default CardList;
  