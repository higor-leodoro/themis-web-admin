interface MainButtonProps {
  text: string;
  loading?: boolean;
  onClick?: () => void;
}

export default function MainButton({
  text,
  loading,
  onClick,
}: MainButtonProps) {
  return (
    <button
      className="w-full bg-themis-orange rounded-lg p-4 flex justify-center items-center"
      onClick={onClick}
    >
      {loading ? (
        <div className="w-5 h-5 rounded-full border-2 border-t-themis-orange bg-transparent animate-spin"></div>
      ) : (
        <p className="font-bold text-white text-lg">{text}</p>
      )}
    </button>
  );
}
