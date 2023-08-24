import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PusatPel from "../pages/pusatPelatihan";
import KategoriPel from '../pages/kategoriPelatihan';
import IsiP from '../pages/isiPengetahuan';

const UserRoute = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<PusatPel />} />
        <Route path="/isiPengetahuan" element={<IsiP />} />

        </Routes>
        </BrowserRouter>
    )
}

export default UserRoute