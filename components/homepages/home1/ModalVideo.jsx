import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModelVideo({ handleClose, show, videoUrl }) {
  //   const [show, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="lg"
        className="videoModalSetting"
      >
        <Modal.Body>
          <video width="100%" height="100%" controls preload="none">
            <source src="/path/to/video.mp4" type="video/mp4" />
            <track
              src={`${videoUrl}`}
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModelVideo;
