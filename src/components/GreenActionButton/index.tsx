interface GreenActionButtonProps {
  text: string;
  onClick?: () => void;
}

export default function GreenActionButton({
  text,
  onClick,
}: GreenActionButtonProps) {
  return (
    <button className="w-36 bg-themis-green p-2 rounded" onClick={onClick}>
      <p className="text-white font-medium">{text}</p>
    </button>
  );
}
