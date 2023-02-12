const Modal = props =>{

    return (
        <div className={`modal__wrapper ${props.isOpend ? 'open' : 'close'}`} style={{...props.style}}>
<div className="modal__body">
<div className="modal__close" onClick={props.onModalClose}>x</div>
<h2>{props.title}</h2>
<hr/>
{props.children}

</div>
        </div>
    )
}

export default Modal;