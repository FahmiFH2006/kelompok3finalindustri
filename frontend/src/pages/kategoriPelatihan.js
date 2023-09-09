import Cardpht from "../components/card1/card-pht"
import Footer from "../components/Layouts/footer/footer"
import NavBar2 from "../components/Layouts/NavDefault/navDef"


const KategoriPel = () => {
    return (
        <div>
            <NavBar2 />
            <div style={{marginLeft:"50px", marginTop:"15px"}}>
                <h2>Kategori Pelatihan</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quis assumenda voluptatibus animi! Aliquid natus cumque dolor accusantium, obcaecati sint.</p>
            </div>
            <Cardpht />
            <Footer />
        </div>
    )
}

export default KategoriPel