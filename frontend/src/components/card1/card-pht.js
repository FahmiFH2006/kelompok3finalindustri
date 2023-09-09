import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { Link } from "react-router-dom";
import { EyeOutlined , CommentOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import 'swiper/css';

const CardColosali = ({ pelatihan }) => {
  
  return (
    <Link
      to={pelatihan.url}
      className="drop-shadow-xl"
      style={{ textDecoration: "none", color: "#515151",  justifyContent:"space-around" }}
    >
      <Card hoverable style={{ width: "14rem", margin: "auto" }}  >
        <Card.Img variant="top" style={{ width:"90%", marginTop:"1rem", marginLeft:"7px" }} src={pelatihan.image} />
        <Card.Body style={{marginLeft:"6px"}}>
          <Card.Title>{pelatihan.judul}</Card.Title>
          <Card.Text> {pelatihan.deskripsi}</Card.Text>
          <Card.Text>Dibuat oleh: {pelatihan.dibuat_oleh}</Card.Text>
          <Card.Text><EyeOutlined  /> <Rate  count={1} /><CommentOutlined /></Card.Text>
          
        </Card.Body>
      </Card>
    </Link>
  );
};

const Cardpht = () => {
  const [pelatihanData, setPelatihanData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/getPel') // Replace with the actual endpoint
      .then((response) => response.json())
      .then((data) => {
        setPelatihanData(data.response);
      })
      .catch((error) => console.error(error));
  }, []);
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
    {pelatihanData.map((pelatihan) => (
      <SwiperSlide key={pelatihan.id}>
        <CardColosali pelatihan={pelatihan} />
      </SwiperSlide>
    ))}
  </Swiper>
</div>
);
};

export default Cardpht;