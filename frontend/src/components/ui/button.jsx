export function Button({ children, ...props }) {
  return (
    <button
      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </button>
  );
}
