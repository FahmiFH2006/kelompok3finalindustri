import Footer from "../components/Layouts/footer/footer"
import BannerUt from "../components/pusatPelatihan/banner";
import P4Card1 from "../components/pusatPelatihan/card/P4Card";
import P2card from "../components/pusatPelatihan/card/p2Card";
import NavBar2 from "../components/Layouts/NavDefault/navDef";


const PusatPel = () => {
    return(
        <div className="PusPel">
            <NavBar2 />
            <BannerUt />
            <P4Card1 />
            <P2card />
            <Footer />
            
        </div>
    )
}

export default PusatPel;