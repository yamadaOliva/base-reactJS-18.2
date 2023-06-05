import {
  MaidListService,
  FindMaidByNameService,
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
  const [limit, setLimit] = useState(30);
  const [totalPage, setTotalPage] = useState(1);
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
    console.log(maid);
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => {
            setNameSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            findMaidByName(nameSearch);
          }}
        >
          Search
        </button>
        <h1>Maid List</h1>
        <div className="row">
          <div className="col-lg-3 bg-success">
            <div className="sidebar">
              <label>Filter</label>
              <br />
              <input type="radio" name="filter" value="Experience" />
              Experience
              <br />
              <input type="radio" name="filter" value="price" />
              Price
              <br />
              <input type="radio" name="filter" value="rating" />
              Rating
              <br />
            </div>
          </div>
          <div className="col-lg-9 bg-danger d-flex row">
            <label>List</label>
            {maidList.map((maid) => {
              return (
                <div className="card col-lg-4">
                  <div className="card-body ">
                    <img
                      className="rounded img-thumbnail w-100 avatar-maid"
                      src={maid.avatar_url}
                      onClick={(e) => handleImageClick(e, maid)}
                    />
                  </div>
                  <div className="card-footer text-md-center">
                    <h5>{maid.first_name + " " + maid.last_name}</h5>
                  </div>
                </div>
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
