interface Props {
  logoSrc: string;
  title: string;
  description?: string;
  handleClick: () => void;
}
const Item = ({ logoSrc, title, description, handleClick }: Props) => {
  return (
    <button className="w-[100%] h-[100%] p-4" onClick={handleClick}>
      <span className="flex flex-row gap-4 items-center font-segoeui">
        <img src={logoSrc} width={24} height={24} />
        <span className="flex flex-col">
          <h1>{title}</h1>
          {description ?? <p>{description}</p>}
        </span>
      </span>
    </button>
  );
};

export default Item;
