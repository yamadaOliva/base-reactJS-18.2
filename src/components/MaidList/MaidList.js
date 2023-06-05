import { MaidListService, FindMaidByNameService} from "../../service/maidService";
import { useEffect, useState } from "react";
import "./MaidList.scss";
import {MaidDetail} from "../MaidList/MaidDetail";
export default function MaidList() {
    const [maidList,setMaidList] = useState([]);
    const [nameSearch,setNameSearch] = useState("");
    const [isShowModal,setIsShowModal] = useState(false);
    const [currentMaid,setCurrentMaid] = useState({});//[{}
    const getMaidList = async () =>{
        const res = await MaidListService();
        setMaidList(res.DT);
        console.log(res.DT);
    } 
    useEffect( ()=>{
        getMaidList();
    },[])
    const findMaidByName = async (name) =>{
        const res = await FindMaidByNameService(name);
        setMaidList(res.DT);
    }
    

    const handleModal = () =>{
        setIsShowModal(true);
    }

    const handleCloseModal = () =>{
        setIsShowModal(false);
    }
    const handleImageClick = (e,maid) =>{
        handleModal();
        setCurrentMaid(maid);
        console.log(maid);
    }
    return(
        <>
        <div className="container">
            <input type="text" placeholder="Search by name"
            onChange={(e)=>{setNameSearch(e.target.value)}}
            />
            <button onClick={()=>{findMaidByName(nameSearch)}}>Search</button>
            <h1>Maid List</h1>
            <div className="row">
                <div className="col-lg-3 bg-success">
                    <div className="sidebar">
                        <label>Filter</label><br/>
                        <input type="radio" name="filter" value="Experience" />Experience<br/>
                        <input type="radio" name="filter" value="price" />Price<br/>
                        <input type="radio" name="filter" value="rating" />Rating<br/>
                    </div>
                </div>
                <div className="col-lg-9 bg-danger d-flex row">
                    <label>List</label>
                    {
                        maidList.map((maid)=>{
                            return(
                                <div className="card col-lg-4">
                                    <div className="card-body ">
                                       <img className="rounded img-thumbnail w-100 avatar-maid" src={maid.avatar_url}
                                        onClick={(e)=>handleImageClick(e,maid)}
                                       />
                                    </div>
                                    <div className="card-footer text-md-center">
                                        <h5>{maid.first_name + " " + maid.last_name}</h5>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
        <MaidDetail show={isShowModal} 
        handleClose={handleCloseModal} 
        maid={currentMaid}
        />
        </>
    )
}   