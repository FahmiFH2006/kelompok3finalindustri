import { Route, Routes, BrowserRouter } from 'react-router-dom'
import PusatPel from "../pages/pusatPelatihan";
import KategoriPel from '../pages/kategoriPelatihan';

const UserRoute = () => {
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<PusatPel />} />
        <Route path="/katPel" element={<KategoriPel />} />

        </Routes>
        </BrowserRouter>
    )
}

export default UserRoute