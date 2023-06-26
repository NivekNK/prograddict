
function Profile() {
    return (
        <div>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img src="iconoperfil.png" className="img-fluid" alt="Image" />
                            <span className="font-weight-bold">Desconocido</span>
                            <span className="text-black-50">desconocido@gmail.com</span>
                            <span> </span>
                        </div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Ajustes de Perfil</h4>
                            </div>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <label className="labels">Nombres</label>
                                    <input type="text" className="form-control" placeholder="Nombres" value="" />
                                </div>
                                <div className="col-md-6">
                                    <label className="labels">Apellidos</label>
                                    <input type="text" className="form-control" value="" placeholder="Apellidos" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <label className="labels">Telefono</label>
                                    <input type="text" className="form-control" placeholder="Ingresar Numero de Telefono" value="" />
                                </div>
                                <div className="col-md-12">
                                    <label className="labels">Edad</label>
                                    <input type="text" className="form-control" placeholder="Ingresar Edad" value="" />
                                </div>
                                <div>
                                    <label htmlFor="genero">Género</label>
                                </div>
                                <select className="col-md-12" name="Género"> <label className="labels"></label>
                                    <option value="0">Seleccione</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">Otro</option>
                                </select>
                                    <div className="col-md-12">
                                        <label className="labels">Peso(Kg)</label>
                                        <input type="text" className="form-control" placeholder="Ingresar Peso (Kg)" value="" />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">Altura(Cm)</label>
                                        <input type="text" className="form-control" placeholder="Ingresar Altura (Cm)" value="" />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="labels">Correo Electronico</label>
                                        <input type="text" className="form-control" placeholder="Ingresar Correo Electronico" value="" />
                                    </div>
                            </div>
                            <div className="mt-5 text-center">
                                <button className="btn btn-primary profile-button" type="button">Guardar Perfil</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;