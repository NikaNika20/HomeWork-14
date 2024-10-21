function checkSquare(num) {
    const square = num * num;
    if (square > 100) {
        console.log("მეტი არის ასზე");
    } else {
        console.log("ნაკლებია ასზე");
    }
}

function checkRange(num) {
    if (num > 50 && num < 100) {
        console.log("რიცხვი 50-ზე მეტია და 100-ზე ნაკლებია");
    } else {
        console.log("რიცხვი არ არის 50-ზე მეტი და 100-ზე ნაკლები");
    }
}

function checkZeroOrNegative(num) {
    if (num <= 0) {
        console.log("რიცხვი ნულის ტოლი ან უარყოფითია");
    } else {
        console.log("რიცხვი დადებითია");
    }
}
function checkPerimeter(length, width) {
    const perimeter = 2 * (length + width);
    if (perimeter > 50) {
        console.log("პერიმეტრი მეტია 50-ზე");
    } else {
        console.log("პერიმეტრი ნაკლებია 50-ზე");
    }
}

checkSquare(10);
checkRange(75);
checkZeroOrNegative(-5);
checkPerimeter(30, 25);
