class ArrangeBox {
  constructor(name) {
    this.containerName = name;
    this.PotentialList.sort();
    this.Control();
    this.RefreshPage();
  }

  PotentialList = ['Apple', 'Avocado', 'Banana', 'Coconut', 'Lemon'];

  SelectedList = [];

  currentItem = '';

  // ArrangeBox
  Control() {
    const wrapper = document.getElementById('wrapper');

    // Создает хранилище всех элементов страницы
    const arrangeBox = document.createElement('div');
    arrangeBox.setAttribute('class', 'ArrangeBox');
    wrapper.append(arrangeBox);

    // Создает хранилище всех левых элементов
    const Available = document.createElement('div');
    Available.setAttribute('class', 'Available');
    arrangeBox.append(Available);

    // Заголовок левого контейнера
    const AvailableTittle = document.createElement('h2');
    AvailableTittle.textContent = 'Available';
    Available.append(AvailableTittle);

    // Создаем поисковую форму для левог контейнера
    const SearchBlockAvailable = document.createElement('form');
    SearchBlockAvailable.setAttribute('class', 'SearchBlockAvailable searchblock');
    // eslint-disable-next-line quotes
    SearchBlockAvailable.setAttribute("onkeypress", "if(event.keyCode == 13) return false;");
    Available.append(SearchBlockAvailable);

    const SearchAvailable = document.createElement('input');
    SearchAvailable.setAttribute('id', 'SearchAvailable');
    SearchAvailable.setAttribute('class', 'SearchAvailable');
    SearchAvailable.setAttribute('type', 'search');
    SearchAvailable.setAttribute('placeholder', 'Search by name');
    SearchBlockAvailable.append(SearchAvailable);
    SearchAvailable.addEventListener('input', this.searchLeft.bind(this));

    // Создает хранилище для левого контейнера и кнопок управления им
    const AvailableWrapper = document.createElement('div');
    AvailableWrapper.setAttribute('class', 'AvailableWrapper');
    Available.append(AvailableWrapper);

    // Создает панель кнопок для управления левым контейнером
    const buttonListLeft = document.createElement('div');
    buttonListLeft.setAttribute('class', 'button-list-left');
    AvailableWrapper.append(buttonListLeft);

    // Кнопка перемещения выбранного элемента вверх на 1 (левый контейнер)
    const jsLeftUp = document.createElement('button');
    jsLeftUp.setAttribute('class', 'button-left js-left-up');
    jsLeftUp.textContent = '🠕';
    buttonListLeft.append(jsLeftUp);
    jsLeftUp.addEventListener('click', this.toUpLeft.bind(this));

    // Кнопка перемещения выбранного элемента вниз на 1 (левый контейнер)
    const jsLeftDown = document.createElement('button');
    jsLeftDown.setAttribute('class', 'button-left js-left-down');
    jsLeftDown.textContent = '🠗';
    buttonListLeft.append(jsLeftDown);
    jsLeftDown.addEventListener('click', this.toDownLeft.bind(this));

    // Кнопка перемещения выбранного элемента в самый вверх (левый контейнер)
    const jsLeftAllUp = document.createElement('button');
    jsLeftAllUp.setAttribute('class', 'button-left js-left-all-up');
    jsLeftAllUp.textContent = '🠕🠕';
    buttonListLeft.append(jsLeftAllUp);
    jsLeftAllUp.addEventListener('click', this.toTopLeft.bind(this));

    // Кнопка перемещения выбранного элемента в самый низ (левый контейнер)
    const jsLeftAllDown = document.createElement('button');
    jsLeftAllDown.setAttribute('class', 'button-left js-left-all-down');
    jsLeftAllDown.textContent = '🠗🠗';
    buttonListLeft.append(jsLeftAllDown);
    jsLeftAllDown.addEventListener('click', this.toBottomLeft.bind(this));

    // Создание левого контейнера
    const container1 = document.createElement('div');
    container1.setAttribute('class', 'js-container1 container');
    container1.setAttribute('id', 'js-container1 container');
    AvailableWrapper.append(container1);

    // Создание панели кнопок для взаимодействия элементов между контейнерами
    const buttonListCenter = document.createElement('div');
    buttonListCenter.setAttribute('class', 'button-list-center');
    arrangeBox.append(buttonListCenter);

    // Кнопка перемещения выбранного элемента в левый контейнер
    const jsLeft = document.createElement('button');
    jsLeft.setAttribute('class', 'button-center js-left');
    jsLeft.textContent = '🠔';
    buttonListCenter.append(jsLeft);
    jsLeft.addEventListener('click', this.toLeft.bind(this));

    // Кнопка перемещения выбранного элемента в правый контейнер
    const jsRight = document.createElement('button');
    jsRight.setAttribute('class', 'button-center js-right');
    jsRight.textContent = '🠖';
    buttonListCenter.append(jsRight);
    jsRight.addEventListener('click', this.toRight.bind(this));

    // Кнопка перемещения всех элементов в левый контейнер
    const jsLeftAll = document.createElement('button');
    jsLeftAll.setAttribute('class', 'button-center js-left-all');
    jsLeftAll.textContent = '🠔🠔';
    buttonListCenter.append(jsLeftAll);
    jsLeftAll.addEventListener('click', this.allToLeft.bind(this));

    // Кнопка перемещения всех элементов в правый контейнер
    const jsRightAll = document.createElement('button');
    jsRightAll.setAttribute('class', 'button-center js-right-all');
    jsRightAll.textContent = '🠖🠖';
    buttonListCenter.append(jsRightAll);
    jsRightAll.addEventListener('click', this.allToRigh.bind(this));

    // Добавить случайный элемент в правый контейнер
    const jsAddRight = document.createElement('button');
    jsAddRight.setAttribute('class', 'button-center js-add-right');
    jsAddRight.textContent = 'Add right item';
    buttonListCenter.append(jsAddRight);
    jsAddRight.addEventListener('click', this.addElement_right.bind(this));

    // Добавить случайный элемент в левый контейнер
    const jsAddLeft = document.createElement('button');
    jsAddLeft.setAttribute('class', 'button-center js-add-left');
    jsAddLeft.textContent = 'Add left item';
    buttonListCenter.append(jsAddLeft);
    jsAddLeft.addEventListener('click', this.addElement_left.bind(this));

    // Кнопка возвращения элементов в первоначальное состояние
    const jsRefresh = document.createElement('button');
    jsRefresh.setAttribute('class', 'button-center js-refresh');
    jsRefresh.textContent = 'Refresh';
    buttonListCenter.append(jsRefresh);
    jsRefresh.addEventListener('click', this.Refresh.bind(this));

    // Кнопка получения текущих значений
    const jsGetCurrentValues = document.createElement('button');
    jsGetCurrentValues.setAttribute('class', 'button-center js_get_current_values');
    jsGetCurrentValues.textContent = 'Get values';
    buttonListCenter.append(jsGetCurrentValues);
    jsGetCurrentValues.addEventListener('click', this.getCurrentValues.bind(this));

    // Создает хранилище всех правых элементов
    const Selected = document.createElement('div');
    Selected.setAttribute('class', 'Selected');
    arrangeBox.append(Selected);

    // Заголовок правого контейнера
    const SelectedTittle = document.createElement('h2');
    SelectedTittle.textContent = 'Selected';
    Selected.append(SelectedTittle);

    // Создает поисковую форму для правого контейнера
    const SearchBlockSelected = document.createElement('form');
    SearchBlockSelected.setAttribute('class', 'SearchBlockSelected searchblock');
    // eslint-disable-next-line quotes
    SearchBlockSelected.setAttribute("onkeypress", "if(event.keyCode == 13) return false;");
    Selected.append(SearchBlockSelected);

    const SearchSelected = document.createElement('input');
    SearchSelected.setAttribute('id', 'SearchSelected');
    SearchSelected.setAttribute('class', 'SearchSelected');
    SearchSelected.setAttribute('type', 'search');
    SearchSelected.setAttribute('placeholder', 'Search by name');
    SearchBlockSelected.append(SearchSelected);
    SearchSelected.addEventListener('input', this.searchRight.bind(this));

    // Создает хранилище для правого контейнера и кнопок управления им
    const SelectedWrapper = document.createElement('div');
    SelectedWrapper.setAttribute('class', 'SelectedWrapper');
    Selected.append(SelectedWrapper);

    // Создание правого контейнера
    const container2 = document.createElement('div');
    container2.setAttribute('class', 'js-container2 container');
    container2.setAttribute('id', 'js-container2 container');
    SelectedWrapper.append(container2);

    // Создание панели кнопок для управления правым контейнером
    const buttonListRight = document.createElement('div');
    buttonListRight.setAttribute('class', 'button-list-right');
    SelectedWrapper.append(buttonListRight);

    // Кнопка перемещения выбранного элемента вверх на 1 (правый контейнер)
    const jsRightUp = document.createElement('button');
    jsRightUp.setAttribute('class', 'button-right js-right-up');
    jsRightUp.textContent = '🠕';
    buttonListRight.append(jsRightUp);
    jsRightUp.addEventListener('click', this.toUpRight.bind(this));

    // Кнопка перемещения выбранного элемента вниз на 1 (правый контейнер)
    const jsRightDown = document.createElement('button');
    jsRightDown.setAttribute('class', 'button-right js-right-down');
    jsRightDown.textContent = '🠗';
    buttonListRight.append(jsRightDown);
    jsRightDown.addEventListener('click', this.toDownRight.bind(this));

    // Кнопка перемещения выбранного элемента в самый вверх (правый контейнер)
    const jsRightAllUp = document.createElement('button');
    jsRightAllUp.setAttribute('class', 'button-right js-right-all-up');
    jsRightAllUp.textContent = '🠕🠕';
    buttonListRight.append(jsRightAllUp);
    jsRightAllUp.addEventListener('click', this.toTopRight.bind(this));

    // Кнопка перемещения выбранного элемента в самый низ (правый контейнер)
    const jsRightAllDown = document.createElement('button');
    jsRightAllDown.setAttribute('class', 'button-right js-right-all-down');
    jsRightAllDown.textContent = '🠗🠗';
    buttonListRight.append(jsRightAllDown);
    jsRightAllDown.addEventListener('click', this.toBottomRight.bind(this));
  }

