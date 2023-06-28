import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import mysql from "mysql2";
import bcrypt from "bcrypt";

dotenv.config();
const api_port: number = Number(process.env.API_PORT);

const api: Express = express();
api.use(express.json());
api.use(cors());

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
});

interface IUser {
    mail: string;
    name: string;
    father_last_name: string;
    mother_last_name: string;
    password: string;
}

interface IUserData {
    mail: string;
    connected: boolean;
    admin: boolean;
    day: number;
    month: number;
    year: number;
}

api.post("/api/users", (req: Request, res: Response) => {
    const { mail } = req.body;
    pool.query(
        "SELECT * FROM pro_data WHERE connected=1 AND admin=1 AND mail=?",
        [mail],
        (error, results) => {
            if (error) {
                const response = {
                    success: false,
                    message: "Error obteniendo usuarios",
                    data: null,
                };
                console.error(
                    `⚡️ [server]: Error obteniendo usuarios ${error}`,
                );
                res.status(500).send(response);
            } else {
                const usersData = results as IUserData[];
                if (usersData.length > 0) {
                    pool.query(
                        "SELECT * FROM pro_users U JOIN pro_data D ON U.mail=D.mail WHERE D.admin=0",
                        (error, results) => {
                            if (error) {
                                const response = {
                                    success: false,
                                    message: "Error obteniendo usuarios",
                                    data: null,
                                };
                                console.error(
                                    `⚡️ [server]: Error obteniendo usuarios ${error}`,
                                );
                                res.status(500).send(response);
                            } else {
                                const users = results as IUser[];
                                let usersInfo = [];
                                for (let i = 0; i < users.length; i++) {
                                    const currentUser = users[i];
                                    usersInfo[i] = {
                                        mail: currentUser.mail,
                                        name: currentUser.name,
                                        father_last_name:
                                            currentUser.father_last_name,
                                        mother_last_name:
                                            currentUser.mother_last_name,
                                    };
                                }
                                const response = {
                                    success: true,
                                    message: "Usuarios obtenidos exitosamente",
                                    data: {
                                        users_info: usersInfo,
                                    },
                                };
                                console.log(
                                    `⚡️ [server]: ${JSON.stringify(response)}`,
                                );
                                res.status(200).send(response);
                            }
                        },
                    );
                }
            }
        },
    );
});

api.post("/api/login", (req: Request, res: Response) => {
    const { email, password } = req.body;
    pool.query(
        "SELECT * FROM pro_users WHERE mail=?",
        [email],
        (error, users) => {
            if (error) {
                const response = {
                    success: false,
                    message: "Error obteniendo datos en tiempo real",
                    data: null,
                };
                console.error(
                    `⚡️ [server]: Error obteniendo datos en tiempo real ${error}`,
                );
                res.status(500).send(response);
            } else {
                const user = users as IUser[];
                if (user.length > 0) {
                    bcrypt.compare(
                        password,
                        user[0].password,
                        function (_, same) {
                            if (same) {
                                pool.query(
                                    "UPDATE pro_data SET connected=1 WHERE mail=?",
                                    [email],
                                    (error, _) => {
                                        if (error) {
                                            const response = {
                                                success: false,
                                                message:
                                                    "Error obteniendo datos en tiempo real",
                                                data: null,
                                            };
                                            console.error(
                                                `⚡️ [server]: Error obteniendo datos en tiempo real ${error}`,
                                            );
                                            res.status(500).send(response);
                                        } else {
                                            pool.query(
                                                "SELECT * FROM pro_data WHERE mail=?",
                                                [email],
                                                (error, data) => {
                                                    if (error) {
                                                        console.error(
                                                            `⚡️ [server]: Error obteniendo datos en tiempo real ${error}`,
                                                        );
                                                    } else {
                                                        const user_data =
                                                            data as IUserData[];
                                                        const response = {
                                                            success: true,
                                                            message:
                                                                "Datos obtenidos exitosamente",
                                                            data: {
                                                                user_data:
                                                                    user_data[0],
                                                                user_info: {
                                                                    name: user[0]
                                                                        .name,
                                                                    father_last_name:
                                                                        user[0]
                                                                            .father_last_name,
                                                                    mother_last_name:
                                                                        user[0]
                                                                            .mother_last_name,
                                                                },
                                                            },
                                                        };
                                                        console.log(
                                                            `⚡️ [server]: ${JSON.stringify(
                                                                response,
                                                            )}`,
                                                        );
                                                        res.status(200).send(
                                                            response,
                                                        );
                                                    }
                                                },
                                            );
                                        }
                                    },
                                );
                            }
                        },
                    );
                }
            }
        },
    );
});

