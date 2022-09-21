import css from "./Statistics.module.css"
import PropTypes from 'prop-types';

export const Statistics =({title, stats}) => {
    return <section className="statistics">
    {title && (<h2 className="title">{title}</h2>)}
    <ul className={css.statList}>
      {stats.map(item => <li key={item.id} className={css.item}>
        <span className={css.label}>{item.label}</span>
        <span className={css.percentage}>{item.percentage}%</span>
      </li>)}
    </ul>
  </section>
}
Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number
        })
    )
}