import { MaidListService} from "../../service/maidService";
import { useEffect, useState } from "react";
export default function MaidList() {
    const [maidList,setMaidList] = useState([]);
    const getMaidList = async () =>{
        const res = await MaidListService();
        setMaidList(res.DT);
        console.log(res.DT);
    }
    useEffect( ()=>{
        getMaidList();
        console.log(maidList);
    },[])
    return(
        <div>
            <h1>Maid List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Full Name</th>
                    </tr>
                </thead>
                <tbody>
                    {maidList.map((maid)=>{
                        return(
                            <tr>
                                <td>{maid.UserId}</td>
                                <td>{maid.first_name+maid.last_name}</td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>

        </div>
    )
}   