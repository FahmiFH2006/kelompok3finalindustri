import Cardpht from "../../card1/card-pht";
import { Button } from "react-bootstrap";

const P3Card = () => {
    return (
        <div>
             <div style={{marginTop:"1rem"}} className="border-bottom border-dark border-3"></div>
            <div style={{marginLeft:"50px", marginTop:"15px"}}>
                <h2>Pelatihan Serupa</h2>
               <div style={{width:"18%"}} className="border-bottom border-dark border-3"></div>
          
            </div>
            <Button style={{marginLeft:"78rem", marginTop:"-7rem", width:"13rem", height:"35px"}} href="/isiPel" variant="secondary">Tampilkan Semua </Button>
            <div style={{marginTop:"-45px"}}>
            <Cardpht />
            </div>
       
        </div>
    )
}

export default P3Card