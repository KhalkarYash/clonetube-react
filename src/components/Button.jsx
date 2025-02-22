const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-2 m-2 rounded-lg bg-gray-900">
        {name}
      </button>
    </div>
  );
};

export default Button;
