import Nav from "../components/navbar/Navigation";
import Banners from "../controllers/banner/banner";
import Pcard from "../controllers/card/Pcard";
import Footer from "../components/footer/footer";

const PusatPel = () => {
    return(
        <div className="PusPel">
            <Nav />
            <Banners />
            <Pcard />
            <Footer />
        </div>
    )
}

export default PusatPel;