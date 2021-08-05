// const { timeLog } = require('console');
const express = require('express');
const path = require('path');
const fs = require('fs');


const app = express();
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extende: true }));


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Duh!'
  });
});

app.get('/create-post', (req, res) => {
  res.render('create-post', {
    title: 'Novo Post - Duh!'
  });
});

app.post('/posted', (req, res) => {
  const { title, text } = req.body;

  const data = fs.readFileSync('./stored/posts.json');
  const posts = JSON.parse(data);

  posts.push({
    title,
    text
  });

  const postsString = JSON.stringify(posts);
  fs.writeFileSync('./stored/posts.json', postsString);

  
  res.redirect('/');
});


const port = process.env.PORT || 8080;

app.listen(port, console.log('working...'));