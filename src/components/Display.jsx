import { Route, Routes } from "react-router-dom"
import DisplayHome from "./DisplayHome"
import DisplayAlbum from "./DisplayAlbum"

const Display = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded-2xl bg-gradient-to-r from-[#637ed4] to-[#a383df] text-white overflow-auto lg:w-[75%] lg:ml-2">
        <Routes>
            <Route path="/" element={<DisplayHome />} />
            <Route path="/album/:id" element={<DisplayAlbum />} />
        </Routes>
    </div>
  )
}

export default Display