const { body } = require('express-validator/check');

exports.registerValidators = [
    body('email').isEmail().withMessage('Enter correct email'),
    body('password', 'Password must be min 6 symbol').isLength({ min: 6, max: 56 }).isAlphanumeric(),
    body('confirm').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password must be same');
        }
        return true;
    }),
    body('name').isLength({ min: 3 }).withMessage('Name must be min 3 symbol')
];