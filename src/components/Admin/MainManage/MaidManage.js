//scss
import Header from "../../Header/Header";
import "./MaidManage.scss";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import InforMaid from "./InforMaid";
import { getProfileByPage } from "../../../service/userProfileService";
import {
  MaidListService,
  getMaidByPrice,
  getMaidByRating,
} from "../../../service/maidService";
import ReactPaginate from "react-paginate";
import { set } from "lodash";
import { blockedService, unblockedService } from "../../../service/authservice";
import { async } from "q";
import { FindMaidByNameService } from "../../../service/maidService";
const MaidManage = () => {
  const [filterID, setFilterID] = useState(true);
  const [filterPrice, setFilterPrice] = useState(false);
  const [filterRating, setFilterRating] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [nameFind, setNameFind] = useState("");
  const [listMaid, setlistMaid] = useState([
    {
      id: 10,
      name: "Nguyen Van A",
      numberphone: "090-1234-5678",
      address: "東京都",
      exp: "1年",
      skill: "掃除、洗濯、料理",
      authentication: "認証済み",
      price: "¥ 1,000",
      active: true,
    },
    {
      id: 21,
      name: "Nguyen Van B",
      numberphone: "090-1234-5678",
      address: "東京都",
      exp: "2年",
      skill: "掃除、洗濯、料理",
      authentication: "認証済み",
      price: "¥ 2,000",
      active: true,
    },
    {
      id: 31,
      name: "Nguyen Van C",
      numberphone: "090-1234-5678",
      address: "東京都",
      exp: "3年",
      skill: "掃除、洗濯、料理",
      authentication: "認証済み",
      price: "¥ 3,000",
      active: false,
    },
    {
      id: 41,
      name: "Nguyen Van D",
      numberphone: "090-1234-5678",
      address: "東京都",
      exp: "4年",
      skill: "掃除、洗濯、料理",
      authentication: "認証済み",
      price: "¥ 4,000",
      active: true,
    },
    {
      id: 51,
      name: "Nguyen Van E",
      numberphone: "090-1234-5678",
      address: "東京都",
      exp: "5年",
      skill: "掃除、洗濯、料理",
      authentication: "認証済み",
      price: "¥ 5,000",
      active: false,
    },
  ]);
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };
  useEffect(() => {
    if (filterID) {
      getProfileByPageSV(page, limit);
    }
    if (filterPrice) {
      getMaidByPriceSV();
    }
    if (filterRating) {
      getMaidByRatingSV();
    }
    if (isSearch) {
      findMaidByName();
    }
  }, [filterID, filterPrice, filterRating, isSearch]);
  const [switch_TF, setSwitch_TF] = useState(false);
  const [totalBlock, setTotalBlock] = useState(0);
  const [totalMaid, setTotalMaid] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [isHideBlock, setIsHideBlock] = useState(false);
  const getProfileByPageSV = async (page, limit) => {
    const res = await MaidListService(limit, page);
    console.log(res);
    setlistMaid(res.DT?.maidList);
    setTotalPage(res.DT?.totalPage);
    setTotalBlock(res.DT?.blocked);
    setTotalMaid(res.DT?.totalRows);
  };
  const getMaidByPriceSV = async () => {
    try {
      const res = await getMaidByPrice(page, limit);

      setlistMaid(res.DT?.maidList);
      setTotalPage(res.DT?.totalPage);
      setTotalBlock(res.DT?.blocked);
      setTotalMaid(res.DT?.totalRows);
    } catch (error) {
      console.log(error);
    }
  };
  const getMaidByRatingSV = async () => {
    try {
      const res = await getMaidByRating(page, limit);
      setlistMaid(res.DT?.maidList);
      setTotalPage(res.DT?.totalPage);
      setTotalBlock(res.DT?.blocked);
      setTotalMaid(res.DT?.totalRows);
    } catch (error) {
      console.log(error);
    }
  };
  const findMaidByName = async () => {
    try {
      const res = await FindMaidByNameService(nameFind, limit, page);
      console.log(res);
      setlistMaid(res.DT?.maidList);
      setTotalPage(res.DT?.totalPage);
      setTotalBlock(res.DT?.blocked);
      setTotalMaid(res.DT?.totalRows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (filterID) {
      getProfileByPageSV(page, limit);
    }
    if (filterPrice) {
      getMaidByPriceSV();
    }
    if (filterRating) {
      getMaidByRatingSV();
    }
    if (isSearch) {
      findMaidByName();
    }
  }, [page, limit, switch_TF]);

  // set value of block
  const updateActiveStatus = async (id, checked) => {
    if (checked) console.log("dcm Vinh=>", id, checked);
    try {
      if (!checked) {
        const res = await blockedService(id);
        console.log("dcm Vinh=>", res);
        if (res.EC == 200) setSwitch_TF(!switch_TF);
      } else {
        const res = await unblockedService(id);
        console.log("dcm Vinh=>", res);
        if (res.EC == 200) setSwitch_TF(!switch_TF);
      }
    } catch (error) {
      console.log(error);
    }

    setlistMaid((prevlistMaid) => {
      const updatedlistMaid = prevlistMaid.map((maid) => {
        if (maid.id === id) {
          return {
            ...maid,
            active: checked,
          };
        }
        return maid;
      });
      return updatedlistMaid;
    });
  };

  //onclick btn hide blocked maid
  const hideBlockedMaid = () => {
    setIsHideBlock(true);
  };

  const showBlockedMaid = () => {
    setIsHideBlock(false);
  };
  const hendleSearch = () => {
    setIsSearch(true);
    setFilterID(false);
    setFilterPrice(false);
    setFilterRating(false);
  };
  const hendleFilterID = () => {
    setFilterID(true);
    setFilterPrice(false);
    setFilterRating(false);
    setIsSearch(false);
  };
  const hendleFilterPrice = () => {
    setFilterID(false);
    setFilterPrice(true);
    setFilterRating(false);
    setIsSearch(false);
  };
  const hendleFilterRating = () => {
    setFilterID(false);
    setFilterPrice(false);
    setFilterRating(true);
    setIsSearch(false);
  };
  return (
    <div className="container-maidmanage" key={"maid"}>
      <div className="header-page">
        <Header />
      </div>
      <div className="content-page">
        <div className="content-page__left">
          <div className="search-maid-table-maid">
            <div className="search-maid-table__title">メイド管理</div>
            <div className="search-maid-table__search">
              <FaSearch size={25} className="icon-search" 
              onClick={() => hendleSearch()}
              />
              <input
                type="text"
                placeholder="メイド名"
                onChange={(e) => {
                  setNameFind(e.target.value);
                }}
              />
            </div>
            <div className="search-maid-table__infor">
              <div className="search-maid-table__infor__detail">
                総メイド数: {totalMaid}
              </div>
              <div className="search-maid-table__infor__detail">
                禁止されたメイド: {totalBlock}
              </div>
            </div>
            <div className="search-maid-table__btn">
              <div
                className="search-maid-table__btn__sort"
                onClick={() => hendleFilterID()}
              >
                IDで並べ替える
              </div>
              <div className="search-maid-table__btn__sort"
                onClick={() => hendleFilterPrice()}
              >

                価格で並べ替える
              </div>
              <div className="search-maid-table__btn__sort"
                onClick={() => hendleFilterRating()} 
              >
                評価で並べ替える
              </div>
              {/* <div className="search-maid-table__btn__sort">
                                    時間順で並べ替える
                                </div> */}
              {/* check isHideBlock */}
              {isHideBlock === false ? (
                <div
                  className="search-maid-table__btn__block"
                  onClick={() => hideBlockedMaid()}
                >
                  禁止を隠す
                </div>
              ) : (
                <div
                  className="search-maid-table__btn__block"
                  onClick={() => showBlockedMaid()}
                >
                  全部を表示する
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="content-page__right">
          <div className="maid__manage__contain">
            {isHideBlock === false
              ? listMaid?.map((maid, index) => {
                  return (
                    <InforMaid
                      id={maid.UserId}
                      name={maid.first_name + " " + maid.last_name}
                      numberphone={maid.phone_number}
                      address={maid.address}
                      exp={maid.experience}
                      skill={maid.skills}
                      authentication={maid.ceftification}
                      price={maid.price}
                      active={maid.User?.active}
                      updateActiveStatus={updateActiveStatus}
                      totalBlock={totalBlock}
                      setTotalBlock={setTotalBlock}
                      rating={maid.rating}
                      avatar={maid.avatar_url}
                    />
                  );
                })
              : listMaid
                  .filter((maid) => maid.User.active === true)
                  .map((maid, index) => {
                    return (
                      <InforMaid
                        id={maid.id}
                        name={maid.name}
                        numberphone={maid.numberphone}
                        address={maid.address}
                        exp={maid.exp}
                        skill={maid.skill}
                        authentication={maid.ceftification}
                        price={maid.price}
                        active={maid.User?.active}
                        updateActiveStatus={updateActiveStatus}
                        totalBlock={totalBlock}
                        setTotalBlock={setTotalBlock}
                        avatar={maid.avatar_url}
                      />
                    );
                  })}
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
    </div>
  );
};

export default MaidManage;
