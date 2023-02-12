

const Modal = props =>{
    return (
        <div className={`modal__wrapper ${props.isOpend ? 'open' : 'close'}`}
        style={{...props.style}}>
<div className='modal__close'onClick={props.onModalClose}>x</div>
<div className='modal__body'>
    <h2> {props.title}</h2>
    <hr/>
    {props.children}
    <p></p>
</div>

        </div>
    )
}

export default Modal