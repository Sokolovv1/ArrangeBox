"use strict"

class ArrangeBox {
    
    myConstructor(name) {
        this.containerName = name;
        this.PotentialList.sort();
        this.Control();
        this.RefreshPage();
    }

    PotentialList = ["Apple", "Avocado", "Banana", "Coconut", "Lemon"];
    SelectedList = [];
    currentItem = "";

    // ArrangeBox
    Control() {
        const wrapper = document.getElementById("wrapper");
        
        // Создает хранилище всех элементов страницы
        const ArrangeBox = document.createElement("div");
        ArrangeBox.setAttribute("class", "ArrangeBox");
        wrapper.append(ArrangeBox);

        // Создает хранилище всех левых элементов
        const Available = document.createElement("div");
        Available.setAttribute("class", "Available");
        ArrangeBox.append(Available);

        // Заголовок левого контейнера
        const AvailableTittle = document.createElement("h2");
        AvailableTittle.textContent = "Available";
        Available.append(AvailableTittle);

        // Создаем поисковую форму для левого контейнера
        const SearchBlockAvailable = document.createElement("form");
        SearchBlockAvailable.setAttribute("class", "SearchBlockAvailable searchblock");
        SearchBlockAvailable.setAttribute("onkeypress", "if(event.keyCode == 13) return false;");
        Available.append(SearchBlockAvailable);

        const SearchAvailable = document.createElement("input");
        SearchAvailable.setAttribute("id", "SearchAvailable");
        SearchAvailable.setAttribute("class", "SearchAvailable");
        SearchAvailable.setAttribute("type", "search");
        SearchAvailable.setAttribute("placeholder", "Search by name");
        SearchBlockAvailable.append(SearchAvailable);
        SearchAvailable.addEventListener("input", object.searchLeft.bind(object));

        // Создает хранилище для левого контейнера и кнопок управления им
        const AvailableWrapper = document.createElement("div");
        AvailableWrapper.setAttribute("class", "AvailableWrapper");
        Available.append(AvailableWrapper);

        // Создает панель кнопок для управления левым контейнером
        const button_list_left = document.createElement("div");
        button_list_left.setAttribute("class", "button-list-left");
        AvailableWrapper.append(button_list_left);

        // Кнопка перемещения выбранного элемента вверх на 1 (левый контейнер)
        const js_left_up = document.createElement("button");
        js_left_up.setAttribute("class", "button-left js-left-up");
        js_left_up.textContent = "🠕"
        button_list_left.append(js_left_up);
        js_left_up.addEventListener("click", object.toUpLeft.bind(object));
        
        // Кнопка перемещения выбранного элемента вниз на 1 (левый контейнер)
        const js_left_down = document.createElement("button");
        js_left_down.setAttribute("class", "button-left js-left-down");
        js_left_down.textContent = "🠗"
        button_list_left.append(js_left_down);
        js_left_down.addEventListener("click", object.toDownLeft.bind(object));

        // Кнопка перемещения выбранного элемента в самый вверх (левый контейнер)
        const js_left_all_up = document.createElement("button");
        js_left_all_up.setAttribute("class", "button-left js-left-all-up");
        js_left_all_up.textContent = "🠕🠕"
        button_list_left.append(js_left_all_up);
        js_left_all_up.addEventListener("click", object.toTopLeft.bind(object));

        // Кнопка перемещения выбранного элемента в самый низ (левый контейнер)
        const js_left_all_down = document.createElement("button");
        js_left_all_down.setAttribute("class", "button-left js-left-all-down");
        js_left_all_down.textContent = "🠗🠗"
        button_list_left.append(js_left_all_down);
        js_left_all_down.addEventListener("click", object.toBottomLeft.bind(object));

        // Создание левого контейнера
        const container1 = document.createElement("div");
        container1.setAttribute("class", "js-container1 container");
        container1.setAttribute("id", "js-container1 container");
        AvailableWrapper.append(container1);
        
        // Создание панели кнопок для взаимодействия элементов между контейнерами
        const button_list_center = document.createElement("div");
        button_list_center.setAttribute("class", "button-list-center");
        ArrangeBox.append(button_list_center);

        // Кнопка перемещения выбранного элемента в левый контейнер
        const js_left = document.createElement("button");
        js_left.setAttribute("class", "button-center js-left");
        js_left.textContent = "🠔";
        button_list_center.append(js_left);
        js_left.addEventListener("click", object.toLeft.bind(object));

        // Кнопка перемещения выбранного элемента в правый контейнер
        const js_right = document.createElement("button");
        js_right.setAttribute("class", "button-center js-right");
        js_right.textContent = "🠖";
        button_list_center.append(js_right);
        js_right.addEventListener("click", object.toRight.bind(object));

        // Кнопка перемещения всех элементов в левый контейнер
        const js_left_all = document.createElement("button");
        js_left_all.setAttribute("class", "button-center js-left-all");
        js_left_all.textContent = "🠔🠔";
        button_list_center.append(js_left_all);
        js_left_all.addEventListener("click", object.allToLeft.bind(object));

        // Кнопка перемещения всех элементов в правый контейнер
        const js_right_all = document.createElement("button");
        js_right_all.setAttribute("class", "button-center js-right-all");
        js_right_all.textContent = "🠖🠖";
        button_list_center.append(js_right_all);
        js_right_all.addEventListener("click", object.allToRigh.bind(object));

        // Добавить случайный элемент в правый контейнер
        const js_add_right = document.createElement("button");
        js_add_right.setAttribute("class", "button-center js-add-right");
        js_add_right.textContent = "Add right item";
        button_list_center.append(js_add_right);
        js_add_right.addEventListener("click", object.addElement_right.bind(object));
        
        // Добавить случайный элемент в левый контейнер
        const js_add_left = document.createElement("button");
        js_add_left.setAttribute("class", "button-center js-add-left");
        js_add_left.textContent = "Add left item";
        button_list_center.append(js_add_left);
        js_add_left.addEventListener("click", object.addElement_left.bind(object));
        
        // Кнопка возвращения элементов в первоначальное состояние
        const js_refresh = document.createElement("button");
        js_refresh.setAttribute("class", "button-center js-refresh");
        js_refresh.textContent = "Refresh";
        button_list_center.append(js_refresh);
        js_refresh.addEventListener("click", object.Refresh.bind(object));

        // Кнопка получения текущих значений
        const js_get_current_values = document.createElement("button");
        js_get_current_values.setAttribute("class", "button-center js_get_current_values");
        js_get_current_values.textContent = "Get values";
        button_list_center.append(js_get_current_values);
        js_get_current_values.addEventListener("click", object.getCurrentValues.bind(object));

        // Создает хранилище всех правых элементов
        const Selected = document.createElement("div");
        Selected.setAttribute("class", "Selected");
        ArrangeBox.append(Selected);

        // Заголовок правого контейнера
        const SelectedTittle = document.createElement("h2");
        SelectedTittle.textContent = "Selected";
        Selected.append(SelectedTittle);

        // Создает поисковую форму для правого контейнера
        const SearchBlockSelected = document.createElement("form");
        SearchBlockSelected.setAttribute("class", "SearchBlockSelected searchblock");
        SearchBlockSelected.setAttribute("onkeypress", "if(event.keyCode == 13) return false;");
        Selected.append(SearchBlockSelected);

        const SearchSelected = document.createElement("input");
        SearchSelected.setAttribute("id", "SearchSelected");
        SearchSelected.setAttribute("class", "SearchSelected");
        SearchSelected.setAttribute("type", "search");
        SearchSelected.setAttribute("placeholder", "Search by name");
        SearchBlockSelected.append(SearchSelected);
        SearchSelected.addEventListener("input", object.searchRight.bind(object));

        // Создает хранилище для правого контейнера и кнопок управления им
        const SelectedWrapper = document.createElement("div");
        SelectedWrapper.setAttribute("class", "SelectedWrapper");
        Selected.append(SelectedWrapper);

        // Создание правого контейнера
        const container2 = document.createElement("div");
        container2.setAttribute("class", "js-container2 container");
        container2.setAttribute("id", "js-container2 container");
        SelectedWrapper.append(container2);

        // Создание панели кнопок для управления правым контейнером
        const button_list_right = document.createElement("div");
        button_list_right.setAttribute("class", "button-list-right");
        SelectedWrapper.append(button_list_right);

        // Кнопка перемещения выбранного элемента вверх на 1 (правый контейнер)
        const js_right_up = document.createElement("button");
        js_right_up.setAttribute("class", "button-right js-right-up");
        js_right_up.textContent = "🠕";
        button_list_right.append(js_right_up);
        js_right_up.addEventListener("click", object.toUpRight.bind(object));

        // Кнопка перемещения выбранного элемента вниз на 1 (правый контейнер)
        const js_right_down = document.createElement("button");
        js_right_down.setAttribute("class", "button-right js-right-down");
        js_right_down.textContent = "🠗";
        button_list_right.append(js_right_down);
        js_right_down.addEventListener("click", object.toDownRight.bind(object));

        // Кнопка перемещения выбранного элемента в самый вверх (правый контейнер)
        const js_right_all_up = document.createElement("button");
        js_right_all_up.setAttribute("class", "button-right js-right-all-up");
        js_right_all_up.textContent = "🠕🠕";
        button_list_right.append(js_right_all_up);
        js_right_all_up.addEventListener("click", object.toTopRight.bind(object));

        // Кнопка перемещения выбранного элемента в самый низ (правый контейнер)
        const js_right_all_down = document.createElement("button");
        js_right_all_down.setAttribute("class", "button-right js-right-all-down");
        js_right_all_down.textContent = "🠗🠗";
        button_list_right.append(js_right_all_down);
        js_right_all_down.addEventListener("click", object.toBottomRight.bind(object));
    }

