// Create a new list item when clicking on the "SHTO" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("inputName").value;
  let myimg = document.createElement("IMG");
  myimg.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";
  myimg.className = "userIcon";
  li.appendChild(myimg);

  //Other logic and validation
  let t = document.createTextNode(inputValue);
  t.className = "newText";
  li.appendChild(t);

  if (inputValue === "" || inputValue.length <= 2) {
    alert("Not a valid name, should have more than 2 characters!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("inputName").value = "";

  //Select Logic
  let selectValue = document.getElementById("catselector").selectedIndex;
  let selectOption = "";
  let spanSelect = document.createElement("SPAN");

  if (selectValue == 0) {
    selectOption = document.createTextNode("Student");
    spanSelect.className = "selectCss";
    spanSelect.appendChild(selectOption);
  } else if (selectValue == 1) {
    selectOption = document.createTextNode("Mesues");
    spanSelect.className = "selectCss";
    spanSelect.appendChild(selectOption);
  } else {
    selectOption = document.createTextNode("Student");
    spanSelect.className = "selectCss";
    spanSelect.appendChild(selectOption);
  }
  li.appendChild(selectOption);

  //Close
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");

  span.classList.add("close");
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// Create a "close" button and append it to each list item
/*let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  let myimg = document.createElement("IMG");
  myimg.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png";
  myimg.className = "userIcon";
  myNodelist[i].appendChild(span);
  myNodelist[i].appendChild(myimg);
}*/

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Filter input
function myFilter() {
  // Declare variables
  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("searchBar");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].innerText;

    if (a.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
