interface MainButtonProps {
  text: string;
  loading?: boolean;
  isDark?: boolean;
  onClick?: () => void;
}

export default function MainButton({
  text,
  loading,
  isDark,
  onClick,
}: MainButtonProps) {
  return (
    <button
      className={`w-full ${
        isDark ? "bg-themis-dark" : "bg-themis-orange"
      } rounded-lg p-4 flex justify-center items-center`}
      onClick={onClick}
    >
      {loading ? (
        <div
          className={`w-5 h-5 rounded-full border-2 ${
            isDark ? "border-t-themis-dark" : "border-t-themis-orange"
          } bg-transparent animate-spin`}
        ></div>
      ) : (
        <p className="font-bold text-white text-lg">{text}</p>
      )}
    </button>
  );
}
