import givingBlock from "../../assets/giving-block.svg";
import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles.backdrop}>
      <section className={styles.card}>
        <div className={styles.header}>
          <img
            src={givingBlock}
            role="presentation"
            aria-label="giving block logo - heart over group of people"
          />
          <hgroup>
            <h1>The giving block</h1>
            <p>Set up your donation goal!</p>
          </hgroup>
        </div>
      </section>
    </div>
  );
};

export default Card;
