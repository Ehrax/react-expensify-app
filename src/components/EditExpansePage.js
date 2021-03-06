import React from 'react'
import { connect } from 'react-redux'

import { startEditExpense, startRemoveExpense } from '../actions/expenses'

import ExpenseForm from './ExpenseForm'

export class EditExpensePage extends React.Component {
  editExpense = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense)
    this.props.history.push('/')
  }
  removeExpense = () => {
    this.props.startRemoveExpense(this.props.expense.id)
    this.props.history.push('/')
  }
  render () {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.editExpense}
        />
        <button onClick={this.removeExpense}>
          Remove
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchProps = (dispatch) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
})

export default connect(mapStateToProps, mapDispatchProps)(EditExpensePage)
