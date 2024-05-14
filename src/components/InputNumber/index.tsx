import { ChangeEventHandler, useState } from "react";
import { useFormContext } from "react-hook-form";
import dollar from "../../assets/dollar.svg";
import { getCurrencyFormat, stripCurrencyCharacters } from "../../lib/currency";
import { FormSchema } from "../../models/form";
import styles from "./InputNumber.module.scss";

const InputNumber = () => {
  const [value, setValue] = useState("");
  const { register } = useFormContext<FormSchema>();
  const { onChange, onBlur, ...rest } = register("donation");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { target } = e;
    const update = target.value.replace(/[^.\d]/g, "");
    e.target.value = update;
    setValue(update);
    onChange(e);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="donation" className={styles.label}>
        I can donate
      </label>
      <div className={styles.box}>
        <div className={styles.addonLeft}>
          <img src={dollar} aria-label="dollar currency" />
        </div>
        <input
          {...rest}
          className={styles.input}
          id="donation"
          type="text"
          placeholder="0.00"
          inputMode="numeric"
          onFocus={() => {
            setValue(stripCurrencyCharacters(value));
          }}
          onBlur={(e) => {
            const fixedToTwo = parseFloat(value).toFixed(2).toString();
            setValue(getCurrencyFormat(fixedToTwo));
            onBlur(e);
          }}
          maxLength={12}
          onChange={handleChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default InputNumber;
