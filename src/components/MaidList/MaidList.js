import {
  MaidListService,
  FindMaidByNameService,
  FindMaidByLanguageService,
  filterMaidList,
} from "../../service/maidService";
import { useEffect, useState } from "react";
import "./MaidList.scss";
import { MaidDetail } from "../MaidList/MaidDetail";
import ReactPaginate from "react-paginate";
export default function MaidList() {
  const [maidList, setMaidList] = useState([]);
  const [nameSearch, setNameSearch] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentMaid, setCurrentMaid] = useState({}); //[{}
  const [page, setPage] = useState(1);
  const limit = 6;
  const [totalPage, setTotalPage] = useState(1);
  const [language_name, setLanguage_name] = useState("");
  const [experienceValue, setExperienceValue] = useState({
    min: 0,
    max: 0,
  });
  const [priceValue, setPriceValue] = useState({
    min: 0,
    max: 0,
  });
  const [ratingValue, setRatingValue] = useState({
    min: 0,
    max: 0,
  });

  const defaulIsFilter = {
    experience: false,
    price: false,
    rating: false,
    language: false,
  };
  const defaultFilterField = {
    experience: {
      on: false,
      min: 0,
      max: 0,
    },
    price: {
      on: false,
      min: 0,
      max: 0,
    },
    rating: {
      on: false,
      min: 0,
      max: 0,
    },
    language: {
      on: false,
      language: "",
    },
  };
  const [filterField, setFilterField] = useState(defaultFilterField);
  const [isFilter, setIsFilter] = useState(defaulIsFilter); //[{}
  const getMaidList = async () => {
    const res = await MaidListService(limit, page);
    setMaidList(res.DT.maidList);
    setTotalPage(res.DT.totalPage);
  };
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };
  useEffect(() => {
    getMaidList();
  }, [page]);

  useEffect(() => {
    setFilterField({
      experience: {
        on: isFilter.experience,
        min: experienceValue.min,
        max: experienceValue.max,
      },
      price: {
        on: isFilter.price,
        min: priceValue.min,
        max: priceValue.max,
      },
      rating: {
        on: isFilter.rating,
        min: ratingValue.min,
        max: ratingValue.max,
      },
      language: {
        on: isFilter.language,
        language: language_name,
      },
    });
  }, [isFilter, experienceValue, priceValue, ratingValue, language_name]);

  const findMaidByName = async (name) => {
    const res = await FindMaidByNameService(name);
    setMaidList(res.DT);
  };

  const handleModal = () => {
    setIsShowModal(true);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  const handleImageClick = (e, maid) => {
    handleModal();
    setCurrentMaid(maid);
  };
  const handleFilterService = async () => {
    console.log(filterField);
    const res = await filterMaidList(filterField);
    setMaidList(res.DT);
  };
  const handleFilter = (e) => {
    const { value, checked } = e.target;
    const newIsFilter = { ...isFilter, [value]: checked };
    setIsFilter(newIsFilter);
  };

  return (
    <>
      <div id="maid-container" className="h-full">
        <div className="flex w-full justify-center z-50">
          <div className="fixed text-black text-[20px] z-50 top-[7.5px]  w-[400px] rounded-3xl bg-white h-[57.5px]">
            <div className="flex flex-row items-center h-full w-full px-4">
              <label htmlFor="search-input" className="font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </label>
              <div className="h-full w-full flex items-center">
                <input
                  id="search-input"
                  type="text"
                  placeholder="検索"
                  className="w-full h-full px-2 outline-none rounded-xl placeholder-black text-black text-[30px] font-bold"
                  onChange={(e) => {
                    setNameSearch(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row h-full">
          <div className="flex flex-col w-[20%] h-full items-center border-r-[5px] border-black">
            <div className="border-b-[3px] border-black w-full text-center text-[40px] font-bold">
              <span>評価</span>
            </div>
            <div className="h-[31%] border-b-[3px] border-black w-full">
              <div className="flex flex-col mt-5 items-center h-full w-full font-bold text-[30px] gap-4">
                <div className="flex flex-row w-8/12 items-center">
                  <div className="w-2/12">
                    <div className="bg-[#D9D9D9] w-[24px] h-[24px]">
                      <label htmlFor="nearest" className="text-black">
                        {isFilter.nearest ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : null}
                        <input
                          id="nearest"
                          type="checkbox"
                          className="invisible"
                          value="nearest"
                          onChange={handleFilter}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grow">
                    <label htmlFor="nearest">最も近所</label>
                  </div>
                </div>
                <div className="flex flex-row w-8/12 items-center">
                  <div className="w-2/12">
                    <div className="bg-[#D9D9D9] w-[24px] h-[24px]">
                      <label htmlFor="ratingDecrease" className="text-black">
                        {isFilter.ratingDecrease ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : null}
                        <input
                          id="ratingDecrease"
                          type="checkbox"
                          className="invisible"
                          value="ratingDecrease"
                          onChange={handleFilter}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grow">
                    <label htmlFor="ratingDecrease" className="flex flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="flex flex-row w-8/12 items-center">
                  <div className="w-2/12">
                    <div className="bg-[#D9D9D9] w-[24px] h-[24px]">
                      <label htmlFor="ratingIncrease" className="text-black">
                        {isFilter.ratingIncrease ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : null}
                        <input
                          id="ratingIncrease"
                          type="checkbox"
                          className="invisible"
                          value="ratingIncrease"
                          onChange={handleFilter}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grow">
                    <label htmlFor="ratingIncrease" className="flex flex-row">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[3px] border-black w-full text-center text-[40px] font-bold">
              <span>スキル</span>
            </div>
            <div className="h-[33%] border-b-[3px] border-black w-full">
              <div className="flex flex-col mt-5 items-center h-full w-full font-bold text-[30px] gap-4">
                <div className="flex flex-row w-8/12 items-center">
                  <div className="w-2/12">
                    <div className="bg-[#D9D9D9] w-[24px] h-[24px]">
                      <label htmlFor="electrical" className="text-black">
                        {isFilter.electrical ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : null}
                        <input
                          id="electrical"
                          type="checkbox"
                          className="invisible"
                          value="electrical"
                          onChange={handleFilter}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grow">
                    <label htmlFor="electrical">電子修理</label>
                  </div>
                </div>
                <div className="flex flex-row w-8/12 items-center">
                  <div className="w-2/12">
                    <div className="bg-[#D9D9D9] w-[24px] h-[24px]">
                      <label htmlFor="food" className="text-black">
                        {isFilter.food ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : null}
                        <input
                          id="food"
                          type="checkbox"
                          className="invisible"
                          value="food"
                          onChange={handleFilter}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grow">
                    <label htmlFor="food">料理</label>
                  </div>
                </div>
                <div className="flex flex-row w-8/12 items-center">
                  <div className="w-2/12">
                    <div className="bg-[#D9D9D9] w-[24px] h-[24px]">
                      <label htmlFor="care" className="text-black">
                        {isFilter.care ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        ) : null}
                        <input
                          id="care"
                          type="checkbox"
                          className="invisible"
                          value="care"
                          onChange={handleFilter}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="grow">
                    <label htmlFor="care">赤ちゃん世話</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-[3px] border-black w-full text-center text-[40px] font-bold">
              <span>言語</span>
            </div>
            <div className="border-b-[3px] border-black w-full grow">
              <div className="text-center">
                <span>
                  <select
                    onChange={(e) => setLanguage_name(e.target.value)}
                    className="py-[10px] pl-[10px] pr-[90px] text-[30px] bg-gray-200 mt-4 font-bold"
                  >
                    <option value="English">英語</option>
                    <option value="Vietnamese">ベトナム語</option>
                    <option value="Chinese">中国語</option>
                    <option defaultValue="Japanese">日本語</option>
                    <option value="Korean">韓国語</option>
                    <option value="French">フランス語</option>
                    <option value="German">ドイツ語</option>
                    <option value="Spanish">スペイン語</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col grow items-center">
            <div className=" grid-cols-3 grid h-full w-full">
              {maidList.map((maid, id) => {
                return (
                  <div
                    className="card-container border-r border-b border-black"
                    key={id}
                  >
                    <div
                      className="card-content w-full h-[370px] bg-cover"
                      style={{
                        backgroundImage: `url(${maid.avatar_url})`,
                      }}
                    ></div>
                    <div className="card-footer text-md-center">
                      <h6>{maid.first_name + " " + maid.last_name}</h6>
                      <button className="text-[20px] bg-[#3367D6] text-white font-bold p-2 m-3 rounded-2xl">
                        レクエストを作成
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              marginPagesDisplayed={2}
              pageCount={totalPage}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel=".."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              style={{ color: "black" }}
            />
          </div>
        </div>
      </div>
      <MaidDetail
        show={isShowModal}
        handleClose={handleCloseModal}
        maid={currentMaid}
      />
    </>
  );
}
