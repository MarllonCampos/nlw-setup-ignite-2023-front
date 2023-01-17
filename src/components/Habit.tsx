interface HabitProps {
  completed: number;
}
const Habit = ({ completed }: HabitProps) => {
  const color = ["bg-zinc-900", "bg-violet-900", "bg-violet-800", "bg-violet-700", "bg-violet-600", "bg-violet-500"];
  return (
    <div
      className={`${color[completed]}
          w-10 h-10 text-white 
          rounded m-2 text-center 
          flex items-center 
          justify-center`}
    >
      {completed}
    </div>
  );
};

export default Habit;
