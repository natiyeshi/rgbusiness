import { IconType } from "react-icons";

interface OneServiceProps {
  title: string;
  description: string;
  Icon: IconType;
}
const OneService: React.FC<OneServiceProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div className="flex flex-col place-items-center gap-3">
      <Icon className="w-12 h-12 text-primary" />
      <div className="font-semibold text-primary text-lg">{title}</div>
      <div className="text-center">{description}</div>
    </div>
  );
};

export default OneService;
