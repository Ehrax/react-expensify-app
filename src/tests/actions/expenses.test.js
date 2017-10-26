import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses'
import expenses from '../fixstures/expenes'

import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}

  expenses.forEach(({ id, description, notes, amount, createdAt }) => {
    expensesData[id] = { description, notes, amount, createdAt }
  })

  database.ref('expenses').set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const id = '123abc'
  const updates = {
    description: 'coffee',
    amount: 100,
    createdAt: undefined
  }
  const action = editExpense(id, updates)

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      description: 'coffee',
      amount: 100,
      createdAt: undefined
    }
  })
})

test('should setup add expense acion object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    notes: 'This one is better',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
       ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to databse and store', (done) => {
  const store = createMockStore({})
  const expenseDefaults = {
    description: '',
    amount: 0,
    notes: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense(expenseDefaults)).then(() => {
    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })
})

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()

    expect(actions[0].toEqual({
      type: 'SET_EXPENSES',
      expenses
    }))
    done()
  })
})
