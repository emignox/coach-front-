// calendarLogic.ts
import dayjs from "dayjs";
import "dayjs/locale/it";
import localizedFormat from "dayjs/plugin/localizedFormat";
import weekday from "dayjs/plugin/weekday";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(localizedFormat);
dayjs.extend(weekday);
dayjs.extend(updateLocale);
dayjs.updateLocale("it", {
  weekStart: 1,
});

export const getStartOfCurrentView = (currentDate: dayjs.Dayjs) => {
  return currentDate.startOf("week");
};

export const getDaysOfCurrentView = (currentDate: dayjs.Dayjs) => {
  const startOfCurrentView = getStartOfCurrentView(currentDate);
  return Array.from({ length: 7 }, (_, i) => startOfCurrentView.add(i, "day"));
};

export const getTimeSlots = () => {
  return Array.from({ length: 16 }, (_, i) => {
    const hour = 7 + i;
    return `${hour}:00`;
  });
};

export const handlePrev = (currentDate: dayjs.Dayjs) => {
  return currentDate.subtract(1, "week");
};

export const handleNext = (currentDate: dayjs.Dayjs) => {
  return currentDate.add(1, "week");
};
