export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-forest/60">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-forest/20 border-t-forest" />
      <p className="mt-3 text-sm">Fetching the latest weather...</p>
    </div>
  );
}
