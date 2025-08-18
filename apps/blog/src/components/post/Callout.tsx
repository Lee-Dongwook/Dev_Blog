export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-md border-l-4 border-brand-600 bg-brand-50 p-4 text-sm dark:bg-white/5">
      {children}
    </div>
  );
}
