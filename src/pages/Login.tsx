import { Button, Form, Row } from "react-bootstrap"; 
import * as formik from "formik";
import * as yup from "yup";

function Login() {
    const { Formik } = formik;

    const schema = yup.object().shape({
        email: yup.string()
            .email("Mail incorrecto")
            .required("Mail requerido"),
        password: yup.string()
            .min(8, "Minimo 8 caracteres")
            .required("Contraseña requerida")
    });

    return (
        <section className="d-flex justify-content-center m-5 p-5">
            <div className="col-md-3">
                <div className="text-center m-2 p-2">
                    <h1>Inicio Sesión</h1>
                </div>

                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
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
                                <Form.Group>
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
                            </Row>
                            <Button type="submit">Ingresar</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    );
}

export default Login;