import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import { addStudent } from "../api/student";
import {useNavigate} from "react-router-dom"

function addStudents() {
  const { Formik } = formik;

  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required(),
    grid: yup.number().required(),
    email: yup.string().required(),
    course: yup.string().required(),
    isActive: yup.string().required(),
    mobileNumber: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <div className="container">
      <Formik
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          addStudent(values);

          alert("new Student add Successfully")

          navigate("/")

          resetForm();
        }}
        initialValues={{
          name: "",
          grid: "",
          email: "",
          course: "",
          isActive: "",
          mobileNumber: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormik01">
                <Form.Label> name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isValid={touched.name && !errors.name}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormik02">
                <Form.Label>grid</Form.Label>
                <Form.Control
                  type="Number"
                  name="grid"
                  value={values.grid}
                  onChange={handleChange}
                  isValid={touched.grid && !errors.grid}
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>email</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationFormik03">
                <Form.Label>course</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="course"
                  value={values.course}
                  onChange={handleChange}
                >
                  <option>course</option>
                  <option value="fullstack">fullstack</option>
                  <option value="ui/ux design">ui/ux design</option>
                  <option value="video editing">video editing</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.course}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik04">
                <Form.Label>isActive</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="isActive"
                  value={values.isActive}
                  onChange={handleChange}
                >
                  <option>isActive</option>
                  <option value="active">active</option>
                  <option value="hold">hold</option>
                  <option value="pending">pending</option>
                  <option value="suspend">suspend</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  {errors.isActive}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationFormik05">
                <Form.Label>mobileNumber</Form.Label>
                <Form.Control
                  type="Number"
                  placeholder="mobileNumber"
                  name="mobileNumber"
                  value={values.mobileNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.mobileNumber}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.mobileNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="validationFormik0"
              />
            </Form.Group>
            <Button type="submit">Add Student</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default addStudents;
