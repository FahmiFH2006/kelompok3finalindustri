import React, { useEffect, useState } from 'react';
import { Rate } from 'antd';
import { Link } from "react-router-dom";
import { EyeOutlined , CommentOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "react-bootstrap";
import 'swiper/css';

function PelatihanList() {
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
    <div style={{marginLeft:"25%"}}>
      <h1>Pelatihan List</h1>

        {/* {pelatihanData.map((pelatihan) => (
          <li key={pelatihan.id}>
            <h2>{pelatihan.judul}</h2>
            <p>{pelatihan.deskripsi}</p>
            Add more elements to display other properties */}

{pelatihanData.map((pelatihan) => {
    <Link
    to="/"
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
})}
      
    </div>
  );
}

export default PelatihanList;
