interface GreenActionButtonProps {
  title: string;
  onClick?: () => void;
}

export default function GreenActionButton({
  title,
  onClick,
}: GreenActionButtonProps) {
  return (
    <button className="bg-themis-green p-2 rounded" onClick={onClick}>
      <p className="text-white font-medium">{title}</p>
    </button>
  );
}
