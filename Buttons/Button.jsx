/**
 * @author 
 * @file 按钮
 * @param type = 'inline' {props} 次要按钮，默认为蓝色主要按钮
 * @param disabled {props} 禁用按钮。
 * @param color {props} 颜色，默认蓝色，可选minor
 * @param onClick 给button绑定的点击函数
 */
import React from 'react'
import classNames from 'classnames'
import './Button.css'
class Button extends React.Component {
  constructor () {
    super()
    this.onClick = this.onClick.bind(this)
  }
  onClick (e) {
    if (this.props.disabled) {
      return
    }
    if (this.props.onClick) {
      this.props.onClick(e)
    }
  }

  render () {
    const { type, disabled, color } = this.props
    const className = classNames(
      className,
      `${type === 'inline' ? 'btn-inline' : 'btn-block'}`,
      `btn${color === 'minor' ? 'type' : ''}-color`,
      `${disabled ? 'btn-disabled' : ''}`
    )
    return <button
      className={className}
      disabled={disabled ? 'disabled' : ''}
      onClick={this.onClick}
    >
      {this.props.children}
    </button>
  }
}

export default Button
