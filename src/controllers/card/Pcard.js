import CardKTG from "../../components/card1/card-ktg";
import { Button } from "react-bootstrap";

const Pcard = () => {
    return (
        <div>
             <div style={{marginTop:"7rem"}} className="border-bottom border-dark border-3"></div>
            <div style={{marginLeft:"50px", marginTop:"15px"}}>
                <h2>Kategori Pelatihan</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quis assumenda voluptatibus animi! Aliquid natus cumque dolor accusantium, obcaecati sint.</p>
            </div>
            <Button style={{marginLeft:"78rem", marginTop:"-7rem", width:"13rem", height:"35px"}} href="/katPel" variant="secondary">Secondary → </Button>
            <div style={{marginTop:"-45px"}}>
            <CardKTG />
            </div>
            <div style={{marginTop:"1rem"}} className="border-bottom border-dark border-3"></div>
        </div>
    )
}

export default Pcard