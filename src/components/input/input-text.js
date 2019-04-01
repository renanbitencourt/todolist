import React from 'react'

const InputText = ({
  value,
  setProp,
  placeholder
}) => (
  <input className='form-control' placeholder={placeholder} type='text' value={value} onChange={setProp} />
)

export default InputText
