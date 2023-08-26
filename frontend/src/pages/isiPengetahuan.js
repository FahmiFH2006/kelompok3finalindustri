import Footer from "../components/Layouts/footer/footer";
import BannerUt2 from "../components/pusatPelatihan/bannerPel";
import Pelcard from "../components/pusatPelatihan/cardpel/cardPel";
import NavP from "../components/Layouts/navPel/navPel";
import P3Card from "../components/pusatPelatihan/card/P3card";

const IsiP = () => {
    return(
        <div className="PusPel">
            <NavP />
            <BannerUt2/>
            <Pelcard/>
            <P3Card/>
            <Footer />
        </div>
    )
}

export default IsiP;