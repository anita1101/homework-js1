//1) Зарплата вечернего уборщика в городской поликлинике 40000 рублей, а педагога по вокалу 22000 рублей.
// Выведите в консоль, сколько может зарабатывать вечерний уборщик, имея голос и педагогическое образование?//
const cleaner = 40000;
const singer = 22000;
console.log(cleaner + singer);

//2. Сложите слово 'Владивосток' и число 2000 ,
// а также добавьте между ними пробел, чтобы получилось название известной песни. Результат выведите в консоль.
const city = "владивосток";
const numOne = 2000;
console.log(`${"владивосток"} ${2000}`);

//3. Прокрастинируя дома, Русалка 128 минут переписывалась в мессенджере,
//254 минуты лайкала фотокарточки,
//137 минут читала статьи ВКонтакте и 201 минуту смотрела стендапы на YouTube.
//Выведите в консоль, сколько часов прокрастинировала Русалка.//

console.log(128 + 254 + 137 + 201);

//4. Возведите число 2 в 5 степень.
console.log(2 ** 5);
//5)Выведите в консоль строку:
//"Нужно бежать со всех ног, чтобы только оставаться на месте,
// а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!"

const string =
  "Нужно бежать со всех ног, чтобы только оставаться на месте,  а чтобы куда-то попасть, надо бежать как минимум вдвое быстрее!";
console.log(string);
//У вас есть две переменные:
const greetings = "Привет";
const name = "Кот";
console.log(`${"Привет"} ${"Кот"}`);
//задание 7
let time = 0;
time = 34;
console.log(time);
console.log(`${"Старт поездки. Осталось минут:"}` + time);
time = 34 - 15;
console.log(`${"Немного сторис в соцсетях. Осталось минут:"}` + time);
time = time - 10;
console.log(`${"Немного не новостей, но событий. Осталось минут:"} ` + time);
time = 0;

console.log("Вы приехали. Добро пожаловать в Москву");
const fahrenheit = 451;
const celsius = (fahrenheit - 32) / 1.8;
console.log(
  fahrenheit +
    `${"  градуса по Фаренгейту — это "}` +
    celsius +
    `${" градуса по Цельсию."}`
);
