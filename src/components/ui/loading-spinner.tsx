import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[50vh] w-full items-center justify-center bg-surface-light">
      <Loader2 className="h-10 w-10 animate-spin text-brand-mint" />
    </div>
  );
};
