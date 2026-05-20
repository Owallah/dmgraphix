export default function Loading() {
  return (
    <div className="min-h-screen dark:bg-dark-bg bg-light-bg flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-800 text-base animate-pulse-slow"
          style={{ background: 'var(--color-brand-blue)' }}
        >
          DM
        </div>
        {/* Loading bar */}
        <div className="w-32 h-0.5 dark:bg-dark-border bg-light-border rounded-full overflow-hidden">
          <div
            className="h-full rounded-full animate-[loading_1.5s_ease-in-out_infinite]"
            style={{ background: 'var(--color-brand-orange)' }}
          />
        </div>
      </div>
    </div>
  )
}
