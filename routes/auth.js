const { Router } = require('express');
const router = Router();

router.get('/login', async(req, res) => {
    res.render('auth/login', {
        title: 'Login',
        isLogin: true
    });
});

router.post('/login', async (req, res) => {
    res.session.isAuthenticated = true;
    res.redirect('/');
});

router.get('/logout', async(req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login#login');
    });
});

module.exports = router;