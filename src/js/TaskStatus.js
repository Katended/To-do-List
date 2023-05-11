class TaskStatus {
  constructor() {
    const clearbtn = document.querySelector('.clear-button');

    clearbtn.addEventListener('click', () => {
      this.clearAllCompleted();
    });

    return this;
  }

  updateStatus = (elem) => {
    elem.addEventListener('change', () => {
      if (elem.checked) {
        const index = parseInt(elem.getAttribute('data-index'), 10);

        const arrIndex = this.todaysToDoList.findIndex((item) => (item.index === index));

        this.todaysToDoList[arrIndex].completed = true;

        elem.parentElement.classList.toggle('completed-item');
      } else {
        elem.parentElement.classList.toggle('completed-item');
      }
      this.addToLocalStorage();
    });
  }

  clearAllCompleted() {
    this.todaysToDoList = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    this.todaysToDoList.forEach((item) => {
      if (item.completed) {
        this.todaysToDoList = this.todaysToDoList.filter((item) => !item.completed);
        this.addToLocalStorage();
        this.display();
      }
    });
  }
}

export default TaskStatus;