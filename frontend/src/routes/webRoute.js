import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PusatPel from "../pages/pusatPelatihan";
import IsiP from '../pages/isiPengetahuan';
import KategoriPel from '../pages/kategoriPelatihan';
import PelPage from '../pages/pelatihan';


const UserRoute = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<PusatPel />} />
        <Route path="/isiPengetahuan" element={<IsiP />} />
        <Route path="/kategoripel" element={<KategoriPel />} />
        <Route path="/pelatihan" element={<PelPage />} />

        </Routes>
        </BrowserRouter>
    )
}

export default UserRoute