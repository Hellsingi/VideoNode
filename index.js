const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home');
const cardRoutes = require('./routes/card');
const addRoutes = require('./routes/add');
const ordersRoutes =  require('./routes/orders');
const coursesRoutes = require('./routes/courses');
const authRoutes = require('./routes/auth');
const User = require('./models/user');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(async (req, res, next) => {
    try {
        const user = await User.findById('5e3eb7a341d95527f05c12d6');
        req.user = user;
        next();
    } catch (e) {
        console.error(e);
    }
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);
app.use('/card', cardRoutes);
app.use('/orders', ordersRoutes);
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
    try {
        const url = 'mongodb://Hellsingi:bcgfybz@cluster0-shard-00-00-8rsx0.mongodb.net:27017,cluster0-shard-00-01-8rsx0.mongodb.net:27017,cluster0-shard-00-02-8rsx0.mongodb.net:27017/shop?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url, {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        const candidate = await User.findOne();
        if (!candidate) {
            const user = new User({
                email: 'f.c.realmadrid@mail.ru',
                name: 'Ilya',
                cart: { items: [] }
            });
            await user.save();
        }
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        });
    } catch (e) {
        console.log(e)
    }
};

start();

