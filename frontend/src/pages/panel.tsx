import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import "../styles/Panel.css";

interface IUserData {
    mail: string;
    connected: boolean;
    admin: boolean;
    day: number;
    month: number;
    year: number;
}

interface IUser {
    mail: string;
    name: string;
    father_last_name: string;
    mother_last_name: string;
}

function dayMonthYear(day: number, month: number, year: number) {
    return [
        { name: "Dia", habito: day },
        { name: "Mes", habito: month },
        { name: "Año", habito: year },
    ];
}

async function putData(url: string, data = {}) {
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log("Success: ", responseData);
        if (responseData.success) {
            return responseData;
        } else {
            console.error("Error: ", responseData.message);
            return null;
        }
    } catch (error) {
        console.error("Error: ", error);
    }
    return null;
}

async function postData(url: string, data = {}) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log("Success: ", responseData);
        if (responseData.success) {
            return responseData;
        } else {
            console.error("Error: ", responseData.message);
            return null;
        }
    } catch (error) {
        console.error("Error: ", error);
    }
    return null;
}

async function deleteData(url: string, data = {}) {
    try {
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log("Success: ", responseData);
        if (responseData.success) {
            return responseData;
        } else {
            console.error("Error: ", responseData.message);
            return null;
        }
    } catch (error) {
        console.error("Error: ", error);
    }
    return null;
}

function Panel() {
    const { state } = useLocation();

    if (!state || !state.user_data.connected) {
        return <></>;
    }

    const { name, father_last_name, mother_last_name } = state.user_info;

    const startData: IUserData = state.user_data;
    const [data, setData] = useState(startData);

    const usersInfoStart: IUser[] = [];
    const [usersInfo, setUsersData] = useState(usersInfoStart);

    useEffect(() => {
        postData("http://localhost:8000/api/users", {
            mail: startData.mail,
        }).then((response) => {
            setUsersData(response.data.users_info);
        });
    }, []);

    const startChart = dayMonthYear(data.day, data.month, data.year);
    const [chartData, setChartData] = useState(startChart);

    const [modified, setModified] = useState(false);

    const augment_day = () => {
        setData((prevData) => ({
            ...prevData,
            day: prevData.day + 1,
            month: prevData.month + 1,
            year: prevData.year + 1,
        }));
        setChartData(dayMonthYear(data.day, data.month, data.year));
        setModified(true);
    };

    const augment_month = () => {
        setData((prevData) => ({
            ...prevData,
            month: prevData.month + 1,
            year: prevData.year + 1,
        }));
        setChartData(dayMonthYear(data.day, data.month, data.year));
        setModified(true);
    };

    const augment_year = () => {
        setData((prevData) => ({
            ...prevData,
            year: prevData.year + 1,
        }));
        setChartData(dayMonthYear(data.day, data.month, data.year));
        setModified(true);
    };

    const save_data = () => {
        putData("http://localhost:8000/api/data", data);
        setModified(false);
    };

    const delete_user = (deletedMail: string) => {
        deleteData("http://localhost:8000/api/users", {
            admin_mail: startData.mail,
            deleted_mail: deletedMail,
        });
    };

    return (
        <div>
            <div className="content">
                <div className="inner-content">
                    <div className="row">
                        <h1>
                            {name} {father_last_name} {mother_last_name}
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card">
                                <div className="card-block">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="card-inner-text">
                                                <h4 className="text-c-yellow f-w-600">
                                                    {data.day}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-4 text-right"></div>
                                    </div>
                                </div>
                                <div className="card-footer bg-c-yellow">
                                    <div className="row align-items-center">
                                        <div className="col-9">
                                            <p className="text-white m-b-0">
                                                Veces al dia
                                            </p>
                                        </div>
                                        <div className="col-3 text-right"></div>
                                    </div>
                                </div>
                                <a
                                    className="stretched-link"
                                    onClick={augment_day}
                                ></a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card">
                                <div className="card-block">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="card-inner-text">
                                                <h4 className="text-c-yellow f-w-600">
                                                    {data.month}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-4 text-right"></div>
                                    </div>
                                </div>
                                <div className="card-footer bg-c-red">
                                    <div className="row align-items-center">
                                        <div className="col-9">
                                            <p className="text-white m-b-0">
                                                Veces al mes
                                            </p>
                                        </div>
                                        <div className="col-3 text-right"></div>
                                    </div>
                                </div>
                                <a
                                    className="stretched-link"
                                    onClick={augment_month}
                                ></a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card">
                                <div className="card-block">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="card-inner-text">
                                                <h4 className="text-c-yellow f-w-600">
                                                    {data.year}
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="col-4 text-right"></div>
                                    </div>
                                </div>
                                <div className="card-footer bg-c-green">
                                    <div className="row align-items-center">
                                        <div className="col-9">
                                            <p className="text-white m-b-0">
                                                Veces al año
                                            </p>
                                        </div>
                                        <div className="col-3 text-right"></div>
                                    </div>
                                </div>
                                <a
                                    className="stretched-link"
                                    onClick={augment_year}
                                ></a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6 text-center">
                            {modified && (
                                <Button onClick={save_data}>Guardar</Button>
                            )}
                        </div>

                        <div className="col-xl-9 col-md-12">
                            <LineChart
                                width={600}
                                height={300}
                                data={chartData}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="habito"
                                    stroke="#8884d8"
                                />
                            </LineChart>
                        </div>
                    </div>
                    <div className="row">
                        {startData.admin && (
                            <Container>
                                <h1>Eliminar Usuarios:</h1>
                                {usersInfo.map((user) => (
                                    <Row key={user.mail}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>
                                                    {user.name}{" "}
                                                    {user.father_last_name}{" "}
                                                    {user.mother_last_name}
                                                </Card.Title>
                                                <Card.Text>
                                                    {user.mail}
                                                </Card.Text>
                                                <Button
                                                    variant="outline-danger"
                                                    onClick={() => {
                                                        delete_user(user.mail);
                                                    }}
                                                >
                                                    Eliminar
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                ))}
                            </Container>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;
