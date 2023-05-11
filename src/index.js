import './style.css';
import ToDo from './js/todo.js';

/* const myIcon2 = new Image();
myIcon2.src = Icon2;
myIcon2.classList.add('recycle-icon');
const whatToDo = document.querySelector('.what-to-do');
whatToDo.append(myIcon2);

const myIcon3 = new Image();
myIcon3.src = Icon3;
myIcon3.classList.add('enter-icon');
const writeTask = document.querySelector('.write-task');
writeTask.append(myIcon3);
 */
/* const placeholder = document.querySelector('.placeholder');

const todaysToDoList = [
   {
    description: 'Task One',
    completed: false,
    index: 0,
  },
  {
    description: 'Task Two',
    completed: true,
    index: 1,
  },
]; */

/* const component = () => {
  todaysToDoList.forEach((item, index) => {
    if (item.index === index) {
      createNewTask(item);
    }
  });
};
 */

const myToDo = new ToDo();
myToDo.display();
