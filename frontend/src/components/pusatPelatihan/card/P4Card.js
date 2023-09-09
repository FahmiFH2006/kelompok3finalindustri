import Cardpht from "../../card1/card-pht";
import { Button } from "react-bootstrap";

const P4Card1 = () => {
    return (
        <div>
             <div style={{marginTop:"1%",width:"100%"}} className="border-bottom border-dark border-3"></div>
            <div style={{marginLeft:"3%", marginTop:"2%"}}>
            <h2 style={{fontSize:"120%",fontWeight:"bold"}}>Kategori Pelatihan</h2>
                <p style={{fontSize:"90%"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quis assumenda voluptatibus animi! Aliquid natus cumque dolor accusantium, obcaecati sint.</p>
            </div>
            <Button style={{marginLeft:"80%", marginTop:"1%", width:"17%", height:"35px"}} href="/isiPengetahuan" variant="secondary">Tampilkan Semua </Button>
            <div style={{marginTop:"-45px"}}>
            <Cardpht />
            </div>
       
        </div>
    )
}

export default P4Card1;