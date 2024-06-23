const ex = require('express');
const app = ex();
const port = 3000;
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(ex.static('public'));
app.use('*', (req, res, next) => {
  if (req.baseUrl.trim() === '') {
    req.baseUrl = 'index.html';
  }
  res.sendFile(path.resolve(__dirname, `./build/${req.baseUrl}`), (err) => {
    if (err) {
      res.sendFile(path.resolve(__dirname, './build/index.html'));
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
