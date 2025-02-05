module.exports = {
  addMonth: (date, countMount) => {
    // Создаем копию исходной даты, чтобы не изменять оригинал
    const newDate = new Date(date);

    // Получаем текущий месяц (от 0 до 11)
    const currentMonth = newDate.getMonth();

    // Устанавливаем следующий месяц
    newDate.setMonth(currentMonth + countMount);

    // Если при добавлении месяца дата "перескочила" через месяц (например, 31 января -> 3 марта),
    // то устанавливаем последний день предыдущего месяца
    if (newDate.getMonth() !== (currentMonth + countMount) % 12) {
      newDate.setDate(0); // Устанавливаем последний день предыдущего месяца
    }

    return newDate;
  },

  showLocalDate: (date) => {
    return date.toLocaleDateString();
  },

  generateOrderNumber: (prefix = "D") => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const datePart = `${year}${month}${day}`;

    const randomPart = Math.random().toString(36).substring(2, 8).toUpperCase();

    const orderNumber = `${prefix}-${datePart}-${randomPart}`;
    return orderNumber;
  },
};
