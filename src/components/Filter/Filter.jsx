import React, { Component } from 'react';
import styles from './Filter.module.css';
import stylesApp from '../../components/App.module.css';
import propTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className={styles.filter_wrapper}>
        <label className={stylesApp.label_input}>
          Filter
          <input
            className={stylesApp.field}
            type="text"
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}
export default Filter;

Filter.propTypes = {
  value: propTypes.string,
};
