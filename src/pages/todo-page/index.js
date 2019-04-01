import React from 'react'
import Table from '../../components/table'
import Form from '../../components/form'

const TodoPage = ({
  description,
  done,
  setPropDesc,
  setPropDone,
  save,
  clear,
  todoList,
  update,
  remove,
  isFetching
}) => (
  <div>
    <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
      <h1 className='text-white'>TodoList</h1>
    </nav>

    <div className='container mt-5 bg-light border'>
      <Form
        description={description}
        done={done}
        setPropDesc={setPropDesc}
        setPropDone={setPropDone}
        save={save}
        clear={clear} />

      {isFetching && <div className='mt-5 text-center'>Loading...</div>}
      {!isFetching && <Table list={todoList} update={update} remove={remove} />}
    </div>
  </div>
)

export default TodoPage
