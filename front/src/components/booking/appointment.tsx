// appointment.tsx
import React, { useState } from "react";
import dayjs from "dayjs";
import { CustomButton } from "../blocs/Custom-button";
import {
  getDaysOfCurrentView,
  getTimeSlots,
  handlePrev,
  handleNext,
} from "./logic-time";
import Titles from "../blocs/titles";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const timeSlots = getTimeSlots();

  const daysOfCurrentView = getDaysOfCurrentView(currentDate);

  return (
    <>
      <Titles
        className="my-12 text-3xl font-bold text-center text-gray-100"
        title="Choose a date and time..."
      />
      <div className="flex items-center justify-center mb-20 h-[90vh] font   p-10  ">
        <div className="w-full h-full text-white ">
          <div className="flex items-center justify-between mb-4 ">
            <CustomButton
              value="Prev"
              onClick={() => setCurrentDate(handlePrev(currentDate))}
              className="p-2 bg-gray-100 text-[#111] rounded"
            />
            <h2 className="text-xl text-center">
              {currentDate.format("MMMM D, YYYY")}
            </h2>
            <CustomButton
              value="Next"
              onClick={() => setCurrentDate(handleNext(currentDate))}
              className="p-2 bg-gray-100 text-[#111] rounded"
            />
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-7 ">
            {daysOfCurrentView.map((day) => (
              <div
                key={day.format("YYYY-MM-DD")}
                className={`h-20 md:h-52  font-thin   p-4 ${day.isSame(selectedDay) ? "bg-red-500" : "bg-gray-100"} text-[#111] rounded flex flex-col items-start justify-start cursor-pointer`}
                onClick={() =>
                  setSelectedDay(day.isSame(selectedDay) ? null : day)
                }
              >
                <span className="">{day.format("dddd")}</span>
                <span>{day.format("DD")}</span>
              </div>
            ))}
          </div>
          {selectedDay && (
            <div className="mt-4">
              <h3 className="text-lg text-center">
                select the hours for {selectedDay.format("dddd DD MMMM YYYY")}
              </h3>
              <div className="flex justify-center mt-2">
                <div className="flex flex-wrap gap-3 p-2 text-white rounded-2xl">
                  {timeSlots.map((slot) => (
                    <option
                      className={`${slot === selectedTime ? "bg-custom-red" : ""} px-4  py-2 border rounded-lg  hover:bg-custom-red`}
                      key={slot}
                      value={slot}
                      onClick={() =>
                        setSelectedTime(selectedTime === slot ? null : slot)
                      }
                    >
                      {slot}
                    </option>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center my-5">
                <CustomButton className="" value="submit" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calendar;
