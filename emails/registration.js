const keys = require('../keys');

module.exports = function (email) {
    return {
        to: email,
        from: keys.EMAIL_FROM,
        subject: 'Create accaunt',
        html: `
            <h1>Youur go in our shop!</h1>
            <p>Your sucesses create acount with email - ${email}</p>
            <hr/>
            <a href="${keys.BASE_URL}">Shops courses</a>
        `
    }
};