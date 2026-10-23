// import React, { createContext, useState } from "react";

import { createContext, useReducer } from "react";

// export const expenseContext = createContext({
//   expenseList: [],
//   handleAdd: () => {},
//   handleDelete: () => {},
//   editVal: null,
//   handleEdit: () => {},
//   setEditval: () => {},
//   Debit: 0,
//   Credit: 0,
//   Balance: 0,
// });
// const initialvalues = [
//   {
//     id: 1,
//     Title: "Food",
//     Description: "Lunch",
//     Amount: 1000,
//     Date: "2026-10-14",
//     Category: "Food",
//     Type: "Debit",
//   },
//   {
//     id: 2,
//     Title: "Sports",
//     Description: "Equipment",
//     Amount: 5000,
//     Date: "2026-10-14",
//     Category: "Travel",
//     Type: "Debit",
//   },
// ];

// const ExpenseContext = ({ children }) => {
//   const [expenseList, setExpensList] = useState(initialvalues);
//   const [editVal, setEditval] = useState(null);

//   const handleAdd = (input) => {
//     if (!input) {
//       return console.log("add input data");
//     }

//     if (editVal) {
//       setExpensList((prev) =>
//         prev.map((expense) =>
//           expense.id === editVal.id
//             ? {
//                 ...input,
//                 id: editVal.id,
//                 Amount: Number(input.Amount),
//               }
//             : expense,
//         ),
//       );
//       setEditval(null);
//     } else {
//       const newExpense = {
//         ...input,
//         id: Date.now(),
//         Amount: Number(input.Amount),
//       };

//       setExpensList((prev) => [...prev, newExpense]);
//     }
//   };

//   const handleEdit = (id) => {
//     const expense = expenseList.find((item) => item.id === id);

//     setEditval(expense || null);
//   };

//   const handleDelete = (id) => {
//     setExpensList((prev) => prev.filter((expense) => expense.id !== id));
//   };

//   const Debit = expenseList
//     .filter((p) => p.Type === "Credit")
//     .reduce((acc, curr) => acc + Number(curr.Amount), 0);

//   const Credit = expenseList
//     .filter((p) => p.Type === "Debit")
//     .reduce((acc, curr) => acc + Number(curr.Amount), 0);

//   const Balance = Credit - Debit;

//   const value = {
//     handleAdd,
//     expenseList,
//     handleDelete,
//     handleEdit,
//     editVal,
//     Debit,
//     Credit,
//     Balance,
//   };

//   return (
//     <expenseContext.Provider value={value}>{children}</expenseContext.Provider>
//   );
// };

// export default ExpenseContext;

//using reducer

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

  const Credit = state.expenseList
    .filter((item) => item.Type === "Credit")
    .reduce((total, item) => total + Number(item.Amount || 0), 0);

  const Debit = state.expenseList
    .filter((item) => item.Type === "Debit")
    .reduce((total, item) => total + Number(item.Amount || 0), 0);

  const Balance = Credit - Debit;

  return (
    <expenseContext.Provider
      value={{
        expenseList: state.expenseList,
        editVal: state.editVal,
        handleAdd,
        handleDelete,
        handleEdit,
        Credit,
        Debit,
        Balance,
      }}
    >
      {children}
    </expenseContext.Provider>
  );
};

export default ExpenseContext;
