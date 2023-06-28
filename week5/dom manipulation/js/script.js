<<<<<<< HEAD
const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'X';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        });

        input.focus();
      });
=======
function addChapter() {
    const chapter = document.querySelector("#favchap");
    const favList = document.querySelector("#list");

    const newLi = document.createElement("li");
    newLi.textContent = chapter.value;
    chapter.value = "";

    const deleteBtn = document.createElement("input");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("value", "X");
    deleteBtn.setAttribute("class", "delete-button");
    deleteBtn.addEventListener("click", delChapter);

    newLi.appendChild(deleteBtn);
    favList.appendChild(newLi);

    chapter.focus()
}

function delChapter(self) {
    const chapter = self.srcElement.parentElement;
    chapter.remove();

    const textElement = document.querySelector("#favchap");
    textElement.focus();
}


const addButton = document.querySelector("#button");
addButton.addEventListener("click", addChapter);
>>>>>>> 3f00ab5f29cdb5196588bdf55dc3c86664faff52
