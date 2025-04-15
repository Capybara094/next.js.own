type CustomCardProps = {
    title: string;
    description: string;
  };

export default function CustomCard({title, description}: CustomCardProps) {
  return (
    <div className="col-span-2 space-y-2 justify-items-center-safe">
        <h2 className="font-semibold text-xl">{title}</h2>
        <p className="">{description}</p>
    </div>
  );
}