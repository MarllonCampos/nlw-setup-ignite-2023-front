import React from "react";
import { generateDatesFromYeasrBeginning } from "../utils/generate-dates-from-year-beginning";
import { HabitDay } from "./HabitDay";

// import { Container } from './styles';
const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

const summaryDates = generateDatesFromYeasrBeginning();
const miminumSummaryDatesSize = 18 * 7;
const amountOfDaysToFill = miminumSummaryDatesSize - summaryDates.length;
const SummaryTable: React.FC = () => {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => (
          <div
            key={`${weekDay}-${i}`}
            className="text-zinc-400 text-xl h10 w10 font-bold flex items-center justify-center"
          >
            {weekDay}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {summaryDates.map((day) => (
          <HabitDay key={day.toString()} completed={Math.floor(Math.random() * 6)} />
        ))}
        {amountOfDaysToFill > 0 &&
          Array.from({ length: amountOfDaysToFill }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 bg-zinc-900 border- border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
};

export default SummaryTable;
