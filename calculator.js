var deistvie;

while(true){
    deistvie = prompt("Выберите действие:\n1. Сложение\n2. Вычитание\n3. Умножение\n4. Деление\n5. Возведение в степень\n6. Квадратный корень\n");
    switch(deistvie){
    case '1':
        var a = parseFloat(prompt("Введите первое число: "));
        var b = parseFloat(prompt("Введите второе число: "));
        var otvet = a + b;
        alert("Ответ:" +' '+ otvet);
        break;
    case '2':
        var a = parseFloat(prompt("Введите первое число: "));
        var b = parseFloat(prompt("Введите второе число: "));
        var otvet = a - b;
        alert("Ответ:" +' '+ otvet);
        break;
    case '3':
        var a = parseFloat(prompt("Введите первое число: "));
        var b = parseFloat(prompt("Введите второе число: "));
        var otvet = a * b;
        alert("Ответ:" +' '+ otvet);
        break;
    case '4':
        var a = parseFloat(prompt("Введите первое число: "));
        var b = parseFloat(prompt("Введите второе число: "));
        var otvet = a / b;
        alert("Ответ:" +' '+ otvet);
        break;
    case '5':
        var a = parseFloat(prompt("Введите число: "));
        var b = parseFloat(prompt("Введите степень: "));
        var otvet = a ** b;
        alert("Ответ:" +' '+ otvet);
        break;
    case '6':
        var a = parseFloat(prompt("Введите число: "));
        var otvet = Math.sqrt(a);
        alert("Ответ:" +' '+ otvet);
        break;
    default:
        alert("Ты чо по клавиатуре тыкать не умееш или читать не умееш");
        break;
    }
}