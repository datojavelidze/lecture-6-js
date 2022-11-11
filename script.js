let namee = document.querySelector('.name');
let surname = document.querySelector('.surname');
let age = document.querySelector('.age');
let nextBut = document.querySelector('.but');

let allAngaben = [
    {id: 1, name:'sumer', surname:'feron', age:20},
    {id: 2, name:'winter', surname:'gone', age:30},
    {id: 3, name:'fruhling', surname:'firet', age:40},
    
];

let index = 0;

nextBut.addEventListener('click',()=>{ 
    if(index >= allAngaben.length){
        index = 0;
    }
    namee.innerHTML = allAngaben[index].name;
    surname.innerHTML = allAngaben[index].surname;
    age.innerHTML = allAngaben[index].age;
    index++;

})