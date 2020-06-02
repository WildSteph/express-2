const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');



app.get('/', (req, response) => {
  response.send('Bienvenue sur Express');
});

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});

app.get('/api/employees', (req, res) => {
  connection.query('SELECT * from employee', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des employés');
    } else {
      res.json(results);
    }
    // TODO envoyer les données récupérées (étape 3)
  });
});

app.get('/api/movies', (req, res) => {
  connection.query('SELECT * from movie', (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération des filmes');
    } else {
      res.json(results);
    }
    // TODO envoyer les données récupérées (étape 3)
  });
});

app.get('/api/movies/names', (req, res) => {
  connection.query(`SELECT name from movie` , (err, results) => {
    if (err) {
      res.status(500).send('Erreur lors de la récupération du filme');
    } else {
      res.json(results);
    }
    // TODO envoyer les données récupérées (étape 3)
  });
});
