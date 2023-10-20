export const validate = ({
    name,
    email,
    message,
    stack
}, setErrors) => {

    let errors = {}

    const regexName = /^[A-Za-z\s]+/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
        errors.name = "This field must be completed"
    } else if (!regexName.test(email)) {
        errors.name = "Please add only letters and spaces"
    }

    if (!email) {
        errors.email = "This field must be completed"
    } else if (!regexEmail.test(email)) {
        errors.email = "Invalid email format"
    }

    if (!message) {
        errors.message = "This Field must be completed"
    } else if (!regexName.test(message)) {
        errors.message = "Please add only letters and spaces"
    }

    if (!stack) errors.stack = "Please select one stack"

    setErrors(errors)
}