    // Внести изменения в контейнеры
    RefreshPage() {
        const js_container1 = document.getElementById("js-container1 container");
        js_container1.innerHTML = "";
        for (let i = 0; i < this.PotentialList.length; i++){
            const item = document.createElement("div");
            item.setAttribute("class", "ArrangeBox-item js-item");
            item.setAttribute("data-id", i);
            item.setAttribute("draggable", "true");
            item.textContent = this.PotentialList[i];
            js_container1.append(item);
            item.addEventListener("click", object.handleClick.bind(object));
        }
        const js_container2 = document.getElementById("js-container2 container");
        js_container2.innerHTML = "";
        for (let i = 0; i < this.SelectedList.length; i++){
            const item = document.createElement("div");
            item.setAttribute("class", "ArrangeBox-item js-item");
            item.setAttribute("data-id", i);
            item.setAttribute("draggable", "true");
            item.textContent = this.SelectedList[i];
            js_container2.append(item);
            item.addEventListener("click", object.handleClick.bind(object));
        }

        }
    // Выбрать элемент на который кликнули
    handleClick(event){
        const elements = document.getElementsByClassName("ArrangeBox-item js-item");
        for (let i = 0; i < elements.length; i++){
            elements[i].classList.remove("active");
        }
        if (event.target.classList.contains("js-item")){
            event.target.classList.add("active");
            this.currentItem = event.target.innerHTML;
        }
        }
    // Перенести выбранный элемент в правый контейнер
    toRight(){
            if(this.PotentialList.length !== 0 && this.currentItem !== ""){
                for (let i =0; i < this.PotentialList.length; i++){
                    if(this.PotentialList[i] == this.currentItem){
                        this.SelectedList.push(this.PotentialList[i]);
                        this.PotentialList.splice(i,1);
                    }
                }
                this.currentItem = "";
                this.RefreshPage();
            }
        }
    // Перенести выбиранный элемент в левый контейнер
    toLeft(){
        if(this.SelectedList.length !== 0 && this.currentItem !== ""){
            for (let i = 0; i < this.SelectedList.length; i++){
                if (this.SelectedList[i] == this.currentItem){
                    this.PotentialList.push(this.SelectedList[i]);
                    this.SelectedList.splice(i,1);
                }
            }
            this.currentItem = "";
            this.RefreshPage();
        }
    }
    // Переместить все элементы в правый контейнер
    allToRigh() {
        if (this.PotentialList.length !== 0){
            for(let i = 0; i < this.PotentialList.length; i++){
                this.SelectedList.push(this.PotentialList[i]);
            }
        }
        this.PotentialList = [];
        this.RefreshPage();
    }
    // Переместить все элементы в левый контейнер
    allToLeft() {
        if(this.SelectedList.length !== 0){
            for(let i = 0; i <this.SelectedList.length; i++){
                this.PotentialList.push(this.SelectedList[i]);
            }
        }
        this.SelectedList = [];
        this.RefreshPage();
    }

