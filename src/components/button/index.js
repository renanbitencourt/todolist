import React from 'react'

const Button = ({
  eventClick,
  icon,
  color
}) => (
  <button type='button' className={`btn btn-${color}`} onClick={eventClick}><i className={`fas fa-${icon}`} /></button>
)

export default Button
