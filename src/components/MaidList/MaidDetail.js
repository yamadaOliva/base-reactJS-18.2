import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import "./MaidDetail.scss";
const MaidDetail = (props) => {
  const [dataRaw, setDataRaw] = useState({});
  useEffect(() => {
    setDataRaw(props.maid);
    console.log("=>>", props.maid);
  }, [props.maid]);
  return (
    <>
      <div className="">
        <Modal show={props.show} onHide={props.handleClose} className="modal-custom">
          <Modal.Header closeButton>
            <Modal.Title>MaidProfile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="col-9 d-flex row">
                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>Last Name</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.last_name}</label>
                  </div>
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>First Name</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.first_name}</label>
                  </div>
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>Phone Number</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.phone_number}</label>
                  </div>
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>Address</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.address}</label>
                  </div>
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>City</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.city}</label>
                  </div>
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>country</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.country}</label>
                  </div>
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>noto</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.description}</label>
                  </div>
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>experience</label>
                  </div>
                  <div className="col-8">
                    <label>{dataRaw.experience + " years"}</label>
                  </div> 
                </div>

                <div className="p-2 d-flex">
                  <div className="col-4">
                    <label>language</label>
                  </div>
                  <div className="col-8">
                    {
                      (dataRaw.Languages || []).map((item) => {
                        return <label>{item.language_name}</label>
                      }
                      )
                    }
                  </div> 
                </div>

              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export { MaidDetail };
