import styles from "./Statistics.module.scss";
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
          <li className={styles.item} style={{backgroundColor: `${"#" + Math.floor(Math.random() * 16777215).toString(16)}`}} key={id}>
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
}