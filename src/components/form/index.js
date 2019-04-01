import React from 'react'
import InputText from '../input/input-text'
import InputCheck from '../input/input-check'
import Button from '../button'

const Form = ({
  description,
  done,
  setPropDesc,
  setPropDone,
  save,
  clear
}) => (
  <form className='form-inline row mt-3 mb-3'>
    <div className='input-group mb-3 mr-3 ml-3' style={{ width: '100%' }}>
      <div className='input-group-prepend'>
        <div className='input-group-text'>
          <InputCheck checked={done} setProp={setPropDone} />
        </div>
      </div>
      <InputText placeholder='Description' value={description} setProp={setPropDesc} />
      <div className='input-group-append'>
        <Button eventClick={save} icon='plus' color='success' />
        <Button eventClick={clear} icon='broom' color='info' />
      </div>
    </div>
  </form>
)

export default Form
