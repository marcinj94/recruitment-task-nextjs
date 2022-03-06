export const getDatetimeParams = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return {
    day: `${day < 10 ? '0' : ''}${day}`,
    month: `${month < 10 ? '0' : ''}${month}`,
    year: date.getFullYear(),
    hours: `${hours < 10 ? '0' : ''}${hours}`,
    minutes: `${minutes < 10 ? '0' : ''}${minutes}`,
  };
};
