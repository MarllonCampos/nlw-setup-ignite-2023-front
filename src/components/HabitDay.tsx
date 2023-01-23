interface HabitProps {
  completed: number;
}
export const HabitDay = ({ completed }: HabitProps) => {
  const color = ["bg-zinc-900", "bg-violet-900", "bg-violet-800", "bg-violet-700", "bg-violet-600", "bg-violet-500"];
  const habitColor = false && color[completed];
  return (
    <div className={`${habitColor ? habitColor : ""} h-10 w-10 bg-zinc-900 border- border-zinc-800 rounded-lg`}>
      {completed}
    </div>
  );
};
