export const PageLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
      <p className="text-xl font-semibold text-primary">Loading...</p>
    </div>
  </div>
);
