const express = require('express');
const axios = require('axios');
const app = express();


app.use(express.json());

app.post('/hiv', async (req, res) => {
req.query.sabia;
    res.send('ola');
  } catch (error) {
    console.error(error);
    res.send('erro')
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
