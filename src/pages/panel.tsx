import { useState } from "react";
import jsonData from '../assets/data.json';
import "../styles/Panel.css";

function Panel() {
    const [data, setData] = useState(jsonData);

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
                                <a href="#" className="stretched-link"></a>
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
                                <a href="#" className="stretched-link"></a>
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
                                <a href="#" className="stretched-link"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Panel;