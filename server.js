const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, './client/build')));
} else {
  app.use(express.static(path.join(__dirname, './client/public')));
}

require('./routes/apiRoutes')(app);
//require('./routes/htmlRoutes')(app);

app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});