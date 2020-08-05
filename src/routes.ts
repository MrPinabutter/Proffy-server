import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/classes', async (req, res) => {
  const {
    name, 
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = req.body;

  await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio
  }).catch(err => {
    console.log("Erro: " + err);
  })

  return res.send();
});


export default routes;