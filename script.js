let money = prompt("Ваш бюджет на месяц ?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses: {


    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};
console.log(appData);


let expEx = prompt("введите об статью расходов");

appData.expenses[expEx] = prompt("во сколько это обойдеться,");
alert("бюджет на 1 день" +appData.budget/30);