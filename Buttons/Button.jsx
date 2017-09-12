/**
 * @author 
 * @file 按钮
 * @param minor {props} 次要按钮，默认为蓝色主要按钮
 * @param inline {props} 行级小按钮
 * @param disabled {props} 禁用按钮。
 */
import React from 'react'
import classNames from 'classnames'
import './Button.css'
class Button extends React.Component {
  render () {
    const { minor, disabled } = this.props
    console.log(minor)
    const className = classNames(
      className,
      'btn-inline',
      `btn${minor ? '-minor' : ''}-color`,
      `${disabled ? 'btn-disabled' : ''}`
    )
    return <button className={className} disabled={disabled ? 'disabled' : ''}> 2333</button>
  }
}

export default Button