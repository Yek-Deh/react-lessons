import "./TagButtonStyle.css";

export default function TagButton({ title, children }) {
  return (
    <>
      {title == null || title === "" ? null : (
        <button className="tagButton">
          {title}
          {children}
        </button>
      )}
    </>
  );
}
