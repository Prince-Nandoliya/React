import { createContext, useReducer } from "react";

export const expenseContext = createContext({
  expenseList: [],
  editVal: null,
  Debit: 0,
  Credit: 0,
  Balance: 0,
});

const initialvalues = {
  expenseList: [
    {
      id: 1,
      Title: "Food",
      Description: "Lunch",
      Amount: 1000,
      Date: "2026-10-14",
      Category: "HealthCare",
      Type: "Debit",
    },
    {
      id: 2,
      Title: "new test",
      Description: "testing",
      Amount: 100,
      Date: "2025-5-6",
      Category: "Shopping",
      Type: "Debit",
    },
  ],
  editVal: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "add": {
      const newExpense = {
        id: new Date().getTime(),
        ...action.payload,
        Amount: Number(action.payload.Amount),
      };
      return {
        ...state,
        expenseList: [...state.expenseList, newExpense],
      };
    }
    case "Delete": {
      return {
        ...state,
        expenseList: state.expenseList.filter(
          (expense) => expense.id !== action.payload,
        ),
      };
    }

    case "Edit": {
      return {
        ...state,
        editVal:
          state.expenseList.find((expense) => expense.id === action.payload) ||
          null,
      };
    }

    case "update": {
      return {
        ...state,
        expenseList: state.expenseList.map((expense) =>
          expense.id === state.editVal.id
            ? {
                ...expense,
                ...action.payload,
                id: expense.id,
                Amount: Number(action.payload.Amount),
              }
            : expense,
        ),
        editVal: null,
      };
    }

    default:
      return state;
  }
}

const ExpenseContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialvalues);

  const handleAdd = (input) => {
    if (!input) {
      alert("all fields are required");
      return;
    }
    if (state.editVal) {
      dispatch({ type: "update", payload: input });
    } else {
      dispatch({ type: "add", payload: input });
    }
  };

  const handleDelete = (id) => {
    dispatch({
      type: "Delete",
      payload: id,
    });
  };

  const handleEdit = (id) => {
    dispatch({
      type: "Edit",
      payload: id,
    });
  };

 

  return (
    <expenseContext.Provider
      value={{
        expenseList: state.expenseList,
        editVal: state.editVal,
        handleAdd,
        handleDelete,
        handleEdit,
       
      }}
    >
      {children}
    </expenseContext.Provider>
  );
};

export default ExpenseContext;
