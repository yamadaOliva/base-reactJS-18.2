import Modal from "react-bootstrap/Modal";

const ReportModal = (props) => {
  const { isShowModal, handleCloseModal, data } = props;
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
            <label className="text-lg font-bold">報告のタイトル</label>
            <input className="border-2 border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg font-bold">報告の内容</label>
            <textarea className="border-2 border-gray-300 rounded-lg p-2" />
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-red-500 text-white rounded-lg p-2">
              送信する
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ReportModal;
