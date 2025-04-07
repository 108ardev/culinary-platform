const express = require('express');
const app = express();

const recipesRoutes = require('./routes/recipesRoutes');
const classesRoutes = require('./routes/classesRoutes');
const chefsRoutes = require('./routes/chefsRoutes');
const usersRoutes = require('./routes/usersRoutes');
const groceryListRoutes = require('./routes/groceryListRoutes');
const recommendationsRoutes = require('./routes/recommendationsRoutes');

app.use(express.json());
app.use(express.static('public')); // для обслуживания index.html из папки public

// Новый маршрут для чат-бота (без функционала GigaChat)
app.post('/chatbot', (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).json({ response: 'Пустой запрос' });
  }
  let responseText = '';
  if (message.startsWith('/start')) {
    responseText = 'Привет! Я твой бот для мастер-классов. Доступные команды: /palindrom, /caps, /letter';
  } else if (message.startsWith('/palindrom')) {
    const text = message.replace('/palindrom', '').trim();
    if (text) {
      responseText = 'Палиндром: ' + text.split('').reverse().join('');
    } else {
      responseText = 'Введите текст после команды /palindrom';
    }
  } else if (message.startsWith('/caps')) {
    const text = message.replace('/caps', '').trim();
    if (text) {
      responseText = text.toUpperCase();
    } else {
      responseText = 'Введите текст после команды /caps';
    }
  } else if (message.startsWith('/letter')) {
    const text = message.replace('/letter', '').trim();
    const vowels = 'аеёиоуыэюяАЕЁИОУЫЭЮЯ';
    if (text) {
      responseText = text.split('').filter(ch => !vowels.includes(ch)).join('');
    } else {
      responseText = 'Введите текст после команды /letter';
    }
  } else {
    responseText = 'Неизвестная команда. Доступные команды: /start, /palindrom, /caps, /letter';
  }
  res.json({ response: responseText });
});

// Подключаем остальные маршруты API
app.use('/api', recipesRoutes);
app.use('/api', classesRoutes);
app.use('/api', chefsRoutes);
app.use('/api', usersRoutes);
app.use('/api', groceryListRoutes);
app.use('/api', recommendationsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
