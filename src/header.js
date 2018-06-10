
// model function
var ElementWithBoldText = (section, innerElement, textForInnerElement, className) => {

  const sec = document.createElement(section);
  const node   = document.createElement(innerElement);
  const text   = document.createTextNode(textForInnerElement);

  node.appendChild(text);
  sec.appendChild(node);
  sec.classList.add(className);

  return sec;
}


// header section
var Header = () => (
  ElementWithBoldText(
    "header",
    "h1",
    "This is header"
  )
);
