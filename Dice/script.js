let button = document.getElementById("button");
button.addEventListener("click", (e) => {
    e.preventDefault();
    let mem1 = document.getElementById("one");
    mem1.innerHTML = Math.floor(Math.random()*6+1);
    let mem2 = document.getElementById("two");
    mem2.innerHTML = Math.floor(Math.random()*6+1);
    let mem3 = document.getElementById("three");
    mem3.innerHTML = Math.floor(Math.random()*6+1);

    let num1 = Number(mem1.innerHTML);
    let num2 = Number(mem2.innerHTML);
    let num3 = Number(mem3.innerHTML);
    let maxNumber = Math.max(num1, num2, num3);

    let numbers = [
        { value: num1, element: mem1 },
        { value: num2, element: mem2 },
        { value: num3, element: mem3 }
    ];

    numbers.sort((a, b) => b.value - a.value);

    numbers[0].element.style.backgroundColor = 'green';    
    numbers[1].element.style.backgroundColor = 'yellow';   
    numbers[2].element.style.backgroundColor = 'red';

    let winnerMember = document.getElementById("winner");
    winnerMember.innerHTML= `winner is ${maxNumber}`;

    if (numbers[0].value === numbers[1].value) {
        numbers[0].element.style.backgroundColor = 'blue';
        numbers[1].element.style.backgroundColor = 'blue';
        if (numbers[1].value === numbers[2].value) {
            numbers[2].element.style.backgroundColor = 'blue';
        }
    } else if (numbers[1].value === numbers[2].value) {
        numbers[1].element.style.backgroundColor = 'blue';
        numbers[2].element.style.backgroundColor = 'blue';
    }
});