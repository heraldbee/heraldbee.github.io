// Core
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheet
import styles from './index.module.scss';

const Column = ({ title, listItems }) =>
    <div className={`${styles.container} column is-4`}>
        <h3 className={`${styles.title} title is-family-secondary is-size-6`}>{title}</h3>
        <ul className={`${styles.list}`}>
            {
                listItems.map((item, i) => {
                    console.log(item);
                    return (
                        <li key={i}>
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    </div>

Column.propTypes = {
    title: PropTypes.string,
    listItems: PropTypes.arrayOf(PropTypes.node)
};

export default Column;