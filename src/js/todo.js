import Icon from '../images/ellipsis-vertical-svgrepo-com.svg';
import Icon2 from '../images/recycle-svgrepo-com.svg';
import Icon3 from '../images/enter-svgrepo-com.svg';

class ToDo {
     todaysToDoList = [];

     placeholder = document.querySelector('.placeholder');

     todo = document.querySelector('input');

     clearbtn = document.querySelector('.clear-button');

     constructor() {
       const myIcon2 = new Image();
       myIcon2.src = Icon2;
       myIcon2.classList.add('recycle-icon');
       const whatToDo = document.querySelector('.what-to-do');
       whatToDo.append(myIcon2);

       const entericon = new Image();
       entericon.src = Icon3;
       entericon.classList.add('enter-icon');

       entericon.addEventListener('click', () => {
         this.createNewToDo({
           description: this.todo.value,
           completed: false,
           index: this.todaysToDoList.length + 1,
         });
       });

       const writeTask = document.querySelector('.write-task');
       writeTask.append(entericon);

       this.todo.addEventListener('keypress', (event) => {
         if (event.keyCode === 13) {
           if (this.todo.value !== '') {
             const length = this.todaysToDoList.length + 1;
             this.todaysToDoList.push({
               description: this.todo.value,
               completed: false,
               index: length,
             });
             this.addToLocalStorage();
             this.display();
             this.todo.value = '';
           }
         }
       });

       return this;
     }

     addToLocalStorage = () => {
       localStorage.setItem('todos', JSON.stringify(this.todaysToDoList));
     }

    updateToDo = (event, textarea) => {
      const index = parseInt(textarea.getAttribute('data-index'), 10);

      this.todaysToDoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
      const objIndex = this.todaysToDoList.findIndex(((obj) => obj.index === index));
      this.todaysToDoList.forEach((item, index) => {
        if (index === objIndex) item.description = textarea.value;
      });

      this.addToLocalStorage();
      this.display();
    };

     enumArrayElements = () => {
       let i = 0;
       this.todaysToDoList.forEach((item, index) => {
         i += 1;
         this.todaysToDoList[index].index = i;
       });
     }

    createNewToDo = (item) => {
      const element = document.createElement('div');
      const cls = ['fa', 'fa-trash-o', 'icon-font'];

      element.classList.add('task');

      element.addEventListener('click', () => {
        element.querySelector('.fa').style.display = (element.querySelector('.fa').style.display === 'none' ? 'block' : 'none');
        element.querySelector('img').style.display = (element.querySelector('img').style.display === 'none' ? 'block' : 'none');
      });

      this.placeholder.append(element);

      const checkBox = document.createElement('input');
      checkBox.classList.add('check-box');
      checkBox.setAttribute('type', 'checkbox');
      element.appendChild(checkBox);

      const textarea = document.createElement('textarea');
      textarea.value = item.description;
      textarea.setAttribute('data-index', item.index);
      textarea.addEventListener('focusout', (event) => this.updateToDo(event, textarea));

      element.appendChild(textarea);

      const myIcon = new Image();

      myIcon.src = Icon;

      myIcon.addEventListener('click', () => { this.createNewToDo({ description: this.todo.value, completed: false, index: (this.todaysToDoList.length + 1) }); });

      element.appendChild(myIcon);

      const trashIcon = document.createElement('i');

      trashIcon.classList.add(...cls);

      trashIcon.setAttribute('data-index', item.index);

      trashIcon.addEventListener('mousedown', () => { this.deleteToDos(item.index); });

      trashIcon.style.display = 'none';

      element.appendChild(trashIcon);

      this.addToLocalStorage();

      return element;
    };

    deleteToDos = (ind) => {
      const index = parseInt(ind, 10);

      if (this.todaysToDoList.length === 1) {
        this.todaysToDoList = [];
      } else {
        const objIndex = parseInt(
          this.todaysToDoList.findIndex(((obj) => obj.index === index)), 10,
        );
        this.todaysToDoList.splice(objIndex, 1);
      }

      this.enumArrayElements();
      this.addToLocalStorage();
      this.display();
    };

   display = () => {
     this.todaysToDoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
     this.placeholder.innerHTML = '';
     this.todaysToDoList.forEach((item) => {
       this.createNewToDo(item);
     });
   };
}

export default ToDo;