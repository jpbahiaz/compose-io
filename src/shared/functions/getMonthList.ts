export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dec",
];

export function getMonthList(lastMonths: number) {
  if(lastMonths > 6) throw "lastMonths: Não pode ser maior que 6"
  const currentMonth = new Date().getMonth() + 12

  return months.slice(currentMonth - lastMonths + 1, currentMonth + 1)
}
