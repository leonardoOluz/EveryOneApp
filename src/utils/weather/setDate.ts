function setDate(date: Date): string {
  const apiDate = new Date(date);
  const hour = apiDate.getHours();
  const minutes = apiDate.getMinutes();
  return `${hour < 10 ? `0${hour}` : hour }:${minutes < 10 ? `0${minutes}` : minutes}`;
}

export default setDate;
