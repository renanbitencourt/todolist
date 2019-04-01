'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import TodoPage from './pages/todo-page'
import { ToastContainer, toast } from 'react-toastify'

const ENDPOINT = 'https://todowebservice.herokuapp.com/api/todos'

class App extends Component {
  constructor () {
    super()
    this.state = {
      isFetching: false,
      isEditing: false,
      todoList: [],
      description: '',
      done: false,
      id: ''
    }

    this.save = this.save.bind(this)
    this.clear = this.clear.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.setUpdatePropDescription = this.setUpdatePropDescription.bind(this)
    this.setUpdatePropDone = this.setUpdatePropDone.bind(this)
  }

  componentWillMount () {
    this.fetchTodos()
  }

  fetchTodos () {
    this.setState({ isFetching: true })

    ajax().get(ENDPOINT).then((result) => {
      this.setState({ ...this.state, todoList: result })
    }).always(() => this.setState({ isFetching: false }))
  }

  update = (todo) => () => {
    this.setState({ ...this.state, description: todo.description, done: todo.done, id: todo._id, isEditing: true })
  }

  remove = (todo) => () => {
    ajax().delete(ENDPOINT + '/' + todo._id).then(() => {
      this.fetchTodos()
      toast.success('Registro \'' + todo.description + '\' removido com Sucesso!')
    })
    .always(() => this.clear())
    .catch((err) => toast.error(err))
  }

  setUpdatePropDescription (e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  setUpdatePropDone (e) {
    this.setState({ ...this.state, done: e.target.checked });
  }

  save () {
    let { id, description, done } = this.state
    let todo = { description, done }
    
    if(!description){
      toast.error('Erro ao inserir registro!')
      return
    }

    let service = this.state.isEditing ? ajax().put(ENDPOINT + '/' + id, todo) : ajax().post(ENDPOINT, todo)

    service.then(() => {
      this.fetchTodos()
      this.clear()
      toast.success('Operação realizada com Sucesso!')
    })
    .always(() => this.clear())
    .catch((err) => console.log(err))
  }

  clear () {
    this.setState({ ...this.state, description: '', done: false, id: '', isEditing: false });
  }

  render () {
    let { todoList, isFetching } = this.state

    return (
      <div>
        <ToastContainer />
        
        <TodoPage
          description={this.state.description}
          done={this.state.done}
          setPropDesc={this.setUpdatePropDescription}
          setPropDone={this.setUpdatePropDone}
          save={this.save}
          clear={this.clear}
          todoList={todoList}
          update={this.update}
          remove={this.remove}
          isFetching={isFetching}
        />
      </div>
    )
  }
}

export default App
