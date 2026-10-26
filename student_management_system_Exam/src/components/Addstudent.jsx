import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { addStudent, getStudentById, updateStudent } from "../Api/Student";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AddStudents() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [values, setValues] = useState({
    name: "",
    grid: "",
    email: "",
    course: "",
    isActive: "",
    mobileNumber: "",
  });

  useEffect(() => {
    if (!id) return;

    const fetchStudent = async () => {
      try {
        const student = await getStudentById(id);

        setValues({
          name: student.name ?? "",
          grid: student.grid ?? "",
          email: student.email ?? "",
          course: student.course ?? "",
          isActive: student.isActive ?? "",
          mobileNumber: student.mobileNumber ?? "",
        });
      } catch (error) {
        console.error("Fetch Student Error:", error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (id) {
        await updateStudent(id, values);
        alert("Student updated successfully!");
      } else {
        await addStudent(values);
        alert("Student added successfully!");
      }

      navigate("/");
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-4">
      <Form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-3">
            <label>Name</label>
            <Form.Control
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <Form.Label>Grid</Form.Label>
            <Form.Control
              type="number"
              name="grid"
              value={values.grid}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <label>Email</label>
            <InputGroup>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </InputGroup>
          </div>

          <div className="col-md-3">
            <label>Course</label>
            <Form.Select
              name="course"
              value={values.course}
              onChange={handleChange}
            >
              <option value="">Select course</option>
              <option value="fullstack">Fullstack</option>
              <option value="ui/ux design">UI/UX Design</option>
              <option value="video editing">Video Editing</option>
            </Form.Select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-3">
            <label>Is Active</label>
            <Form.Select
              name="isActive"
              value={values.isActive}
              onChange={handleChange}
            >
              <option value="">Select status</option>
              <option value="active">Active</option>
              <option value="hold">Hold</option>
              <option value="pending">Pending</option>
              <option value="suspend">Suspend</option>
            </Form.Select>
          </div>

          <div className="col-md-3">
            <label>Mobile Number</label>
            <Form.Control
              type="tel"
              name="mobileNumber"
              value={values.mobileNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button type="submit">{id ? "Update " : "Add "}</Button>
      </Form>
    </div>
  );
}

export default AddStudents;
