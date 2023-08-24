import Cardpht from "../../card1/card-pht.js";
import { Button } from "react-bootstrap";

const P2card = () => {
    return (
        <div>
             <div style={{marginTop:"1rem",width:"100%"}} className="border-bottom border-dark border-3"></div>
            <div style={{marginLeft:"50px", marginTop:"15px"}}>
                <h2>Pelatihan</h2>
                <p>Dibawah ini adalah pelatihan yang ditawarkan untuk dipelajari</p>
            </div>
            <Button style={{marginLeft:"80%", marginTop:"-10%", width:"13rem", height:"35px"}} href="/isiPengetahuan" variant="secondary">Tampilkan Semua </Button>
            <div style={{marginTop:"-45px"}}>
            <Cardpht />
            </div>
       
        </div>
    )
}

export default P2card