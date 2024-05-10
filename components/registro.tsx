import React, { useRef } from 'react';

const RegisterForm = () => {
    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2">    
        <form className=''>
            <div>
                <label>Tipo de Documento:</label>
                <select name="documentType">
                    <option value="">Selecciona un tipo de documento</option>
                    <option value="ID">Identificación</option>
                    <option value="Passport">Pasaporte</option>
                    <option value="DriverLicense">Licencia de Conducir</option>
                </select>
            </div>
            <div>
                <label>Número de Documento:</label>
                <input type="text" name="documentNumber" />
            </div>
            <div>
                <label>Nombre Completo:</label>
                <input type="text" name="fullName" />
            </div>
            <div>
                <label>Correo Electrónico:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" name="password" />
            </div>
            <div>
                <label>Confirmar Contraseña:</label>
                <input type="password" name="confirmPassword" />
            </div>
            <button type="submit">Continuar</button>
        </form>
        </div>
    );
};

export default RegisterForm;
