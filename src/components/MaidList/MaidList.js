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
          <div className="col-lg-3">
            <div className="sidebar position-fixed">
              <label>Filter</label>
              <br />
              <input
                type="checkbox"
                value="experience"
                onChange={handleFilter}
              />
              Experience
              {isFilter.experience ? (
                <>
                  <br />
                  <input
                    className=""
                    type="text"
                    placeholder="min"
                    value={experienceValue.min}
                    onChange={(e) =>
                      setExperienceValue({
                        ...experienceValue,
                        min: e.target.value,
                      })
                    }
                  />{" "}
                  ~
                  <input
                    type="text"
                    placeholder="max"
                    value={experienceValue.max}
                    onChange={(e) =>
                      setExperienceValue({
                        ...experienceValue,
                        max: e.target.value,
                      })
                    }
                  />
                </>
              ) : null}
              <br />
              <input type="checkbox" value="price" onChange={handleFilter} />
              Price
              {isFilter.price ? (
                <>
                  <br />
                  <input
                    className=""
                    type="text"
                    placeholder="min"
                    value={priceValue.min}
                    onChange={(e) =>
                      setPriceValue({
                        ...priceValue,
                        min: e.target.value,
                      })
                    }
                  />{" "}
                  ~
                  <input
                    type="text"
                    placeholder="max"
                    value={priceValue.max}
                    onChange={(e) =>
                      setPriceValue({
                        ...priceValue,
                        max: e.target.value,
                      })
                    }
                  />
                </>
              ) : null}
              <br />
              <input type="checkbox" value="rating" onChange={handleFilter} />
              Rating
              {isFilter.rating ? (
                <>
                  <br />
                  <input
                    className=""
                    type="text"
                    placeholder="min"
                    value={ratingValue.min}
                    onChange={(e) =>
                      setRatingValue({
                        ...ratingValue,
                        min: e.target.value,
                      })
                    }
                  />{" "}
                  ~
                  <input
                    type="text"
                    placeholder="max"
                    value={ratingValue.max}
                    onChange={(e) =>
                      setRatingValue({
                        ...ratingValue,
                        max: e.target.value,
                      })
                    }
                  />
                </>
              ) : null}
              <br />
              <input type="checkbox" value="language" onChange={handleFilter} />
              <label>Languages</label>
              {isFilter.language ? (
                <>
                  <br />
                  <select
                    className="from-select border border-primary"
                    onChange={(e) => setLanguage_name(e.target.value)}
                  >
                    <option value="English">English</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Korean">Korean</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                    <option value="Spanish">Spanish</option>
                  </select>
                </>
              ) : null}
              <br />
              <button className="btn btn-success" onClick={handleFilterService}>
                Filter
              </button>
            </div>
          </div>
          <div className="col-lg-9 d-flex row">
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
