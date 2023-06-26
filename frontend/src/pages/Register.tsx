import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";

function Register() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required("Nombre requerido"),
        fatherLastName: yup.string().required("Apellido paterno requerido"),
        motherLastName: yup.string().required("Apellido materno requerido"),
        email: yup.string()
            .email("Mail incorrecto")
            .required("Mail requerido"),
        password: yup.string()
            .min(5, "Minimo 8 caracteres")
            .required("Contraseña requerida"),
        confirm_password: yup.string()
            .oneOf([yup.ref("password"), undefined], "Las contraseñas deben ser iguales"),
        terms: yup.bool().required().oneOf([true], "Debes aceptar los terminos de legalidad"),
    });

    return (
        <Row className="justify-content-md-center">
            <Col sm="8">
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        firstName: "",
                        fatherLastName: "",
                        motherLastName: "",
                        email: "",
                        password: "",
                        confirm_password: "",
                        terms: false,
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={values.firstName}
                                        onChange={handleChange}
                                        isValid={touched.firstName && !errors.firstName}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Apellido Paterno</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fatherLastName"
                                        value={values.fatherLastName}
                                        onChange={handleChange}
                                        isValid={touched.fatherLastName && !errors.fatherLastName}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.fatherLastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Apellido Materno</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="motherLastName"
                                        value={values.motherLastName}
                                        onChange={handleChange}
                                        isValid={touched.motherLastName && !errors.motherLastName}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.motherLastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group>
                                    <Form.Label>Mail</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="ejemplo@mail.com"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label>Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>Confirmar Contraseña</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirm_password"
                                        value={values.confirm_password}
                                        onChange={handleChange}
                                        isInvalid={!!errors.confirm_password}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.confirm_password}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3">
                                <Form.Check
                                    required
                                    name="terms"
                                    label="Aceptar terminos y condiciones"
                                    onChange={handleChange}
                                    isInvalid={!!errors.terms}
                                    feedback={errors.terms}
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <Button type="submit">Registrar</Button>
                        </Form>
                    )}
                </Formik>
            </Col>
        </Row>
    );
}

export default Register;