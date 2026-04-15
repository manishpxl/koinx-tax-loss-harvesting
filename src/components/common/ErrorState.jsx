import Button from "./Button";

function ErrorState({
  title = "Something went wrong",
  message = "We were unable to load your data.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center rounded-3xl border border-rose-500/20 bg-rose-500/10 px-6 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/20 text-2xl">
        !
      </div>

      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-6 text-rose-100/80">{message}</p>

      {onRetry ? (
        <Button className="mt-5" onClick={onRetry}>
          Try Again
        </Button>
      ) : null}
    </div>
  );
}

export default ErrorState;