import React, { useEffect, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, CopySimple } from "phosphor-react";
import { api } from "../lib/axios";
import dayjs from "dayjs";

interface HabitsListProps {
  date: Date;
  onCompletedChanged: (completed: number) => void;
}

interface HabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

export const HabitsList = ({ date, onCompletedChanged }: HabitsListProps) => {
  const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>();

  useEffect(() => {
    api
      .get("day", {
        params: {
          date: date.toISOString(),
        },
      })
      .then((response) => {
        setHabitsInfo(response.data);
      });
  }, []);

  const isDayInPast = dayjs(date).endOf("day").isBefore(new Date());

  async function handleToggleHabit(habitId: string) {
    await api.patch(`habits/${habitId}/toggle`);
    const isHabitAlreadyCompleted = habitsInfo!.completedHabits.includes(habitId);
    let completedHabits: string[] = [];
    if (isHabitAlreadyCompleted) {
      completedHabits = habitsInfo!.completedHabits.filter((id) => id !== habitId);
      setHabitsInfo({
        possibleHabits: habitsInfo!.possibleHabits,
        completedHabits,
      });
    } else {
      completedHabits = [...habitsInfo!.completedHabits, habitId];
    }
    setHabitsInfo({
      possibleHabits: habitsInfo!.possibleHabits,
      completedHabits,
    });

    onCompletedChanged(completedHabits.length);
  }

  return (
    <div className="mt-6 flex flex-col gap-3">
      {habitsInfo?.possibleHabits.map((habit) => (
        <Checkbox.Root
          className="flex items-center gap-3 group"
          key={habit.id}
          defaultChecked={habitsInfo.completedHabits.includes(habit.id)}
          disabled={isDayInPast}
          onCheckedChange={() => handleToggleHabit(habit.id)}
        >
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>
          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </div>
  );
};