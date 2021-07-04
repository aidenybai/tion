import webhook from 'webhook-discord';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const app = express();
const Hook = new webhook.Webhook(process.env.WEBHOOK_URL);
app.use(blankgif.middleware());

app.get('/', (_req, res) => {
  Hook.info('ping');

  res.set('Cache-Control', 'public, max-age=0');
  res.status(200).sendBlankGif();
});

app.listen(process.env.PORT);
