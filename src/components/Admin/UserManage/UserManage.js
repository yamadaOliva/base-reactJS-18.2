//scss
import Header from "../../Header/Header";
import InforUser from "./InforUser";
import "./UserManage.scss";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getProfileByPage } from "../../../service/userProfileService";
import ReactPaginate from "react-paginate";
const UserManage = () => {
  const [listUser, setListUser] = useState([
    {
      id: 1,
      name: "Nguyen Van A",
      numberphone: "090-1234-5678",
      address: "東京都",
      active: false,
    },
    {
      id: 2,
      name: "Nguyen Van B",
      numberphone: "090-1234-5678",
      address: "東京都",
      active: true,
    },
    {
      id: 3,
      name: "Nguyen Van C",
      numberphone: "090-1234-5678",
      address: "東京都",
      active: false,
    },
    {
      id: 4,
      name: "Nguyen Van D",
      numberphone: "090-1234-5678",
      address: "東京都",
      active: false,
    },
    {
      id: 5,
      name: "Nguyen Van E",
      numberphone: "090-1234-5678",
      address: "東京都",
      active: false,
    },
  ]);
  const [totalBlock, setTotalBlock] = useState(
    listUser?.filter((user) => user.active === false).length
  );
  const handlePageClick = (e) => {
    setPage(e.selected + 1);
  };
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPage, setTotalPage] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0)
  const getProfileByPageSV = async (page, limit) => {
    const res = await getProfileByPage(page, limit);
    console.log(res);
    setListUser(res.DT?.userProfiles);
    setTotalPage(res.DT.totalPage);
    setTotalUsers(res.DT.totalRows);
    setTotalBlock(res.DT.blocked)
  };
  useEffect(() => {
    getProfileByPageSV(page, limit);
  }, [page, limit]);
  const [isHideBlock, setIsHideBlock] = useState(false);

  // set value of block
  const updateActiveStatus = (id, checked) => {
    setListUser((prevListUser) => {
      const updatedListUser = prevListUser?.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            active: checked,
          };
        }
        return user;
      });
      return updatedListUser;
    });
  };

  //onclick btn hide blocked user
  const hideBlockedUser = () => {
    setIsHideBlock(true);
  };

  const showBlockedUser = () => {
    setIsHideBlock(false);
  };
  

  return (
    <div className="container-usermanage" key={"user"}>
      <div className="header-page">
        <Header />
      </div>
      <div className="content-page">
        <div className="content-page__left">
          <div className="search-user-table">
            <div className="search-user-table__title">ユーザー管理</div>
            <div className="search-user-table__search">
              <FaSearch size={25} className="icon-search" />
              <input type="text" placeholder="ユーザー名" />
            </div>
            <div className="search-user-table__infor">
              <div className="search-user-table__infor__detail">
                総ユーザー数: {totalUsers}
              </div>
              <div className="search-user-table__infor__detail">
                禁止されたユーザー: {totalBlock}
              </div>
            </div>
            <div className="search-user-table__btn">
              <div className="search-user-table__btn__sort">IDで並べ替える</div>
              {/* <div className="search-user-table__btn__sort">
                                    時間順で並べ替える
                                </div> */}
              {/* check isHideBlock */}
              {isHideBlock === false ? (
                <div
                  className="search-user-table__btn__block"
                  onClick={() => hideBlockedUser()}
                >
                  禁止を隠す
                </div>
              ) : (
                <div
                  className="search-user-table__btn__block"
                  onClick={() => showBlockedUser()}
                >
                  全部を表示する
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="content-page__right">
          <div className="user__manage__contain">
            {isHideBlock === false
              ? listUser?.map((user, index) => {
                  return (
                    <InforUser
                      id={user.id}
                      name={user.last_name + " " + user.first_name}
                      numberphone={user.phone_number}
                      address={user.address}
                      active={user.User?.active}
                      updateActiveStatus={updateActiveStatus}
                      totalBlock={totalBlock}
                      setTotalBlock={setTotalBlock}
                      avatar={user.avatar_url}
                    />
                  );
                })
              : listUser
                  ?.filter((user) => user.active === true)
                  .map((user, index) => {
                    return (
                      <InforUser
                        id={user.id}
                        name={user.name}
                        numberphone={user.numberphone}
                        address={user.address}
                        active={user.User?.active}
                        updateActiveStatus={updateActiveStatus}
                        totalBlock={totalBlock}
                        setTotalBlock={setTotalBlock}
                        avatar={user.avatar_url}
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

export default UserManage;
