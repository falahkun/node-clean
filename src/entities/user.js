function user(username, password, email, uid, firstName, lastName, role, gender, birthDate, phoneNumber) {
    return {
        getUsername: () => username,
        getPassword: () => password,
        getEmail: () => email,
        getUid: () => uid, 
        getFirstName: () => firstName,
        getLastName: () => lastName,
        getRole: () => role,
        getGender: () => gender,
        getBirthDate: () => birthDate,
        getPhoneNumber: () => phoneNumber
    }
}

module.exports = {
    user
}