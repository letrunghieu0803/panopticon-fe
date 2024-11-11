// import { Button, Modal } from 'antd';
import styles from './index.module.scss';
import type { PopUpProps } from './provider';

function PopUpContainer(props: PopUpProps) {
  const {
    title,
    content = undefined,
    onClose,
    setZIndex = 1001,
    canClose = true,
  } = props;
  return (
    <div
      className={`${styles.modalOverlay} z-[${setZIndex}]`}
      onClick={() => {
        // onClose?.();
      }}
      onKeyPress={undefined}
      role="presentation"
      style={{
        zIndex: setZIndex,
      }}
      tabIndex={-1}
    >
      <div
        className={styles.popupContainer}
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="presentation"
      >
        {canClose && (
          <div className={styles.modalHeader}>
            <div className={`${styles.label} ${styles.titlePopup}`}>
              {title}
            </div>
            <div
              className={styles.close}
              onClick={() => {
                onClose?.();
              }}
              onKeyPress={undefined}
              role="button"
              tabIndex={0}
            >
              X
            </div>
          </div>
        )}
        <div className={`${styles.modalContent}`}>{content}</div>
      </div>
    </div>
  );
}

export default PopUpContainer;
