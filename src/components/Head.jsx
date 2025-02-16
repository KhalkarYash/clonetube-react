import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="px-4 py-4 text-lg">
      <div className="flex justify-between">
        <div className="flex">
          <div
            onClick={toggleMenuHandler}
            className="mx-1 cursor-pointer hover:bg-white bg-opacity-10 -mt-1 hover:bg-opacity-20 px-3 py-1 h-fit text-lg rounded-full"
          >
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="mx-1 w-35">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" />
          </div>
        </div>
        <div className="flex w-6/12">
          <input
            type="text"
            placeholder="Search"
            className="w-[70%] text-sm outline-blue-500 focus:outline-1 focus:border-0 rounded-l-full border-1 border-white px-4"
          />
          <button className="bg-neutral-800  outline-1 outline-neutral-800 rounded-r-full px-4 py-2">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <button>
            <i class="fa-solid fa-microphone" className="mx-4"></i>
          </button>
        </div>
        <div>
          <i className="mx-4 ml-0" class="fa-solid fa-ellipsis-vertical"></i>
          <button className="rounded-full border-1 border-white mx-4 py-1 px-4">
            <i class="fa-regular fa-circle-user"></i> Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
