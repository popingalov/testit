import s from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
const modalRoot = document.querySelector('#modal-root');
export default function Modal({
  toggle,
  url,
  nextFoto,
  obj,
  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ullam.',
}) {
  useEffect(() => {
    const handleKeyDown = e => e.code === 'Escape' && toggle();

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggle]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      toggle();
      return;
    }
    if (e.clientX > window.visualViewport.width / 2) {
      nextFoto(true);
      return;
    }
    nextFoto(false);
  };

  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={url} alt="foto" />
        <p>{text}</p>
        <p>
          Image {obj.index + 1} of {obj.length}
        </p>
      </div>
    </div>,
    modalRoot,
  );
}
