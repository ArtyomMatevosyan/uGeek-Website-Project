export const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPhone = /^(([+374]{4}|[0]{1}))?([1-9]{2})(\d{6})$/;
    const regexName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
    if (!values.firstname) {
        errors.firstname = "Cannot be blank";
    } else if (values.firstname.length < 2) {
        errors.firstname = "Firstname must be more than 2 characters";
    } else if (!regexName.test(values.firstname)) {
        errors.firstname = "Please enter correct name";
    }
    if (!values.lastname) {
        errors.lastname = "Cannot be blank";
    } else if (values.lastname.length < 4) {
        errors.lastname = "Lastname must be more than 4 characters";
    } else if (!regexName.test(values.lastname)) {
        errors.lastname = "Please enter correct lastname";
    }
    if (!values.email) {
        errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
        errors.email = "Invalid email format";
    }
    if (!values.phone) {
        errors.phone = "Cannot be blank";
    } else if (!regexPhone.test(values.phone)) {
        errors.phone = "Invalid phone number";
    }
    return errors;
};
