import React from 'react'
import Button from '../button'

const Table = ({
  update,
  remove,
  list
}) => (
  <div>
    <table className='table table-striped table-sm'>
      <thead>
        <tr>
          <th>Description</th>
          <th>Done</th>
          <th>Created At</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {list.map((todo, index) =>
          <tr key={index}>
            <td>{todo.description}</td>
            <td><input type='checkbox' checked={todo.done} disabled='true' /></td>
            <td>{new Date(todo.createdAt).toLocaleDateString('pt-BR')}</td>
            <td>
              <Button eventClick={update(todo)} icon='edit' color='primary' />
            </td>
            <td>
              <Button eventClick={remove(todo)} icon='trash' color='danger' />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
)

export default Table
