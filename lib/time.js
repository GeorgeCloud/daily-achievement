export default function getNextSevenDays() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const nextSevenDays = [];
  
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);

      const dayOfWeek = days[nextDay.getDay()];
      const dateOfMonth = nextDay.getDate();
      nextSevenDays.push({ dayOfWeek, dateOfMonth });
    }
  
    return nextSevenDays;
}
