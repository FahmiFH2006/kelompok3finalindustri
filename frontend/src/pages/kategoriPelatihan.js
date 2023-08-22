import CardKTG from "../components/card1/card-ktg"
import Navbar from "../components/Layouts/navbar/Navigation"
import Footer from "../components/Layouts/footer/footer"

const KategoriPel = () => {
    return (
        <div>
            <Navbar />
            <div style={{marginLeft:"50px", marginTop:"15px"}}>
                <h2>Kategori Pelatihan</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quis assumenda voluptatibus animi! Aliquid natus cumque dolor accusantium, obcaecati sint.</p>
            </div>
            <CardKTG />
            <Footer />
        </div>
    )
}

export default KategoriPel