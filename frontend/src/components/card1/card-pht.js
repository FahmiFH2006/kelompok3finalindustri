import React from "react";
import { Rate } from 'antd';
import { Link } from "react-router-dom";
import { EyeOutlined , CommentOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import { DataProduct } from "./data/dataP";
import 'swiper/css';

const CardColosali = ({ cart }) => {
  return (
    <Link
      to="/"
      className="drop-shadow-xl"
      style={{ textDecoration: "none", color: "#515151",  justifyContent:"space-around" }}
    >
      <Card hoverable style={{ width: "14rem", margin: "auto" }}  >
        <Card.Img variant="top" style={{ width:"90%", marginTop:"1rem", marginLeft:"7px" }} src={cart.image} />
        <Card.Body style={{marginLeft:"6px"}}>
          <Card.Title>{cart.ProductName}</Card.Title>
          <Card.Text> {cart.Category}</Card.Text>
          <Card.Text>Dibuat oleh: {cart.dibuat}</Card.Text>
          <Card.Text><EyeOutlined  /> <Rate  count={1} /><CommentOutlined /></Card.Text>
          
        </Card.Body>
      </Card>
    </Link>
  );
};

const Cardpht = ({}) => {
return (
  <div>
  <Swiper
    slidesPerView={5}
    spaceBetween={5}
    breakpoints={{
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    }}
    className="m-5"
  >
    {DataProduct.map((cart) => (
      <SwiperSlide key={cart.id}>
        <CardColosali cart={cart} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
);
};

export default Cardpht;