    // Переместить выбранный элемент вверх на 1 (левый контейнер)
    toUpLeft(){
        if (this.PotentialList.indexOf(this.currentItem) !== 0 && this.currentItem !== ""){
            let old_id = this.PotentialList.indexOf(this.currentItem);
            let element = this.PotentialList[old_id];
            let PreviousElement = this.PotentialList[old_id - 1];
            this.PotentialList[old_id - 1] = element;
            this.PotentialList[old_id] = PreviousElement;
        }
        this.currentItem = "";
        this.RefreshPage();
    }
        // Переместить выбранный элемент вниз на 1 (левый контейнер)
        toDownLeft(){
            if (this.PotentialList.indexOf(this.currentItem) !== this.PotentialList.length-1 && this.currentItem !== ""){
                let old_id = this.PotentialList.indexOf(this.currentItem);
                let element = this.PotentialList[old_id];
                let NextElement = this.PotentialList[old_id + 1];
                this.PotentialList[old_id + 1] = element;
                this.PotentialList[old_id] = NextElement;
            }
            this.currentItem = "";
            this.RefreshPage();
        }

        // Переместить элемент в самый низ (левый контейнер)
        toBottomLeft() {
            if (this.PotentialList.indexOf(this.currentItem) !== this.PotentialList.length - 1 && this.currentItem !== "") {
                let element = this.PotentialList.splice(this.PotentialList.indexOf(this.currentItem), 1);
                this.PotentialList.push(element[0]);
            }
            this.currentItem = "";
            this.RefreshPage();
        }

