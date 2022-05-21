var Name_Array, array, item;


Name_Array = ['Steam', 'Origin', 'Youtube'];
array = 0;
let element_list = document.getElementById('list');
Name_Array.forEach((item) => {
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  new_a.innerText = item;
  if (array == 0) {
    array = (typeof array === 'number' ? array : 0) + 1;
    new_a.setAttribute("href", 'https://store.steampowered.com/?l=german');
  } else if (array == 1) {
    array = (typeof array === 'number' ? array : 0) + 1;
    new_a.setAttribute("href", 'https://www.origin.com/deu/de-de/store');
  } else {
    new_a.setAttribute("href", 'https://www.youtube.com/?gl=DE');
  }

  new_li.appendChild(new_a);

  element_list.appendChild(new_li);
});
