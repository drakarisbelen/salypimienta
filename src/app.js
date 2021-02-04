// Módulos
const express = require('express');
const app = express();
// Acá falta uno... 😇
const path = require('path');
//Session
const session = require('express-session');
const auth = require('./middlewares/authMiddleware');
//para formularios post y get
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Configuración
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// Acá falta el template engine
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

//sessiones - Consumo aca arriba porque estará disponible para todas las páginas
app.use(session({secret: 'secreto',
resave: false,
saveUnitialized: true}));


app.use(auth);
// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
const mainRouter = require("./routes/mainRouter");
const detailRouter = require("./routes/detailRouter");
const loginRouter = require("./routes/loginRouter");


//middleWares
const notFoundMiddleware = require("./middlewares/notFoundMiddleware");


app.use("/", mainRouter);
app.use("/detalle" , detailRouter);
app.use("/login" , loginRouter);
app.use("/register" , loginRouter);

//app.use(notFoundMiddleware);



app.get('/', (req, res) => {
    res.send('Servidor funcionando, el resto te toca a vos 😋')
});

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})


