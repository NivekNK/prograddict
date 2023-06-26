function Config() {
    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Configuración</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Ajustar Perfil</button></div>
                                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Cambiar Datos Personales</button></div>
                                <div className="row mt-3">
                                    <label htmlFor="tema">Tema</label>
                                    <select className="col-md-12" name="Tema"> <label className="labels"></label>
                                        <option value="0">Seleccione</option>
                                        <option value="1">Oscuro</option>
                                        <option value="2">Claro</option>
                                    </select>
                                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Cuenta</button></div>
                                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Preguntas Frecuentes</button></div>
                                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Contáctanos</button></div>
                                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Politica y Licencias</button></div>
                                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Guardar Cambios</button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Config;