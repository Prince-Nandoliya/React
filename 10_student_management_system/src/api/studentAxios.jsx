import axios from "axios"

const BASE_URL = import.meta.env.VITE_BASE_URL;


export async function allStudent() {
    try {
        
        const res = await axios(`${BASE_URL}/getAllStudents`)

        return res.data.students

    } catch (error) {
     throw new Error(error.message)        
    }
}

export async function addStudent(Student) {
    try {
        
        const res = await axios.post(`${BASE_URL}/`,Student)

        if(res.status !== 201){
            throw new Error("fail to add student")
        }

        return res.data

    } catch (error) {
        
    }
    
}

export async function deleteStudents(id) {
    try {
        
        const res = await axios.delete(`${BASE_URL}/${id}`)


        if(res.status !== 200){
            throw new Error("fail to delete student data")
        }

        return res.data

    } catch (error) {
        throw new Error(error.message)
    }
    
}