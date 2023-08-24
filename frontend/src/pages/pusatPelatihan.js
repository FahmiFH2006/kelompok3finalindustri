import Footer from "../components/Layouts/footer/footer"
import BannerUt from "../components/pusatPelatihan/banner";
import CardList from "../components/pusatPelatihan/card2/card2";
import P2card from "../components/pusatPelatihan/card/p2Card";
import NavBar2 from "../components/Layouts/NavDefault/navDef";

const PusatPel = () => {
    return(
        <div className="PusPel">
            <NavBar2 />
            <BannerUt />
            <CardList />
            <P2card />
            <Footer />
            
        </div>
    )
}

export default PusatPel;