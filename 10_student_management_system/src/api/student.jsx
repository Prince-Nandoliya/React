const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function allStudent() {
  try {
    const res = await fetch(`${BASE_URL}/getAllStudents`);

    if (!res.ok) {
      throw new Error("fail to fetch Student data");
    }

    const data = await res.json();
    console.log("API DATA:", data);

    return data.students;
  } catch (error) {
    throw new Error(error.message);
  }
}
