import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CreateReportService } from "../../service/reportService";
const ReportModal = (props) => {
  const user = useSelector((state) => state.user);
  const { isShowModal, handleCloseModal, data } = props;
  const [reason, setReason] = useState("");
  const [title, setTitle] = useState("");
  const handleCreateReport = async () => {
    if (user.username === "") {
      toast.error("Đăng nhập để báo cáo");
      return;
    }
    try {
      const response = await CreateReportService({
        user_id: user.id,
        reported_id: data,
        reason: title + ":::" + reason,
      });
      if (+response.EC == 200) {
        toast.success("Báo cáo thành công");
        handleCloseModal();
      } else {
        toast.error(response.EM);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <Modal show={isShowModal} onHide={handleCloseModal}>
      <div className="relative">
        <button className="h-5 w-5 top-0 right-0 absolute bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={handleCloseModal}
          >
            <path
              fillRule="evenodd"
              d="M10.707 10l4.147-4.146a.5.5 0 10-.708-.708L10 9.293 5.854 5.147a.5.5 0 00-.708.708L9.293 10l-4.147 4.146a.5.5 0 10.708.708L10 10.707l4.146 4.147a.5.5 0 00.708-.708L10.707 10z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex flex-col gap-1 my-3 px-2">
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold">Tiêu đề</label>
            <input
              className="border-2 border-gray-300 rounded-lg p-2"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold">Nội dung báo cáo</label>
            <textarea
              className="border-2 border-gray-300 rounded-lg p-2"
              onChange={(e) => setReason(e.target.value)}
              value={reason}
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              className="bg-red-500 text-white rounded-lg p-2"
              onClick={handleCreateReport}
            >
              Gửi đi
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReportModal;
