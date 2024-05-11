export default function BtnSelect({ btnTitle, className }) {
  return (
    <button className={className} type="button" aria-label="select a category">
      {btnTitle}
    </button>
  );
}
