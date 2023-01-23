import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";

interface HabitDayProps {
  amount: number;
  completed: number;
}
export const HabitDay = ({ completed, amount }: HabitDayProps) => {
  const completedPercentage = Math.round((completed / amount) * 100);
  const color = ["bg-zinc-900", "bg-violet-900", "bg-violet-800", "bg-violet-700", "bg-violet-600", "bg-violet-500"];
  const habitColor = false && color[completed];

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("h-10 w-10 rounded-lg", {
          "bg-zinc-900 border-zinc-800 ": completedPercentage === 0,
          "bg-violet-900 border-violet-400": completedPercentage > 0 && completedPercentage < 20,
          "bg-violet-800 border-violet-400": completedPercentage >= 20 && completedPercentage < 40,
          "bg-violet-700 border-violet-400": completedPercentage >= 40 && completedPercentage < 60,
          "bg-violet-600 border-violet-400": completedPercentage >= 60 && completedPercentage < 80,
          "bg-violet-500 border-violet-400": completedPercentage >= 80,
        })}
      >
        <Popover.Portal>
          <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
            <span className="font-semibold text-zinc-400">segunda-feira</span>
            <span className="mt-1 font-extrabold leading-tight text-3xl">23/01</span>

            <ProgressBar progress={completedPercentage} />
            <Popover.Arrow height={16} width={24} className="fill-zinc-900  " />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Trigger>
    </Popover.Root>
  );
};
