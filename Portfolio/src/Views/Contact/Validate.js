export const validate = ({
    name,
    email,
    message,
    stack
}) => {

    const errors = {}

    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
        errors.name = "This field must be completed"
    }

    if (!email) {
        errors.email = "This field must be completed"
    } else if (!regexEmail.test(email)) {
        errors.email = "Invalid email format"
    }

    if (!message) {
        errors.message = "This Field must be completed"
    }

    if (!stack) errors.stack = "Please select one stack"

    return errors
}