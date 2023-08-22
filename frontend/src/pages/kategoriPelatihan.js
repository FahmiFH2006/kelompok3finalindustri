import CardKTG from "../components/card1/card-ktg"
import Footer from "../components/Layouts/footer/footer"
import NavBar2 from "../components/Layouts/nav2/nav2"

const KategoriPel = () => {
    return (
        <div>
            <NavBar2 />
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