  // Внести изменения в контейнеры
  RefreshPage() {
    const jsContainer1 = document.getElementById('js-container1 container');
    jsContainer1.innerHTML = '';
    for (let i = 0; i < this.PotentialList.length; i += 1) {
      const item = document.createElement('div');
      item.setAttribute('class', 'ArrangeBox-item js-item');
      item.setAttribute('data-id', i);
      item.setAttribute('draggable', 'true');
      item.textContent = this.PotentialList[i];
      jsContainer1.append(item);
      item.addEventListener('click', this.handleClick.bind(this));
    }
    const jsContainer2 = document.getElementById('js-container2 container');
    jsContainer2.innerHTML = '';
    for (let i = 0; i < this.SelectedList.length; i += 1) {
      const item = document.createElement('div');
      item.setAttribute('class', 'ArrangeBox-item js-item');
      item.setAttribute('data-id', i);
      item.setAttribute('draggable', 'true');
      item.textContent = this.SelectedList[i];
      jsContainer2.append(item);
      item.addEventListener('click', this.handleClick.bind(this));
    }
  }

  // Выбрать элемент на который кликнули
  handleClick(event) {
    const elements = document.getElementsByClassName('ArrangeBox-item js-item');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].classList.remove('active');
    }
    if (event.target.classList.contains('js-item')) {
      event.target.classList.add('active');
      this.currentItem = event.target.innerHTML;
    }
    // console.log(this.currentItem);
  }

  // Перенести выбранный элемент в правый контейнер
  toRight() {
    if (this.PotentialList.length !== 0 && this.currentItem !== '') {
      for (let i = 0; i < this.PotentialList.length; i += 1) {
        if (this.PotentialList[i] === this.currentItem) {
          this.SelectedList.push(this.PotentialList[i]);
          this.PotentialList.splice(i, 1);
        }
      }
      this.currentItem = '';
      this.RefreshPage();
    }
  }

  // Перенести выбиранный элемент в левый контейнер
  toLeft() {
    if (this.SelectedList.length !== 0 && this.currentItem !== '') {
      for (let i = 0; i < this.SelectedList.length; i += 1) {
        if (this.SelectedList[i] === this.currentItem) {
          this.PotentialList.push(this.SelectedList[i]);
          this.SelectedList.splice(i, 1);
        }
      }
      this.currentItem = '';
      this.RefreshPage();
    }
  }

  // Переместить все элементы в правый контейнер
  allToRigh() {
    if (this.PotentialList.length !== 0) {
      for (let i = 0; i < this.PotentialList.length; i += 1) {
        this.SelectedList.push(this.PotentialList[i]);
      }
    }
    this.PotentialList = [];
    this.RefreshPage();
  }

  // Переместить все элементы в левый контейнер
  allToLeft() {
    if (this.SelectedList.length !== 0) {
      for (let i = 0; i < this.SelectedList.length; i += 1) {
        this.PotentialList.push(this.SelectedList[i]);
      }
    }
    this.SelectedList = [];
    this.RefreshPage();
  }

  // Переместить выбранный элемент вверх на 1 (левый контейнер)
  toUpLeft() {
    if (this.PotentialList.indexOf(this.currentItem) !== 0 && this.currentItem !== '') {
      const oldId = this.PotentialList.indexOf(this.currentItem);
      const element = this.PotentialList[oldId];
      const PreviousElement = this.PotentialList[oldId - 1];
      this.PotentialList[oldId - 1] = element;
      this.PotentialList[oldId] = PreviousElement;
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Переместить выбранный элемент вниз на 1 (левый контейнер)
  toDownLeft() {
    if (this.PotentialList.indexOf(this.currentItem) !== this.PotentialList.length - 1 && this.currentItem !== '') {
      const oldId = this.PotentialList.indexOf(this.currentItem);
      const element = this.PotentialList[oldId];
      const NextElement = this.PotentialList[oldId + 1];
      this.PotentialList[oldId + 1] = element;
      this.PotentialList[oldId] = NextElement;
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Переместить элемент в самый низ (левый контейнер)
  toBottomLeft() {
    if (this.PotentialList.indexOf(this.currentItem) !== this.PotentialList.length - 1 && this.currentItem !== '') {
      const element = this.PotentialList.splice(this.PotentialList.indexOf(this.currentItem), 1);
      this.PotentialList.push(element[0]);
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Переместить элемент в самый верх (левый контейнер)
  toTopLeft() {
    if (this.PotentialList.indexOf(this.currentItem) !== 0 && this.currentItem !== '') {
      const element = this.PotentialList.splice(this.PotentialList.indexOf(this.currentItem), 1);
      this.PotentialList.unshift(element[0]);
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Переместить выбранный элемент вниз на 1 (правый контейнер)
  toDownRight() {
    if (this.SelectedList.indexOf(this.currentItem) !== this.SelectedList.length - 1 && this.currentItem !== '') {
      const oldId = this.SelectedList.indexOf(this.currentItem);
      const element = this.SelectedList[oldId];
      const NextElement = this.SelectedList[oldId + 1];
      this.SelectedList[oldId + 1] = element;
      this.SelectedList[oldId] = NextElement;
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Переместить выбранный элемент вверх на 1 (правый контейнер)
  toUpRight() {
    if (this.SelectedList.indexOf(this.currentItem) !== 0 && this.currentItem !== '') {
      const oldId = this.SelectedList.indexOf(this.currentItem);
      const element = this.SelectedList[oldId];
      const PreviousElement = this.SelectedList[oldId - 1];
      this.SelectedList[oldId - 1] = element;
      this.SelectedList[oldId] = PreviousElement;
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Переместить элемент в самый низ (левый контейнер)
  toBottomRight() {
    if (this.SelectedList.indexOf(this.currentItem) !== this.SelectedList.length - 1 && this.currentItem !== '') {
      const element = this.SelectedList.splice(this.SelectedList.indexOf(this.currentItem), 1);
      this.SelectedList.push(element[0]);
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Переместить элемент в самый верх (левый контейнер)
  toTopRight() {
    if (this.SelectedList.indexOf(this.currentItem) !== 0 && this.currentItem !== '') {
      const element = this.SelectedList.splice(this.SelectedList.indexOf(this.currentItem), 1);
      this.SelectedList.unshift(element[0]);
    }
    this.currentItem = '';
    this.RefreshPage();
  }

  // Добавить случайный элемент в левый контейнер
  addElement_left() {
    const NewElem = String(Math.floor(Math.random() * 100));
    this.PotentialList.push(NewElem);
    this.RefreshPage();
  }

  // Добавить случайный элемент в правый контейнер
  addElement_right() {
    const NewElem = String(Math.floor(Math.random() * 100));
    this.SelectedList.push(NewElem);
    this.RefreshPage();
  }

  // Вернуть контейнеры в начальное состояние
  Refresh() {
    this.PotentialList = ['Apple', 'Avocado', 'Banana', 'Coconut', 'Lemon'];
    this.SelectedList = [];
    this.currentItem = '';
    this.RefreshPage();
  }

  searchLeft(event) {
    const value = event.target.value.toLowerCase();
    const List = document.getElementById('js-container1 container').childNodes;

    List.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  searchRight(event) {
    const value = event.target.value.toLowerCase();
    const List = document.getElementById('js-container2 container').childNodes;

    List.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (text.includes(value)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  getCurrentValues() {
    let message = '';
    if (this.PotentialList.length !== 0) {
      message += 'Available: ';
      for (let i = 0; i < this.PotentialList.length; i += 1) {
        message = `${message + this.PotentialList[i]} `;
      }
    }
    if (this.SelectedList.length !== 0) {
      message += ' Selected: ';
      for (let i = 0; i < this.SelectedList.length; i += 1) {
        message = `${message + this.SelectedList[i]} `;
      }
    }

    alert(message);
  }
}

const object = new ArrangeBox();
object.myConstructor('wrapper');
