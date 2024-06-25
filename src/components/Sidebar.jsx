import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-gradient-to-r from-[#637ed4] to-[#a383df] h-[15%] rounded-2xl flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="" />
          <p className="font-bold">Search</p>
        </div>
        <div onClick={()=>navigate('/')} className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="" />
          <p className="font-bold">Home</p>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#637ed4] to-[#a383df] h-[85%] rounded-2xl">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="" />
            <p className="font-semibold">Personal Stash</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5 cursor-pointer" src={assets.arrow_icon} alt="" />
            <img className="w-5 cursor-pointer" src={assets.plus_icon} alt="" />
          </div>
        </div>
        <div className="p-4 bg-gradient-to-r from-[#b2c9fa] to-[#b37bd8] m-2 rounded-xl font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your very own Stash</h1>
            <p className="font-light">it&apos;s effortless let us help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-blue-400 rounded-xl mt-4">Create MyStash</button>
        </div>
        <div className="p-4 bg-gradient-to-r from-[#b2c9fa] to-[#b37bd8] m-2 rounded-xl font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Get some podcasts you like</h1>
            <p className="font-light">don&apos;t worry we&apos;ll keep ypu updated</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-blue-400 rounded-xl mt-4">Browse Podcasts</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
