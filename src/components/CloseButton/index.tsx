import closeIcon from "../../assets/close.svg";
import styles from "./CloseButton.module.scss";

const CloseButton = () => {
  return (
    <button type="button" className={styles.button} aria-label="Close">
      <img src={closeIcon} role="presentation" height={24} />
    </button>
  );
};

export default CloseButton;
