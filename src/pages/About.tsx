function About() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 opt-sm-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="personasgrafico.webp" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark"></div>
                                    </div>
                                </div>

                                <div className="col-12">

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-6">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="MiniGraficos.jpg" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark"></div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 mt-4 pt-2">
                                    <div className="card work-desk rounded border-0 shadow-lg overflow-hidden">
                                        <img src="yoga.jpg" className="img-fluid" alt="Image" />
                                        <div className="img-overlay bg-dark"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-12 order-1 order-md-2">
                    <div className="section-title ml-lg-5">
                        <h5 className="text-custom font-weight-normal mb-3">Acerca de Nosotros</h5>
                        <h4 className="title mb-4">
                            Nuestra misión es <br />
                            ayudar a mejorar tu vida
                        </h4>
                        <p className="text-muted mb-0">Nuestro equipo de trabajo está centrado en ayudar a las personas a superar sus adicciones. Creemos que todos merecen una oportunidad de recuperarse y estamos aquí para brindarles todo el apoyo que necesiten. A través de un enfoque personalizado y compasivo. Nos enorgullece ser parte del cambio positivo en la vida de las personas y estamos dedicados a ayudar a cada uno de nuestros pacientes a alcanzar una vida saludable y feliz. </p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;