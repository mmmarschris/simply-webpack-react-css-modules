import React from 'react';
import btn from './styles.scss';

export default class CoolButton extends React.Component {
  render() {
    return (
      <a href="/about"><button className={btn.red}>{this.props.text}</button></a>
    )
  }
}