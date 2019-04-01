import React from 'react'

const InputCheck = ({
  checked,
  setProp
}) => (
  <input type='checkbox' checked={checked} onChange={setProp} />
)

export default InputCheck
