# news-JS

Run application:  
- Copy and rename `.env.example` to `.env` and set variables with your data  
- Install dependencies by running command `npm install` in your terminal
- Run command in your terminal `npm start`  


---

# API новостей

News API — это простой HTTP REST API для поиска и извлечения новостей из Интернета.
https://newsapi.org/

Нужно будет сделать регистрацию и получить API key. В проекте создаем файл .env и вставляем следующие
```dotenv
API_URL=https://newsapi.org/v2/
API_KEY=Ваш_api_key
```
### Ключевые навыки
- JavaScript
- Classes 
- Modules in JavaScript 
- Webpack 
- TypeScript

### Источник
[Оригинальное приложение](https://github.com/rolling-scopes-school/news-JS/)

## Требования к заданию
1. Создайте собственную копию заявления.
2. Добавьте TypeScript в проект.
3. Настройте ESLint для работы с TypeScript.
4. Настройте Webpack для работы с TypeScript.

#### Перенесите приложение с JavaScript на TypeScript, используя:
- Перечисления 
- Интерфейсы 
- Типы 
- Дженерики
- Типы союзов 
- Модификаторы доступа ( private, public)
- Типы утилит ( Partial, Pick, Readonly)

Сделайте макет адаптивным с дизайном по вашему усмотрению.
Использование any шрифта СТРОГО ЗАПРЕЩЕНО!

## Требования к макету и дизайну приложения

Внешний вид приложения соответствует предложенному образцу или является его улучшенной версией.
Макет адаптивный. Минимальная ширина страницы, при которой проверяется корректность отображения приложения, составляет 320px, а максимальная ширина

## Последовательность выполнения задачи

### Шаг 1: Загрузка приложения

#### На этом этапе мы достигли следующего:
1. Интегрировал TypeScript в проект, добавив пакет TypeScript `npm`.
2. Создал `tsconfig.json` файл.
3. Настроил ESLint и Webpack для бесперебойной работы с TypeScript.
4. Реализовал плагин `typescript-eslint/recommended` в ESLint.
5. Ваша версия приложения успешно запущена и работает.

### Шаг 2: Подготовка к переносу кода на TypeScript

#### Результат выполнения этого шага включает в себя:
- Переименование файлов с расширением `*.js` в файлы с расширением `*.ts`.
- Создание необходимых интерфейсов для обмена данными с News API .

### Шаг 3: Перенос кода на TypeScript

#### Результат выполнения этого шага следующий:
- Код строго типизирован, включая:
- Объявление типов для всех переменных.
- Ввод параметров для функций и методов, а также правильная обработка случаев, когда функции не возвращают значение.
- Типизация используемых классов.
- В коде используются ранее созданные интерфейсы.
- Создаются и используются перечисления, универсальные типы, типы утилит и т. д.
- В ESLint это no-explicit-any правило включено.
- Файл конфигурации TypeScript включает следующие флаги:
```
"noImplicitAny": true
"strict": true
```

### Шаг 4: Адаптивная верстка

#### Результат выполнения этого шага:

Макет сохраняет стабильность при масштабировании, гарантируя, что элементы будут адаптироваться быстро, не перекрывая друг друга и не скрываясь за пределами области просмотра.
страницы — 1920px.