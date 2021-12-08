const router = require('express').Router();
const authService = require('../services/authService');
const { AUTH_COOKIE_NAME } = require('../constants');
const { isGuest, isAuth } = require('../middlewares/authMiddleware');

router.post('/register', async (req, res, next) => {
    const { username, password, rePassword } = req.body;

    if (password !== rePassword) {
        res.locals.error = 'Password mismatch';
    }

    try {
        let user = await authService.register({
            username,
            password
        });

        let data = await authService.login({
            username,
            password
        });

        res.json({
            _id: user._id,
            token: data.token,
        });
    } catch (error) {
        next(error)
    }
});

router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    console.log(req.body)

    try {
        let { user, token } = await authService.login({
            username,
            password
        });

        res.json({
            _id: user._id,
            username: user.username,
            token,
        });
    } catch (error) {
        next(error)
    }
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});

module.exports = router;