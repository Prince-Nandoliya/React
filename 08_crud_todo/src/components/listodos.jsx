import React from 'react'
import "./table.css"

const Listodos = ({todos,handleDelete,handleEdit}) => {
  return (
    <>
    <table className="table table-bordered table-striped w-50 mx-auto rounded-5 overflow-hidden">
        <thead>
            <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Descriptiom</th>
                <th colSpan={2}>Actions</th>
            </tr>
        </thead>

        <tbody>
            {todos.map((t,index)=>{
                return(
                    <tr key={t.id}>
                        <td>{index + 1}</td>
                        <td>{t.Task}</td>
                        <td>{t.Description}</td>
                        <td><button onClick={() => handleEdit(t.id)}>Edit</button></td>
                        <td><button onClick={() => handleDelete(t.id)}>Delet</button></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </>
  )
}

export default Listodos
