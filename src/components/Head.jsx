import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestion, setShowSuggestions] = useState(false);

  const cache = useSelector((store) => store.search);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    json.length === 0 && setSuggestions([]);
  };

  return (
    <div className="px-4 py-4 text-lg">
      <div className="flex justify-between">
        <div className="flex">
          <div
            onClick={toggleMenuHandler}
            className="mx-1 cursor-pointer hover:bg-[rgba(255,255,255,0.1)] bg-opacity-10 -mt-1 hover:bg-opacity-20 px-3 py-1 h-fit text-lg rounded-full"
          >
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="mx-1 w-35">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" />
          </div>
        </div>
        <div className="w-6/12">
          <div className="flex">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setSuggestions(false)}
              value={searchQuery}
              type="text"
              placeholder="Search"
              className="w-[70%] text-sm outline-blue-500 focus:outline-1 focus:border-0 rounded-l-full border-3 border-[rgba(255,255,255,0.1)] px-4"
            />
            <button className="bg-[rgba(255,255,255,0.1)]  outline-1 outline-[rgba(255,255,255,0.1)] rounded-r-full px-4 py-2">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {suggestions.length > 0 && setSuggestions && (
            <div className="w-[35rem] overflow-hidden rounded-lg border border-gray-800 absolute bg-black z-20">
              <ul>
                {suggestions.map((s, index) => (
                  <li
                    key={index}
                    className="px-5 py-1 bg-black hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    <i className="fa-solid fa-magnifying-glass text-xs mr-3"></i>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <i className="mx-4 ml-0" class="fa-solid fa-ellipsis-vertical"></i>
          <button className="rounded-full border-1 border-white mx-4 py-1 px-4">
            <i className="fa-regular fa-circle-user"></i> Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head;
