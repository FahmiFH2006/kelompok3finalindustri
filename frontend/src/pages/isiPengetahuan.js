import NavP from "../components/Layouts/navPel/navPel";
import BannerUt2 from "../components/pusatPelatihan/bannerPel";
import Footer from "../components/Layouts/footer/footer";
import P3card from "../components/pusatPelatihan/card/P3card";
import Pelcard from "../components/pusatPelatihan/cardpel/cardPel";



const IsiP = () => {
    return(
        <div className="PusPel">
            <NavP />
            <BannerUt2/>
            <Pelcard/>
            <P3card/>
            <Footer />
        </div>
    )
}

export default IsiP;