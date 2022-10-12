export default (newElement, className, id, inHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${inHTML}`;
  parent.appendChild(element);
  return element;
};