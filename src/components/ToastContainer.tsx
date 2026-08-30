import { useToast } from "~/hooks/useToast";

// Global toast state - shared across components
let globalShowToast: ((msg: string) => void) | null = null;

export function showGlobalToast(msg: string) {
  globalShowToast?.(msg);
}

export default function ToastContainer() {
  const { toasts, showToast } = useToast();
  globalShowToast = showToast;

  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast ${t.show ? "show" : ""}`}>
          <span className="toast-icon">✦</span>
          <span>{t.message}</span>
        </div>
      ))}
    </div>
  );
}
