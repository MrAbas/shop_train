export default function BtnSelect({ btnTitle, className, state }) {
  const handleBtnClick = () => {
    state[1](!state[0]); // TODO Абаса логика №1
  };
  return (
    <button onClick={handleBtnClick} className={className} type="button" aria-label="select a category">
      {btnTitle}
    </button>
  );
}
