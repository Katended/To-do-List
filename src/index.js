// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import Icon from './ellipsis-vertical-svgrepo-com.svg';
import Icon2 from './recycle-svgrepo-com.svg';
import Icon3 from './enter-svgrepo-com.svg';

const myIcon2 = new Image();
myIcon2.src = Icon2;
myIcon2.classList.add('recycle-icon');
const whatToDo = document.querySelector('.what-to-do');
whatToDo.append(myIcon2);

const myIcon3 = new Image();
myIcon3.src = Icon3;
myIcon3.classList.add('enter-icon');
const writeTask = document.querySelector('.write-task');
writeTask.append(myIcon3);

const placeholder = document.querySelector('.placeholder');

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
];

const createNewTask = (item) => {
  const element = document.createElement('div');
  element.classList.add('task');
  placeholder.append(element);

  // create input element
  const checkBox = document.createElement('input');
  checkBox.classList.add('check-box');
  checkBox.setAttribute('type', 'checkbox');
  element.appendChild(checkBox);

  // create p tag
  const taskText = document.createElement('p');
  taskText.classList.add('p-tag');
  taskText.innerHTML = item.description;
  taskText.classList.add('task-text');
  element.appendChild(taskText);

  /// add icon
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
};

const component = () => {
  todaysToDoList.forEach((item, index) => {
    if (item.index === index) {
      createNewTask(item);
    }
  });
};

component();

const todo = document.querySelector('input');
['click', 'keypress'].forEach((evt) => {
  todo.addEventListener(evt, (evt) => {
    if (evt.keyCode === 13) {
      if (todo.value !== '') {
        const length = todaysToDoList.length + 1;
        todaysToDoList.push({ description: todo.value, completed: false, length });
        component();
      }
    }
  });
});
