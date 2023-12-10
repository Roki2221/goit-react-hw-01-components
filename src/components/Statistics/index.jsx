import React from 'react';
import css from './style.module.css';

function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title.toUpperCase()}</h2>}
      <ul className={css.stat_list}>
        {stats.map(el => (
          <li
            style={{
              backgroundColor: `rgba(165, 42, 42, ${el.percentage / 100})`,
            }}
            className={css.item}
            key={el.id}
          >
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
