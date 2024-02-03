export default function Button({ children, textOnly, classname, ...props }) {
  let cssClass = textOnly ? "text-button" : "button";
  cssClass += " " + classname;

  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}
