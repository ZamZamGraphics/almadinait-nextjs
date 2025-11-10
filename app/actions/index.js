'use server'

function isValidGmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}

export async function submitContact(prevState, formData) {
    const name = formData.get("name") || ''
    const email = formData.get("email") || ''
    const message = formData.get("message") || ''

    const errors = {};

    if (!name) errors.name = 'Please write your name';
    if (!isValidGmail(email)) errors.email = 'Please enter a valid email';
    if (!message) errors.message = 'Please write your message';

    // Only return errors if any exist
    if (Object.keys(errors).length > 0) {
        return { errors, success: false };
    }

    // No errors: return an empty errors object or a success flag
    return {
        errors: {},
        success: true,
        data: { name, email, message }
    }

}