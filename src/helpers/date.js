module.exports = {
  addMonth: (date) => {
    // Создаем копию исходной даты, чтобы не изменять оригинал
    const newDate = new Date(date);

    // Получаем текущий месяц (от 0 до 11)
    const currentMonth = newDate.getMonth();

    // Устанавливаем следующий месяц
    newDate.setMonth(currentMonth + 1);

    // Если при добавлении месяца дата "перескочила" через месяц (например, 31 января -> 3 марта),
    // то устанавливаем последний день предыдущего месяца
    if (newDate.getMonth() !== (currentMonth + 1) % 12) {
      newDate.setDate(0); // Устанавливаем последний день предыдущего месяца
    }

    return newDate;
  },
};
