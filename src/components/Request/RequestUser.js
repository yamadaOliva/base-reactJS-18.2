import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import {Items1, Items2, Items3} from "./Items";
import {FaEye} from "react-icons/fa";
import {useState} from "react";
import "./RequestList.scss"
import Request1 from "./Request1";
import Request2 from "./Request2";

export default function RequesetUser() {

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    const[buttonPopup1, setButtonPopup1] = useState(false);
    const[buttonPopup2, setButtonPopup2] = useState(false);

    const preItem1 = () => {
        if(index1 > 0)
            setIndex1(index1 - 1);
    }
    const nextItem1 = () => {
        if(index1 <= Items1.length - 2)
            setIndex1(index1 + 1);
    }
    const preItem2 = () => {
        if(index2 > 0)
            setIndex2(index2 - 1);
    }
    const nextItem2 = () => {
        if(index2 <= Items2.length - 2)
            setIndex2(index2 + 1);
    }



    function Show(item, index, cline){
        var items = [];
        for(var i = index; i < item.length ; i++ ){

            items.push(
                <div className="item">
                    <h1 className="name">{item[i].name}</h1>
                    <h1 className="date">{item[i].date}</h1>
                    <h1 className="cost">{item[i].cost}</h1>
                    <FaEye className="icon-eye" onClick={() => ShowPopup(cline)}/>
                </div>
            );
        }
        return items;
    }


    function ShowPopup(cline){
        switch(cline){
            case 1:
                setButtonPopup1(true);
                break;
            case 2:
                setButtonPopup2(true);
                break;
        }
    }

    return (
        <div className={'req-list-container'}>
            <h1 className={'req-title'}>送信したリクエスト</h1>
            <div className="carousel-rq">
                <img src={window.location.origin + "/images/pre.png"} alt="" className="icon-pn" onClick={preItem1}/>
                <div className="inner-carousel">
                    {
                        Show(Items1, index1, 1)
                    }
                </div>
                <img src={window.location.origin + "/images/next.png"} alt="" className="icon-pn" onClick={nextItem1}/>
            </div>
            <h1 className={'req-title'}>完成したリクエスト</h1>
            <div className="carousel-rq">
                <img src={window.location.origin + "/images/pre.png"} alt="" className="icon-pn" onClick={preItem2}/>
                <div className="inner-carousel">
                    {
                        Show(Items2, index2, 1)
                    }
                </div>
                <img src={window.location.origin + "/images/next.png"} alt="" className="icon-pn" onClick={nextItem2}/>
            </div>
            <Request1 trigger={buttonPopup1} setTrigger={setButtonPopup1}>
            </Request1>
            <Request2 trigger={buttonPopup2} setTrigger={setButtonPopup2}>
            </Request2>
        </div>
    )
}