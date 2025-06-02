export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`w-full px-3 py-2 border rounded-lg outline-none focus:ring focus:border-blue-500 transition ${className}`}
      rows="4"
      {...props}
    />
  );
}
