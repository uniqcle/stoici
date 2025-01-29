const forwardTitles = [
  "За приключениями »",
  "Давай, дальше! »",
  "Еще рывок! »",
  "Только вперед! »",
  "Во все тяжкие...»",
  "Шагаю дальше »",
  "К новым вершинам! »",
  "Шагай смело! »",
  "В неизведанное! »",
];

const backwardTitles = [
  "« Пожалуй вернусь",
  "« Назад в будущее!",
  "« Упс, вернемся!",
  "« Вернемся обратно",
  "« О, нет! Вернемся!",
  "« В обратный путь",
  "« Опа, назад!",
  "« Шаг назад",
  "« Ой, стоп! Обратно!",
  "« Раньше - проще",
  "« Когда было проще",
];

const getForward = () => {
  const randomIndex = Math.floor(Math.random() * forwardTitles.length);
  return forwardTitles[randomIndex];
};

const getBackward = () => {
  const randomIndex = Math.floor(Math.random() * backwardTitles.length);
  return backwardTitles[randomIndex];
};

module.exports = { getForward, getBackward };
