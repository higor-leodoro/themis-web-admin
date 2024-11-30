type TreeCardsMetricsProps = {
  title: string;
  quantity: string;
  color: "themis-near-black" | "themis-orange" | "themis-silver";
};

const colorClasses: Record<TreeCardsMetricsProps["color"], string> = {
  "themis-near-black": "bg-themis-near-black",
  "themis-orange": "bg-themis-orange",
  "themis-silver": "bg-themis-silver",
};

export default function MetricsCard({
  title,
  quantity,
  color,
}: TreeCardsMetricsProps) {
  return (
    <div
      className={`w-56 h-28 ${colorClasses[color]} p-2 flex flex-col justify-between rounded-lg`}
    >
      <div>
        <p className="text-white font-medium text-sm w-32">{title}</p>
      </div>
      <div>
        <p className="text-white font-medium text-4xl text-right pb-3 pr-3">
          {quantity}
        </p>
      </div>
    </div>
  );
}
