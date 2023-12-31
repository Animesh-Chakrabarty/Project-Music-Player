import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import ChartView from "./pages/ChartView";
import Favourites from "./pages/Favourites";


import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { LuLibrary } from "react-icons/lu";

import Sidebar from "./components/Sidebar";
import AudioPlayer from "./components/AudioPlayer";

const App = () => {
  return (
    <div className=" xl:bg-gradient-to-br from-[#3D3459] via-[#171335]  to-[#383055] flex h-[100vh] w-[100vw] font-jost">
      {/* Side Bar */}
      <div className="xl:w-[12%] xl:pl-5 xl:pt-5">
        <div className="max-xl:hidden ">
          <Sidebar />
        </div>
        <AudioPlayer />
      </div>

      {/* Mobile View */}
      <div>
        {/* Mobile Nav */}
        <div className="xl:hidden h-[60px] w-full mobile-nav-bg bottom-0 absolute flex justify-around items-center text-gray-200 px-10 text-[17px] pt-1 bg-opacity-70 bg-[#803bc0]">
          <Link className="flex flex-col justify-center items-center " to="/">
            <AiFillHome size={22} />
            Home
          </Link>
          <Link
            className="flex flex-col justify-center items-center "
            to="/search"
          >
            <AiOutlineSearch size={22} />
            Search
          </Link>
          {/* <Link
            className="flex flex-col justify-center items-center "
            to="favourites"
          >
            <LuLibrary size={22} />
            Library
          </Link> */}
        </div>
      </div>
      {/* Routes */}
      <div className="w-[110%] bg-[#FFFFFF]  xl:px-5 max-xl:px-0 xl:rounded-3xl xl:mx-4 overflow-auto no-scrollbar xl:m-[15px] max-xl:h-[calc(100%-180px)]">
        <Routes>
          <Route path="/" element={<Explore />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:searchTerm" element={<Search />}></Route>
          <Route path="/charts/:chartId" element={<ChartView />}></Route>
          <Route path="/favourites" element={<Favourites />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
