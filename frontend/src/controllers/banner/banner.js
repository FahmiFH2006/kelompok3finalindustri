import Image from 'react-bootstrap/Image';

const Banners = () => {
    return (
        <div>
            <div style={{marginTop:"1rem"}} className="border-bottom border-dark border-3"></div>
        <div style={{marginTop:"-20px", marginLeft:"-25px"}}>
            <Image style={{width:"50%", marginTop:"-33px"}} src="https://i.postimg.cc/L5SGGh52/wallhaven-vq5k8m.jpg" fluid />;
            <div style={{marginLeft:"50rem", marginTop:"-24rem", fontFamily:"bold", width:"45rem"}}>
            <h1 >Banner Iklan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eius earum repellat impedit vero expedita aperiam officia autem maxime. Accusantium tempore animi illo natus expedita odio iste nobis error voluptatem quibusdam temporibus sed impedit, delectus ipsa atque a ipsam! Maxime possimus praesentium tempore delectus necessitatibus esse enim ea voluptatibus veritatis ipsum at, provident culpa fugit reprehenderit aut labore consectetur quae, quo laborum modi aliquam minus quibusdam. Illo placeat corporis perspiciatis culpa explicabo omnis totam in amet. Consequatur aliquid nemo veritatis architecto repellendus temporibus accusamus aliquam debitis nihil dolorem optio quos pariatur molestiae placeat animi distinctio, reiciendis quibusdam deserunt? Veniam, quos!</p>
            </div>
        </div>
            {/* <div style={{marginTop:"5rem"}} className="border-bottom border-dark border-3"></div> */}
        </div>
    )
}

export default Banners