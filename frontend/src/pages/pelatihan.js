import SideMenu from "../components/Pelatihan/sideNav";
import NavBar2 from "../components/Layouts/NavDefault/navDef";
import PelatihanList from "../components/Pelatihan/pelatihanGet";

const PelPage = () => {
    return(
        <>
        <NavBar2 />
        <SideMenu />
        <PelatihanList />
        </>
    )
}

export default PelPage