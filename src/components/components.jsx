export const ChoiceButton = ({ href, onClick }) => {
  return (
    <button onClick={onClick} className="">
      <img className="h=[300px] w-[300px] hover:scale-110 -rotate-12" src={href} />
    </button>
  );
};
