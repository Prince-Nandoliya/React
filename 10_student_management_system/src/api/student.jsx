const BASE_URL = import.meta.env.VITE_BASE_URL;

// export const allStudent = async () => {
//   try {
//     const res = await fetch(`${BASE_URL}/getAllStudents`);

//     if (!res.ok) {
//       throw new Error("fail to fetch Student data");
//     }

//     const data = await res.json();
//     console.log("API DATA:", data);

//     return data.students;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const addStudent = async (stdData) => {
//   try {
//     const res = await fetch(`${BASE_URL}/add`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(stdData),
//     });

//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(data.message || "fail to add student");
//     }

//     return data;
//   } catch (error) {
//     console.log(error.message);
//     throw Error;
//   }
// };

export async function deleteStudent(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      console.log("Backend error:", data);
      throw new Error(data.message || "failed to delete Student");
    }

    console.log("Student delete", data);

    return data;
  } catch (error) {
    console.error("Delete Api Error", error);
    throw error;
  }
}
