import "./TagButtonStyle.css";

export default function TagButton({ title = "no", children }) {
  return (
    <button className="tagButton">
      {title}
      {children}
    </button>
  );
}
