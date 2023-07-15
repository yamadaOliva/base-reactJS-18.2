import "./TestOne.scss"
import React, { useState } from "react";
import { toast } from "react-toastify";


const TestOne = () => {

    const [userList, setUserList] = useState([
        {
            id: 1,
            name: "Nguyễn Văn A",
            ngaysinh: "01/01/2000",
            mssv: "2018602666",
            email: "A.nv@sis.hust.edu.vn"
        }
    ])

    const [name, setName] = useState("")
    const [ngaysinh, setNgaysinh] = useState("")
    const [mssv, setMssv] = useState("")
    const [email, setEmail] = useState("")


    const isValidate = () => {
        if (name === "" || mssv === "") {
            toast.error("Vui lòng điền đầy đủ thông tin")
            return false
        }

        //regex email
        const regexEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === "") {
            setEmail("");
        }
        else if (!regexEmail.test(email)) {
            toast.error("Email không hợp lệ")
            return false
        }

        //validate mssv
        const regexMssv = /^[0-9]{8}$/;
        if (!regexMssv.test(mssv)) {
            toast.error("MSSV không hợp lệ")
            return false
        }

        //validate ngaysinh
        const regexNgaysinh =
            /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/](19[0-9]{2}|20[0-9]{2})$/;
        if (ngaysinh === "") {
            setNgaysinh("");
        }
        else if (!regexNgaysinh.test(ngaysinh)) {
            toast.error("Ngày sinh không hợp lệ")
            return false
        }


        return true
    }

    const addUser = () => {
        if (isValidate()) {
            const newUser = {
                id: userList.length + 1,
                name: name,
                ngaysinh: ngaysinh,
                mssv: mssv,
                email: email
            }
            setUserList([...userList, newUser])
            toast.success("Thêm thành công")
        }
        console.log(userList)
    }

    const deleteUser = (id) => {
        const newUserList = userList.filter((user) => user.id !== id)
        setUserList(newUserList)
        toast.success("Xóa thành công")
    }

    return (
        <div className="bai1-container">
            <div className="add-user">
                <div className="fill-infor">
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control input-form"
                                placeholder="MSSV*"
                                onChange={(e) => setMssv(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control input-form"
                                placeholder="Họ và tên*"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control input-form"
                                placeholder="Ngày sinh"
                                onChange={(e) => setNgaysinh(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control input-form"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="btn btn-primary btn-add" onClick={() => addUser()}>
                    Thêm
                </div>
            </div>
            <div className="user-list">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">MSSV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Ngày sinh</th>
                            <th scope="col">Email</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList && userList.map((user, index) => {
                                return (
                                    <tr>
                                        <th scope="row">{user.id}</th>
                                        <td>{user.mssv}</td>
                                        <td>{user.name}</td>
                                        <td>{user.ngaysinh}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <div
                                                className="btn btn-danger"
                                                onClick={() => deleteUser(user.id)}
                                            > Xóa</div>
                                        </td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default TestOne;