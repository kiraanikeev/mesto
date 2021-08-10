export class Section{
    constructor({items, renderer, containerSelector}){
        this.items=items;
        this.renderer=renderer;
        this.containerSelector=containerSelector;
    }
    //принимает DOM-элемент и добавляет его в контейнер.
    addItem(element){
this.containerSelector.prepend(element)
    }
    //отвечает за отрисовку всех элементов(для каждого элемента выполняем функцию по отрисовки )
    allItemsRanderer(){
        this.items.forEach(itemsElement=>{
            this.renderer(itemsElement)
          
            
        })
    }
}

