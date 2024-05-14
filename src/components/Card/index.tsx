import { FormProvider, useForm } from "react-hook-form";
import givingBlock from "../../assets/giving-block.svg";
import { FormSchema } from "../../models/form";
import Button from "../Button";
import CloseButton from "../CloseButton";
import InputDate from "../InputDate";
import InputNumber from "../InputNumber";
import Summary from "../Summary";
import styles from "./Card.module.scss";

const Card = () => {
  const methods = useForm<FormSchema>();

  const { handleSubmit } = methods;

  return (
    <div className={styles.backdrop}>
      <article className={styles.card}>
        <section className={styles.header}>
          <img
            src={givingBlock}
            role="presentation"
            aria-label="giving block logo - heart over group of people"
          />
          <hgroup>
            <h1>The giving block</h1>
            <p>Set up your donation goal!</p>
          </hgroup>
          <CloseButton />
        </section>
        <section className={styles.content}>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit((values) => console.log(values))}>
              <div className={styles.inputs}>
                <InputNumber />
                <InputDate />
              </div>
              <Summary />
              <div className={styles.buttons}>
                <Button
                  type="button"
                  variant="secondary"
                  className={styles.cancelButton}
                >
                  Cancel
                </Button>
                <Button type="submit">Continue</Button>
              </div>
            </form>
          </FormProvider>
        </section>
      </article>
    </div>
  );
};

export default Card;
