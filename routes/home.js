const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Main pages',
        isHome: true
    });
});

module.exports = router;