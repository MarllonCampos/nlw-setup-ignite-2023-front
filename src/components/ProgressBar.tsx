interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  const formatedProgress = progress > 100 ? 100 : progress;
  const progressStyle = {
    width: `${formatedProgress}%`,
  };
  return (
    <div className="h-3 rounded-xl bg-zinc-800 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={75}
        className="h-3 rounded-xl bg-violet-600"
        style={progressStyle}
      />
    </div>
  );
};
