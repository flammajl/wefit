const menu = document.querySelector('.btn-group-vertical')
const header = document.querySelector('.jumbotron')
const cards = document.querySelector('.container .row:nth-of-type(3)')
const list = document.querySelector('.container .row:last-child')

function changeMenuOrientation(){
  if(menu) {
    menu.classList.remove('btn-group-vertical')
  }
}

function changeHeaderStyle() {
  if(header) {
    const hr = document.querySelector('.jumbotron hr')
    const btn = document.querySelector('.jumbotron a')
    header.classList.add('d-flex','flex-column','align-items-end','bg-secondary','text-white', 'text-right')
    hr.classList.add('align-self-stretch', 'border-white')
    btn.classList.add('bg-success', 'border-success')
  }
}

function changeCardsPosition() {
  if(cards) {
    const [header, animalsCard, technologyCard, peopleCard, natureCard] = Array.from(cards.children)
    const animalsButton = animalsCard.querySelector('a')
    header.classList.add('order-0')
    natureCard.classList.add('order-1')
    animalsCard.classList.add('order-2')
    peopleCard.classList.add('order-3')
    technologyCard.classList.add('order-4')

    animalsButton.classList.add('bg-success', 'border-success')
  }
}

function addMoreElementsToList() {
  if(list) {
    function createNewItem(text) {
      const newItem = document.createElement('li')
      const newItemText = document.createTextNode(text)
      newItem.appendChild(newItemText)
      newItem.classList.add('list-group-item')

      return newItem
    }

    const listGroup = list.querySelector('.list-group')
    const fourthItem = createNewItem('Quarto Item')
    const fifthItem = createNewItem('Quinto Item')
    fourthItem.classList.add('active')

    if(listGroup) {
      const firstItem = listGroup.children[0]
      firstItem.classList.remove('active')
      listGroup.append(fourthItem)
      listGroup.append(fifthItem)
    }
    
  }
}

function init() {
  changeMenuOrientation()
  changeHeaderStyle()
  changeCardsPosition()
  addMoreElementsToList()
}

init()
