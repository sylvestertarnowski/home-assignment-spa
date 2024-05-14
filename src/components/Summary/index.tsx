import { useWatch } from "react-hook-form";
import { getCurrencyFormat } from "../../lib/currency";
import getNextMonthDate from "../../lib/getNextMonthDate";
import styles from "./Summary.module.scss";

function monthDiff(d1: Date, d2: Date): number {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

const Summary = () => {
  const donation = useWatch({ name: "donation", defaultValue: "0" });
  const date = useWatch({ name: "date", defaultValue: getNextMonthDate() });

  const calculatedDonation = (
    monthDiff(new Date(), date) * donation || 0
  ).toFixed(2);
  const totalDonationText = `$${getCurrencyFormat(calculatedDonation)}`;
  const monthlyDonationText = `$${getCurrencyFormat(donation || "0")}`;

  const dateText = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.toLocaleString("default", { year: "numeric" })}`;

  return (
    <div className={styles.box}>
      <dl className={styles.total}>
        <dt className={styles.totalLabel}>Total amount</dt>
        <dd className={styles.totalCount}>{totalDonationText}</dd>
      </dl>
      <p className={styles.description}>
        You will be sending
        <strong> {monthlyDonationText}</strong> every month, until{" "}
        <strong>{dateText}</strong>. Thank you!
      </p>
    </div>
  );
};

export default Summary;
