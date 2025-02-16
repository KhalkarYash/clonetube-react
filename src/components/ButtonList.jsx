import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Soccer",
    "News",
    "Cooking",
    "Study",
  ];

  return (
    <div className="flex">
      {list.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
