interface TileProps {
  children: string;
  key: number;
  id: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Tile: React.FC<TileProps> = ({ children, key, onClick, id }) => {
  return (
    <div
      key={key}
      id={id + ""}
      className="relative flex justify-center items-center border p-10 md:p-12 lg:p-16 shadow-md border-gray-400 font-bold sm:text-lg md:text-xl lg:text-2xl"
      onClick={onClick}
    >
      <p className="absolute">{children}</p>
    </div>
  );
};

export default Tile;
