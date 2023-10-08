import { useState } from "react";

import {
  useGetHomePageDataQuery,
  useGetPlaylistDetailsQuery,
} from "../redux/saavn";

import SongCard from "../components/SongCard";
import ChartCard from "../components/ChartCard";

import { Link } from "react-router-dom";
import AlbumCard from "../components/AlbumCard";

import { BsSearch } from "react-icons/bs";

import { useGetSearchResultQuery } from "../redux/saavn";
import { useNavigate, useParams } from "react-router-dom";

import logo from "../assets/groov_icon.png";
import logo2 from "../assets/groov_icon_2.png";

import { ImGithub } from "react-icons/im";

const Explore = () => {
  const { data: homePageData } = useGetHomePageDataQuery();
  const { data: trendings } = useGetPlaylistDetailsQuery("110858205");

  const charts = homePageData?.data?.playlists;
  const albums = homePageData?.data?.trending?.albums;

  console.log(charts);

  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const { searchTerm } = useParams();

  console.log("x" + searchTerm);
  let { data: searchResult } = useGetSearchResultQuery(searchTerm);
  console.log(searchResult);

  const handleSubmit = () => {
    console.log("searched for " + input);
    navigate(`/search/${input}`);
  };

  searchResult = searchResult?.data?.results;
  console.log(searchResult);

  return (
    <div className="">
      {/* Top Div */}
      <div>
        {/* Logo for mobile devices */}
        <div className="md:hidden pl-2 pr-5 pt-1  flex justify-between items-center">
          <img src={logo2} alt="" className="h-[50px] w-[150px]" />
          <button
            onClick={() => {
              window.open(
                "https://github.com/Animesh-Chakrabarty/Project-Music-Player"
              );
            }}
          >
            <ImGithub size={30} />
          </button>
        </div>
        {/* Search Bar */}
        <div className=" flex justify-center items-end mt-3 mb-4">
          <form action="" className="flex gap-3 ">
            <input
              type="text"
              placeholder="Search for a song , album ..."
              onChange={(e) => setInput(e.target.value)}
              className="outline-none px-6 py-1"
            />
            <button onClick={handleSubmit} className="">
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Trendings (song) */}
        <div className="flex flex-col gap-3 mt-3">
          {/* Trendings Title */}
          <div className="flex justify-between max-lg:px-3 mb-1">
            <h3 className="text-3xl font-[600] ">Trending</h3>
            <Link
              className="text-gray-700 cursor-pointer lg:mr-3"
              to="/trendings"
            >
              see more...
            </Link>
          </div>
          {/* Trendings Wrapper */}
          <div className="flex gap-5 max-lg:gap-0 overflow-y-hidden no-scrollbar">
            {trendings?.data?.songs?.slice(0, 11).map((song, i) => (
              <div key={song?.id}>
                <SongCard song={song} data={trendings?.data?.songs} i={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Div */}
      <div className="flex mt-7 max-lg:flex-col ">
        {/* Top Charts */}
        <div className="w-[68%] max-lg:w-full  max-lg:overflow-auto ">
          {/* Top Charts Title*/}
          <div className="flex justify-between items-center max-lg:px-3 mb-1">
            <h3 className="text-3xl font-[600] ">
              Top <br className="lg:hidden" />
              Charts
            </h3>
            <Link className="text-gray-700 cursor-pointer lg:mr-6" to="/charts">
              see more...
            </Link>
          </div>
          {/* Top Charts Wrapper*/}
          <div className="flex gap-5 max-lg:gap-1 lg:flex-wrap  overflow-auto no-scrollbar max-lg:overflow-auto max-lg:w-full max-lg:h-[200px] mt-5 mb-3">
            {charts?.slice(0, 15).map((chart, i) => {
              return (
                <div key={chart?.id}>
                  <ChartCard chart={chart} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Albums */}
        <div className="w-[32%] max-lg:w-full ">
          {/* Albums Title */}
          <div className="flex justify-between items-center max-lg:px-3">
            <h3 className="text-3xl font-[600] ">Albums</h3>
            <Link className="text-gray-700 cursor-pointer mr-3" to="/albums">
              see more...
            </Link>
          </div>
          {/* Albums Wrapper */}
          <div className="flex flex-col justify-start gap-3 mt-5 ">
            {albums?.slice(0, 7).map((album) => {
              return (
                <div key={album?.id}>
                  <AlbumCard album={album} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
