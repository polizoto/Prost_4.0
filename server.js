const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/index');
const hbs = exphbs.create({ helpers });
const session = require('express-session');

// register list-item helper to display all drinks on separate lines
hbs.handlebars.registerHelper('list-item', function(text) {

  const drinks = text.split(',')

  let individualIngredients = []
        function getIngredients(item, index) {
        let object = { ingredient: index + 1, item: item.trim(), }
        individualIngredients[index] = object
    }
      drinks.forEach((name, index) => getIngredients(name, index));

  const newIngredientList = []
       for (let i = 0; i < individualIngredients.length; i++) {
          newIngredientList.push("<li>" + hbs.handlebars.escapeExpression(individualIngredients[i].item) + "</li>")
        }
  return new hbs.handlebars.SafeString(newIngredientList.join(""));
});

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
