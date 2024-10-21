export function setDateHoursMinute(date: Date): string {
  const apiDate = new Date(date);
  const hour = apiDate.getHours();
  const minutes = apiDate.getMinutes();
  return `${hour < 10 ? `0${hour}` : hour}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

export function setDateNow(date: Date): string {
  const apiDate = new Date(date);
  const day = apiDate.toLocaleString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return `${day}`;
}
