// import React, { useState, useEffect } from 'react';
// import { Modal } from 'react-bootstrap';
// import { connect } from 'react-redux'
// // import { HIDE_MODAL } from '../store/constants/actionTypes';
// import "./ModalContainer.css";

// const MODAL_TYPES = {
//   // 'CustomerListModal': modalTypes.CustomerListModal
// }

// const mapStateToProps = state => ({
//   ...state.modal
// });

// const mapDispatchToProps = dispatch => ({
//   onHide: () =>
//     dispatch({ type: "HIDE_MODAL" })
// });

// const ModalContainer = (props) => {
//   // const [modalProps, modalType] = props;
//   const modalProps = props.modalProps;
//   const modalType = props.modalType;
//   const [showModal, setShowModal] = useState(modalProps.open);

//   useEffect(() => {
//     setShowModal(modalProps.open);
//   }, [modalProps.open]);

//   const handleHide = () => {
//     props.onHide();
//   }

//   if (!modalType)
//     return null;

//   const SpecifiedModal = MODAL_TYPES[modalType]

//   return (
//     <Modal
//       show={showModal}
//       onHide={handleHide}
//       dialogClassName={modalType + " modal-override"}
//       centered
//     >

//       <Modal.Body>
//         <SpecifiedModal {...modalProps} />
//       </Modal.Body>

//     </Modal>
//   );
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer)
