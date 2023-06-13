import { useState } from "react";
import jsonData from '../assets/data.json';
import "../styles/Panel.css";

function Panel() {
    const [data, setData] = useState(jsonData);

    const augment_day = () => {
        setData(prevData => ({
            ...prevData,
            day: prevData.day + 1,
            month: prevData.month + 1,
            year: prevData.year + 1,
        }));
    };

    const augment_month = () => {
        setData(prevData => ({
            ...prevData,
            month: prevData.month + 1,
        }));
    };

    const augment_year = () => {
        setData(prevData => ({
            ...prevData,
            year: prevData.year + 1,
        }));
    };

    return (
        <div>
            <div className="content">
                <div className="inner-content">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card">
                                <div className="card-block">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="card-inner-text">
                                                <h4 className="text-c-yellow f-w-600">{data.day}</h4>
                                            </div>
                                        </div>
                                        <div className="col-4 text-right">
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-c-yellow">
                                    <div className="row align-items-center">
                                        <div className="col-9">
                                            <p className="text-white m-b-0">Veces</p>
                                        </div>
                                        <div className="col-3 text-right">
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="stretched-link" onClick={augment_day}></a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card">
                                <div className="card-block">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="card-inner-text">
                                                <h4 className="text-c-yellow f-w-600">{data.month}</h4>
                                            </div>
                                        </div>
                                        <div className="col-4 text-right">
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-c-red">
                                    <div className="row align-items-center">
                                        <div className="col-9">
                                            <p className="text-white m-b-0">Veces</p>
                                        </div>
                                        <div className="col-3 text-right">

                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="stretched-link" onClick={augment_month}></a>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card">
                                <div className="card-block">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <div className="card-inner-text">
                                                <h4 className="text-c-yellow f-w-600">{data.year}</h4>
                                            </div>
                                        </div>
                                        <div className="col-4 text-right">
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer bg-c-green">
                                    <div className="row align-items-center">
                                        <div className="col-9">
                                            <p className="text-white m-b-0">Veces</p>
                                        </div>
                                        <div className="col-3 text-right">
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="stretched-link" onClick={augment_year}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;