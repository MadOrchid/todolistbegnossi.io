//    const buttonTarefa = document.getElementById('criar-tarefa');
//    const stringTarefa = document.getElementById('texto-tarefa');
//    const listaTarefas = document.getElementById('lista-tarefas')
//    const novaTarefa = document.createElement('li');
//
//function criarTarefa() {
//
//    novaTarefa.className = 'item-tarefa';
//    novaTarefa.innerText = stringTarefa.value;
//    listaTarefas.appendChind(novaTarefa);
//    stringTarefa.value = ''
//    buttonTarefa.addEventListner('click', criarTarefa)
//}

/* const lista = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const addButton = document.getElementById('criar-tarefa');

function addTask (){
    let item = document.createElement('li');
    item.innerHTML = input.value ;
    item.class  = 'item selected'
    lista.appendChild(item)
    input.value = '';
}
addButton.addEventListener('click' , addTask);

function  mudaCor (event) {
    let task  = document.querySelectorAll('.tarefa')
    for (let index = 0; index <tarefa.lenght; index += 1) {
        const element = window.getComputedStyle(tarefas[index].backgoundColor);
        if (element == 'rgb(128, 128, 128)'){
            tarefas[index].style.backgoundColor = 'rgba(0, 0, 0)'
        }
    }
    event.target.style.backgoundColor = 'rgb(128, 128, 128)'
}

 */




let input = document.querySelector("#texto-tarefa")
let lista = document.querySelector("#lista-tarefas")
let tarefa = document.querySelector("#criar-tarefa")




tarefa.addEventListener("click", lidaComInput)
function lidaComInput() {
    if (input.value !== '') {
        let criaLi = document.createElement("li")
        criaLi.innerText = input.value
        criaLi.addEventListener("dblclick", riscaItem)
        lista.appendChild(criaLi)
        input.value = '';
    }
}

lista.addEventListener('click', aletaraCorDeFundo)
function aletaraCorDeFundo(event) {
    let tarefas = lista.children
    for (i = 0; i < tarefas.length; i += 1) {
        tarefas[i].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscaItem(event) {
    if (event.target.style.textDecoration === '') {
        event.target.classList.add('completed')
        event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
    }else {
        event.target.style.textDecoration = ''
        event.target.className = ''

    }
}
























//
//function select(event) {
//    let selectedItem = document.querySelectorAll('.selected');
//    for ( index = 0; index < selectedItem.length ; index +=  1) {
//        selectedItem[index].classList.remove('selected');
//    }
//    event.target.classList.add('selected');
//}
//lista.addEventListener('click' , select);
//lista.addEventListener('dbclick' , function(event){
//    event.target.classList.add('completed')
//})



