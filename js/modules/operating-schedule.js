export default function initOperationSchedule() {
  const schedule = document.querySelector("[data-week]");

  const dayWeek = schedule.dataset.week.split(",").map(Number);
  const time = schedule.dataset.time.split(",").map(Number);

  const day = new Date();
  const scheduleOpen = day.getHours() >= time[0] && day.getHours() < time[1];
  const validDay = dayWeek.includes(day.getDay());

  if (scheduleOpen && validDay) {
    schedule.classList.add("open");
  }
}