api.post("/api/register", (req: Request, res: Response) => {
    const { email, firstName, fatherLastName, motherLastName, password } =
        req.body;
    bcrypt.hash(password, 15, (error, hash) => {
        if (error) {
            console.error(error);
        } else {
            pool.query(
                "SELECT * FROM pro_users WHERE mail=?",
                [email],
                (error, results) => {
                    if (error) {
                        const response = {
                            success: false,
                            message: "Error al registrarse",
                            data: null,
                        };
                        console.error(
                            `⚡️ [server]: Error al registrarse ${error}`,
                        );
                        res.status(500).send(response);
                    } else {
                        const users = results as IUser[];
                        if (users.length > 0) {
                            const response = {
                                success: false,
                                message: "Usuario ya existe",
                                data: null,
                            };
                            res.status(500).send(response);
                            return;
                        }

                        pool.query(
                            "INSERT INTO pro_users VALUES (?, ?, ?, ?, ?)",
                            [
                                email,
                                firstName,
                                fatherLastName,
                                motherLastName,
                                hash,
                            ],
                            (error, results) => {
                                if (error) {
                                    const response = {
                                        success: false,
                                        message:
                                            "Error obteniendo datos en tiempo real",
                                        data: null,
                                    };
                                    console.error(
                                        `⚡️ [server]: Error obteniendo datos en tiempo real ${error}`,
                                    );
                                    res.status(500).send(response);
                                } else {
                                    const response = {
                                        success: true,
                                        message: "Datos obtenidos exitosamente",
                                        data: results,
                                    };
                                    res.status(200).send(response);
                                }
                            },
                        );
                        pool.query(
                            "INSERT INTO pro_data VALUES (?, ?, ?, ?, ?, ?)",
                            [email, 0, 0, 0, 0, 0],
                            (error, results) => {
                                if (error) {
                                    const response = {
                                        success: false,
                                        message:
                                            "Error obteniendo datos en tiempo real",
                                        data: null,
                                    };
                                    console.error(
                                        `⚡️ [server]: Error obteniendo datos en tiempo real ${error}`,
                                    );
                                    res.status(500).send(response);
                                } else {
                                    const response = {
                                        success: true,
                                        message: "Datos obtenidos exitosamente",
                                        data: results,
                                    };
                                    res.status(200).send(response);
                                }
                            },
                        );
                    }
                },
            );
        }
    });
});

api.put("/api/data", (req: Request, res: Response) => {
    const userData: IUserData = req.body;
    pool.query(
        "SELECT * FROM pro_data WHERE connected=1 AND mail=?",
        [userData.mail],
        (error, _) => {
            if (error) {
                const response = {
                    success: false,
                    message: "Error guardando datos",
                    data: null,
                };
                console.error(`⚡️ [server]: Error guardando datos ${error}`);
                res.status(500).send(response);
            } else {
                pool.query(
                    "UPDATE pro_data SET day=?, month=?, year=? WHERE mail=?",
                    [
                        userData.day,
                        userData.month,
                        userData.year,
                        userData.mail,
                    ],
                    (error, _) => {
                        if (error) {
                            const response = {
                                success: false,
                                message: "Error guardando datos",
                                data: null,
                            };
                            console.error(
                                `⚡️ [server]: Error guardando datos ${error}`,
                            );
                            res.status(500).send(response);
                        } else {
                            const response = {
                                success: true,
                                message: "Datos guardados exitosamente",
                                data: null,
                            };
                            res.status(200).send(response);
                        }
                    },
                );
            }
        },
    );
});

api.delete("/api/users", (req: Request, res: Response) => {
    const { admin_mail, deleted_mail } = req.body;
    pool.query(
        "SELECT * FROM pro_data WHERE connected=1 AND admin=1 AND mail=?",
        [admin_mail],
        (error, results) => {
            if (error) {
                const response = {
                    success: false,
                    message: "Error eliminando usuarios",
                    data: null,
                };
                console.error(
                    `⚡️ [server]: Error obteniendo usuarios ${error}`,
                );
                res.status(500).send(response);
            } else {
                const usersData = results as IUserData[];
                if (usersData.length > 0) {
                    pool.query(
                        "DELETE FROM pro_users WHERE mail=?",
                        [deleted_mail],
                        (error, results) => {
                            if (error) {
                                const response = {
                                    success: false,
                                    message: "Error eliminando usuarios",
                                    data: null,
                                };
                                console.error(
                                    `⚡️ [server]: Error eliminando usuarios ${error}`,
                                );
                                res.status(500).send(response);
                            } else {
                                const response = {
                                    success: true,
                                    message: "Usuarios eliminados exitosamente",
                                    data: results,
                                };
                                console.log(
                                    `⚡️ [server]: ${JSON.stringify(response)}`,
                                );
                                res.status(200).send(response);
                            }
                        },
                    );
                    pool.query(
                        "DELETE FROM pro_data WHERE mail=?",
                        [deleted_mail],
                        (error, results) => {
                            if (error) {
                                const response = {
                                    success: false,
                                    message: "Error eliminando usuarios",
                                    data: null,
                                };
                                console.error(
                                    `⚡️ [server]: Error eliminando usuarios ${error}`,
                                );
                                res.status(500).send(response);
                            } else {
                                const response = {
                                    success: true,
                                    message: "Usuarios eliminados exitosamente",
                                    data: results,
                                };
                                console.log(
                                    `⚡️ [server]: ${JSON.stringify(response)}`,
                                );
                                res.status(200).send(response);
                            }
                        },
                    );
                }
            }
        },
    );
});

api.listen(api_port, () => {
    console.log(
        `⚡️ [server]: Server esta corriendo en el puerto: ${api_port}`,
    );
});
