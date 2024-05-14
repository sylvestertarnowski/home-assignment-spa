import { useMemo } from "react";
import { useFormContext } from "react-hook-form";
import chevronLeft from "../../assets/chevron-left.svg";
import chevronRight from "../../assets/chevron-right.svg";
import getNextMonthDate from "../../lib/getNextMonthDate";
import styles from "./InputDate.module.scss";

const InputDate = () => {
  const { register, watch, setValue } = useFormContext();

  const { date, dateAsString } = useMemo(() => {
    const date = getNextMonthDate();
    const dateAsString = date.toISOString().split("T")[0];
    return { date, dateAsString };
  }, []);

  const dateInputValue: Date = watch("date", date);

  const onPreviousMonth = () => {
    const inputYear = dateInputValue.getFullYear();
    const yearNow = new Date().getFullYear();
    const inputMonth = dateInputValue.getMonth();
    const currentMonth = new Date().getMonth();

    if (inputYear === yearNow && inputMonth === currentMonth + 1) {
      return;
    }

    return setValue("date", new Date(inputYear, inputMonth - 1, 2));
  };

  const onNextMonth = () => {
    setValue(
      "date",
      new Date(dateInputValue.getFullYear(), dateInputValue.getMonth() + 1, 2)
    );
  };

  return (
    <div className={styles.container}>
      <label htmlFor="date" className={styles.label}>
        Every month until
      </label>
      <div className={styles.box}>
        <button
          type="button"
          onClick={onPreviousMonth}
          className={styles.buttonLeft}
          aria-label="Previous month"
        >
          <img src={chevronLeft} role="presentation" />
        </button>
        <div className={styles.inputBox}>
          <span className={styles.month}>
            {dateInputValue.toLocaleString("default", { month: "long" })}
          </span>
          <span className={styles.year}>
            {dateInputValue.toLocaleString("default", { year: "numeric" })}
          </span>
        </div>
        <input
          className={styles.input}
          id="date"
          type="date"
          min={dateAsString}
          defaultValue={dateAsString}
          onClick={(e) => e.currentTarget?.showPicker()}
          {...register("date", { valueAsDate: true })}
        />
        <button
          type="button"
          className={styles.buttonRight}
          onClick={onNextMonth}
          aria-label="Next month"
        >
          <img src={chevronRight} role="presentation" />
        </button>
      </div>
    </div>
  );
};

export default InputDate;
