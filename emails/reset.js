const keys = require('../keys');

module.exports = function (email, token) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Reset emails',
        html: `
            <h1>Your forget password?</h1>
            <p>If no, to net</p>
            <p>Else click a link </p>
            <p><a href="${keys.BASE_URL}/auth/password/${token}">Password recovery</a></p>
            <hr/>
            <a href="${keys.BASE_URL}">Shops courses</a>
        `
    }
};