        // Переместить элемент в самый верх (левый контейнер)
        toTopLeft() {
            if (this.PotentialList.indexOf(this.currentItem) !== 0 && this.currentItem !== ""){
                let element = this.PotentialList.splice(this.PotentialList.indexOf(this.currentItem), 1);
                this.PotentialList.unshift(element[0]);
            }
            this.currentItem = "";
            this.RefreshPage();
        }

        // Переместить выбранный элемент вниз на 1 (правый контейнер)
        toDownRight(){
            if (this.SelectedList.indexOf(this.currentItem) !== this.SelectedList.length-1 && this.currentItem !== ""){
                let old_id = this.SelectedList.indexOf(this.currentItem);
                let element = this.SelectedList[old_id];
                let NextElement = this.SelectedList[old_id + 1];
                this.SelectedList[old_id + 1] = element;
                this.SelectedList[old_id] = NextElement;
            }
            this.currentItem = "";
            this.RefreshPage();
        }

        // Переместить выбранный элемент вверх на 1 (правый контейнер)
        toUpRight(){
            if (this.SelectedList.indexOf(this.currentItem) !== 0 && this.currentItem !== ""){
                let old_id = this.SelectedList.indexOf(this.currentItem);
                let element = this.SelectedList[old_id];
                let PreviousElement = this.SelectedList[old_id - 1];
                this.SelectedList[old_id - 1] = element;
                this.SelectedList[old_id] = PreviousElement;
            }
            this.currentItem = "";
            this.RefreshPage();
        }

        // Переместить элемент в самый низ (левый контейнер)
        toBottomRight() {
            if (this.SelectedList.indexOf(this.currentItem) !== this.SelectedList.length - 1 && this.currentItem !== "") {
                let element = this.SelectedList.splice(this.SelectedList.indexOf(this.currentItem), 1);
                this.SelectedList.push(element[0]);
            }
            this.currentItem = "";
            this.RefreshPage();
        }

        // Переместить элемент в самый верх (левый контейнер)
        toTopRight() {
            if (this.SelectedList.indexOf(this.currentItem) !== 0 && this.currentItem !== ""){
                let element = this.SelectedList.splice(this.SelectedList.indexOf(this.currentItem), 1);
                this.SelectedList.unshift(element[0]);
            }
            this.currentItem = "";
            this.RefreshPage();
        }

        // Добавить случайный элемент в левый контейнер
        addElement_left(){   
            let Status = false;
            let NewElem = String(Math.floor(Math.random() * 100));
            for (let i = 0; i < this.PotentialList.length; i++){
                if(this.PotentialList[i] == NewElem){
                    Status = true;
                }
            }
            if(Status == false){
                this.PotentialList.push(NewElem);
                this.RefreshPage();
            }
        }
        // Добавить случайный элемент в правый контейнер
        addElement_right(){
            let Status = false;
            let NewElem = String(Math.floor(Math.random() * 100));
            for (let i = 0; i < this.SelectedList.length; i++){
                if(this.SelectedList[i] == NewElem){
                    Status = true;
                }
            }
            if(Status == false){
                this.SelectedList.push(NewElem);
                this.RefreshPage();
            }
        }

        // Вернуть контейнеры в начальное состояние
        Refresh(){
            this.PotentialList = ["Apple", "Avocado", "Banana", "Coconut", "Lemon"];
            this.SelectedList = [];
            this.currentItem = "";
            this.RefreshPage();
        }

        searchLeft(){
            const value = event.target.value.toLowerCase();
            const List = document.getElementById("js-container1 container").childNodes;

            List.forEach((item) => {
                const text = item.textContent.toLowerCase();
                if (text.includes(value)) {
                item.style.display = "block";
                } else {
                item.style.display = "none";
                }
            });
        }

        searchRight() {
            const value = event.target.value.toLowerCase();
            const List = document.getElementById("js-container2 container").childNodes;

            List.forEach((item) => {
                const text = item.textContent.toLowerCase();
                if (text.includes(value)) {
                item.style.display = "block";
                } else {
                item.style.display = "none";
                }
            });
        }

        getCurrentValues() {
            let message = "";
            if (this.PotentialList.length !== 0){
                message = message + "Available: ";
                for(let i = 0; i < this.PotentialList.length; i++){
                    message = message + this.PotentialList[i] + " ";
                }
            }
            if (this.SelectedList.length !== 0){
                message = message + " Selected: ";
                for (let i = 0; i < this.SelectedList.length; i++){
                    message = message + this.SelectedList[i] + " ";
            }

            }

            alert(message);
        }

}

let object = new ArrangeBox();
object.myConstructor("wrapper");
