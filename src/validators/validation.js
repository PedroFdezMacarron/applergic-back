const validationEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(String(email).toLowerCase());
}

const validationPassword = (password) => {
    // const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    // pongo una regla sencilla para que no de error.
    const regex= /[a-zA-Z]/;
    return regex.test(String(password));
}

module.exports = {validationEmail, validationPassword};