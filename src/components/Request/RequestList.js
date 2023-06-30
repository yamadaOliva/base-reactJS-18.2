import "./RequestList.scss"
import {FaEye} from 'react-icons/fa';
import {GrFormNext, GrFormPrevious } from 'react-icons/gr';
import {Items1, Items2, Items3} from "./Items";
import { useState } from "react";
import Request1 from "./Request1";
import Request2 from "./Request2";
import Request3 from "./Request3";


function RequestList(){

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);

    const[buttonPopup1, setButtonPopup1] = useState(false);
    const[buttonPopup2, setButtonPopup2] = useState(false);
    const[buttonPopup3, setButtonPopup3] = useState(false);

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
    const preItem3 = () => {
        if(index3 > 0)
        setIndex3(index3 - 1);
    }
    const nextItem3 = () => {
        if(index3 <= Items3.length - 2)
        setIndex3(index3 + 1);
    }
    
    
    function Show(item, index, cline){
        var items = [];
        for(var i = index; i < item.length ; i++ ){
        
        items.push(
            <div className="item"   >
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
            case 3:
                setButtonPopup3(true);
            break;

        }
    }

    return(
        
        <div className="rq-list">
            <div></div>
            <div className="title-list">
                <div className="title-inner">
                新しいリクエスト
                </div>
            </div>
            <div className="carousel-rq">
                <GrFormPrevious className="icon-pn" onClick={preItem1}/>
                <div className="inner-carousel">
                    { 
                        Show(Items1, index1, 1)
                    }
                </div>
                <GrFormNext className="icon-pn" onClick={nextItem1} />
                
            </div>
            <div className="title-list">
                <div className="title-inner">
                受け付けたリクエスト
                </div>
            </div>
            <div className="carousel-rq">
                <GrFormPrevious className="icon-pn" onClick={preItem2}/>
                <div className="inner-carousel">
                    {Show(Items2, index2, 2)}
                </div>
                <GrFormNext className="icon-pn" onClick={nextItem2}/>
            </div>
            <div className="title-list">
                <div className="title-inner">
                完成したリクエスト
                </div>
            </div>
            <div className="carousel-rq">
                <GrFormPrevious className="icon-pn" onClick={preItem3}/>
                <div className="inner-carousel">
                    {Show(Items3, index3, 3)}
                </div>
                <GrFormNext className="icon-pn" onClick={nextItem3}/>
            </div>
            <Request1 trigger={buttonPopup1} setTrigger={setButtonPopup1}>
            </Request1>
            <Request2 trigger={buttonPopup2} setTrigger={setButtonPopup2}>
            </Request2>
            <Request3 trigger={buttonPopup3} setTrigger={setButtonPopup3}>
            </Request3>
        </div>
    )
}
export default RequestList