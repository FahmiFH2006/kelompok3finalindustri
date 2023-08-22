import Navbar from "../components/Layouts/navbar/Navigation"
import Footer from "../components/Layouts/footer/footer"
import NavBar2 from "../components/Layouts/nav2/nav2";
import BannerUt from "../components/pusatPelatihan/banner";
import CardList from "../components/pusatPelatihan/card2/card2";

const PusatPel = () => {
    return(
        <div className="PusPel">
            <NavBar2 />
            <BannerUt />
            <CardList />
            <Footer />
            
        </div>
    )
}

export default PusatPel;