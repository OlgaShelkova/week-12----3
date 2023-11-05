const originalText = document.querySelector('#originalText');
const processButton = document.querySelector('#processButton');

    
const processText = () => {
    const text = originalText.textContent;
    
    // 1. Вывод количества символов в тексте в консоль
    console.log(`1. Количество символов в тексте: ${text.length}`);
    
    // 2. Добавление переноса строки после каждого символа `;`
    const result = text.replace(/;/g, ";\n");
    console.log(`2. Текст с переносами строк: \n${result}`);
    
    // 3. Удаление всех пробелов в переменной `result`
    const substring = result.replace(/\s/g, "");
    console.log(`3. Текст с удалёнными пробелами: ${substring}`);
    
    // 4. Извлечение подстроки из переменной `result`
    const newText = result.substring(28, 50);
    console.log(`4. Извлечение подстроки: ${newText}`);
    
    // 5. Замена вхождений слова `клён` на `дубе` в переменной `newText`
    const replacedText = newText.replace(/клён/g, "дубе");
    console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
    
    // 6. Приведение текста в переменной `result` к верхнему регистру
    const replacedText2 = result.toUpperCase();
    console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
    
    // 7. Замена всех вхождений слова `клён` на `дуб` в переменной `result`
    const replacedText3 = result.replace(/клён/g, "дуб");
    console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
    
    // 8. Нахождение индекса первого вхождения слова `моря` в тексте
    const index = text.indexOf("моря");
    console.log(`8. Индекс первого вхождения "моря": ${index}`);
    
    // 9. Изменение первой буквы в переменной `replacedText` на заглавную
    const modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
    console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
};
    
processButton.addEventListener('click', processText);

