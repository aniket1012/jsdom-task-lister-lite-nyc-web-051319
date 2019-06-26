document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const container = document.querySelector('#tasks')
  const taskForm = document.querySelector('#create-task-form')

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const textField = e.target.querySelector('#new-task-description')
    const text = textField.value
    const newLi = document.createElement('li')
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'X'
    newLi.innerText = text
    container.appendChild(newLi)
    newLi.appendChild(deleteButton)
  })
  container.addEventListener('click', function (e) {
    if (e.target.innerHTML === 'X'){
      e.target.parentElement.remove()
    }
      
// I need tro create a li
// I need to change the innertext of that li
//     
    // }
  })

});