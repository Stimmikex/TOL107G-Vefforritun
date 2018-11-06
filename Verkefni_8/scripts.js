const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');
  const itemButton = document.querySelectorAll('.item__button');
  const textarea = document.querySelectorAll('.item__text');
  const checkbox = document.querySelectorAll('.item__checkbox')

  text.init(form, items, itemButton, textarea, checkbox);
});

const text = (() => {
  let items;

  function init(_form, _items, _itemButton, _textarea, _checkbox) {
    items = _items;
    itemButton = _itemButton;
    textarea = _textarea;
    checkbox = _checkbox;
    let counter = 0;
    _form.addEventListener('submit', formHandler);
    for (let item of items.querySelectorAll(".item")) {
      checkbox[counter].addEventListener('change', baseline);
      textarea[counter].addEventListener('click', edit); // Calls on the edit function
      itemButton[counter].addEventListener('click', deleteItem);
      counter++;
    }
    // TODO láta hluti í _items virka
  }

  function formHandler(e) {
    e.preventDefault();
    add(); // Calls the add function
  } 
  function baseline(e) {
    // console.log('Checkbox works');
    e.target.parentNode.classList.toggle("item--done"); // Toggles the style : item--done
  }
  // event handler fyrir það að klára færslu
  function finish(e) {
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    console.log("Hello");
    const inp = document.createElement('input');
    // const inp = el('input', 'item__text', null);
    // const span = document.querySelector('span');
    
    inp.classList.add('item__text');

    inp.value = e.target.innerHTML;
    console.log(e.target);
    e.target.parentNode.replaceChild(inp, e.target);
    inp.addEventListener('keyup',commit);
    inp.focus();

    

  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    if (e.keyCode === ENTER_KEYCODE) {
      // console.log("why are you doing this?");
      const inp = e.target;
      const newspan = document.createElement('span');
      newspan.classList.add('item__text');
      const newText = e.target.value;
      e.target.parentNode.replaceChild(newspan, inp);
      newspan.innerHTML = newText;
      newspan.focus();
    }    
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    /* Adds a list tag for the new item */
    const list = document.createElement("li"); // create : <li>
    // var input = el("input", "item_checkbox", baseline);
    list.classList.add("item"); // class : "item"

    const input = document.createElement("input")
    input.classList.add("item__checkbox"); // class : "item__checkbox"
    input.setAttribute('type', 'checkbox'); // type : "checkbox"
    input.addEventListener('change', baseline); // Event : function(baseline)
    list.appendChild(input); // append the <input> element into the list <li>

    const span = document.createElement("span");
    span.classList.add("item__text");
    span.addEventListener('click', edit);
    list.appendChild(span);

    const button = document.createElement("button")
    button.classList.add("item__button");
    button.innerHTML = "Eyða";
    button.addEventListener('click', deleteItem);
    list.appendChild(button);

    const text = document.querySelector('.form__input').value;
    if (text != "") {
      span.innerHTML = text;
    }
    else {
      span.innerHTML = "Vantar texta.";
    }

    items.appendChild(list);
    document.querySelector('.form__input').value = '';
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.preventDefault();
    const grandparent = e.target.parentNode.parentNode;
    const parent = e.target.parentNode;
    //console.log(e.target);
    grandparent.removeChild(parent);
    //console.log('Item deleted');
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const element = document.createElement(type); 
    element.classList.add(className);
    element.addEventListener(clickHandler);
    return element;
  }

  return {
    init: init
  }
})();
