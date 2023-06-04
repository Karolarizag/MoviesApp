export const parseDate = (item: any) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(item);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const movieDate = `${months[month]} ${day}, ${year}`;
  return { movieDate };
};

export const isOdd = (num: number) => (num % 2 === 1 ? false : true);
