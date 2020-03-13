<!-- START doctoc generated TOC please keep comment here to allow auto update
DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE


- [Overview](#overview)
- [References](#references)
  - [TypeScript](#typescript)
  - [Webpack 4](#webpack-4)
  - [Karma, Jasmine](#karma-jasmine)
  - [All together](#all-together)

END doctoc generated TOC please keep comment here to allow auto update

# Overview

The tutorial explaining how to use this repo and it's directory structure and
configuration files are in this
[developerlife.com tutorial](http://developerlife.com/2019/07/06/starter-project-typescript-karma-jasmine-webpack/).

<img src="https://raw.githubusercontent.com/nazmulidris/ts-template/master/arch-diagram.jpg" width="50%"></img>

# References

## TypeScript

TypeScript intro

- https://www.youtube.com/watch?v=XShQO3BvOyM

TypeScript and Webpack 4 intro

- https://www.youtube.com/watch?v=8TiZdePyduI
- https://github.com/GeekLaunch/webpack-tutorial
- https://github.com/TypeStrong/ts-loader

## Webpack 4

Webpack 4

- https://wanago.io/2018/07/16/webpack-4-course-part-one-entry-output-and-es6-modules/

Webpack configuration

- https://webpack.js.org/configuration/devtool/
- https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9

Webpack dev server configuration

- https://github.com/webpack/webpack-dev-server/issues/720#issuecomment-268470989
- https://webpack.js.org/guides/development/#using-webpack-dev-server

## Karma, Jasmine

Karma, Jasmine

- http://www.bradoncode.com/blog/2015/02/27/karma-tutorial/
- https://stackoverflow.com/a/17327465/2085356

## All together

Karma, Jasmine, and Webpack setup

- https://mike-ward.net/2015/09/07/tips-on-setting-up-karma-testing-with-webpack/

TypeScript migrate from typings to npm @types

- http://codereform.com/blog/post/migrating-from-typings-to-npm-types/

TypeScript, Webpack, Jasmine, and Karma

- https://templecoding.com/blog/2016/02/02/how-to-setup-testing-using-typescript-mocha-chai-sinon-karma-and-webpack
- https://github.com/thitemple/TypescriptMochaWebpackDemo
 -->

# tsSlider

## Описание
 
Кастомизируемый jQuery плагин слайдера. Написан на typescript, сборка - webpack, тесты - karma, jasmine, jasmine-jQuery. Настраивается и изменяется внешний вид слайдера. При перетаскивании бегунков слайдера изменяются значения связанных инпутов, при изменении значений инпутов меняется значение бегунков.

## Тестовая страница

https://parunkov.github.io/slider/dist/

## Использование

Подключите стили из папки /dist/css:

	<head> 
	  ... 
	  <link href="./css/ts-slider.css" rel="stylesheet">
	</head>

Подключите jQuery и скрипт ts-slider.js:

	<body>
	  ...
	  <script type="text/javascript" src="./jquery-3.4.1.min.js"></script>
	  <script type="text/javascript" src="./ts-slider.js"></script>
	</body>

Задайте опции в объекте, например:

	const options = {
	  minInputId: 'page__input-11',
	  maxInputId: 'page__input-12',
	  isArray: false,
	  step: 10,
	  isRange: true,
	  isVertical: false,
	  scaleQuantity: 4
	}

Инициализируйте плагин на элементе с id, например #my-id:

		  $('#my-id').tsSlider(options);

## Опции

  minInputId

    Тип string
    Значение по умолчанию 'ts-slider__min-input'

    Id инпута type="text" с  минимальным значением диапазона.

  maxInputId

    Тип string
    Значение по умолчанию 'ts-slider__max-input'

    Id инпута type="text" с значением слайдера или ммаксимальным значением диапазона.

  isArray

    Тип boolean
    Значение по умолчанию false

    Устанавливает слайдер по массиву строк от первого до последнего элемента, шкала слайдера создается из элементов массива.

  array

    Тип array
    Значение по умолчанию []

    Массив строк для слайдера.

  step

    Тип number
    Значение по умолчанию 1

    Шаг слайдера.

  minValue

    Тип number
    Значение по умолчанию 0

    Минимальное значение шкалы слайдера.

  maxValue

    Тип number
    Значение по умолчанию 100

    Максимальное значение шкалы слайдера.

  minToggleValue

    Тип number
    Значение по умолчанию 25

    Минимальное значение диапазона слайдера по умолчанию.

  maxToggleValue

    Тип number
    Значение по умолчанию 75

    Значение слайдера или максимальное значение диапазона слайдера по умолчанию.

  isRange

    Тип boolean
    Значение по умолчанию true

    Включает диапазон для слайдера.

  isVertical

    Тип boolean
    Значение по умолчанию false

    Включает вертикальный вид слайдера.

  isTab

    Тип boolean
    Значение по умолчанию true

    Включает отображение значений слайдера над бегунками.

  isScale

    Тип boolean
    Значение по умолчанию true

    Включает отображение шкалы слайдера.

  scaleQuantity

    Тип number
    Значение по умолчанию 4

    Количество значений шкалы слайдера, при isArray = true игнорируется.

# Методы
  
### Change

    Пример использования $('#my-id').tsSlider(options, 'change');

    Изменяет отображение слайдера снаружи скриптом в соответсвии с options.

# Архитектура приложения

## Слой "Презентер"

Содержит модули index.ts, data.ts, functions.ts, interfaces.ts, presenter.ts.

### Модуль index.ts

Точка входа webpack. Обертка для jQuery плагина.

Методы:

	methods.init() - создает презентер
	mrthods.change() - меняет данные презентера

### Модуль presenter.ts

#### Класс Presenter

Создает и изменяет данные, создает вид и модель. Отслеживает изменения вида и модели, осуществляет пресчет и передачу данных между ними.

Свойства:
	
	wrap - элемент-обертка, в котором создается слайдер
	data - данные слайдера
	options - опции слайдера
	view - вид
	model - модель
	value - значение слайдера

Методы:

	setValue() - устанавливает значение слайдера из данных
	createData() - клонирует данные по умолчанию и объединяет их с опциями, исправляет неверные значения
	changeData() - изменяет данные при изменении снаружи, инициализирует слайдер с новыми данными
	setTabText() - передает текст над бегунком из модели в вид
	initScale() - создает шкалу, создает событие initScale в виде
	setToView() - рассчитывает данные для вида
	setToModel() - рассчитывает данные для модели
	init() - создает вид и модель, создает событие setPrecent в модели, создает событие initValue в виде, отслеживает событие changeValue в виде и при его возникновении создает событие changeValue в модели
	onMoveToggle() - отслеживает событие moveToggle в виде и при его возникновении создает событие changeValue в модели
	onChangeTabText() - отслеживает событие changeTabText в модели и при его возникновении создает событие changeTab в виде
	onCangeInput() - рассчитывает текст над бегунком в виде при изменении инпута, отслеживает событие changeInput в модели и при его возникновении создает событие changeInput в виде
    
### Модуль data.ts

	defaultData - данные по умолчанию
	setDataLimit() - исправляет ошибки в данных

### Модуль interfaces.ts

	interface Data - интерфейс данных
	interface Value - интерфейс значения слайдера
	interface TabText - интерфейс текста над бегунками

### Модуль function.ts 

	setMouseHandler() - функция установки обрабочтиков событий мыши
	round() - функция округления значения до шага
	setLimit() - функция исправления значения слайдера при выходе за ограничения
	toPrecent() - функция пересчета значения модели в значение вида в пределах от 0 до 1
	toValue() - функция пересчета значения вида в значение модели
	setRangeStyle() - функция установки стиля для отображения диапазона в виде

## Слой "Вид"

Содержит модули view.ts, toggle.ts, scale.ts, init-view-markup.ts.

### Модуль view.ts

#### Класс View

Создает и изменяет HTML разметку слайдера, отслеживает перетаскивание бегунков.

Свойства:
  
    wrap - элемент-обертка, в котором создается слайдер
    data - данные слайдера
    precent - значение бегунков слайдера в диапазоне от 0 до 1
    tabText - текст над бегунками
    container - контейнер слайдера
    minToggleElem - HTML элемент бегунка min
    maxToggleElem - HTML элемент бегунка max
    minToggle - объект бегунка min
    maxToggle - объект бегунка max
    minTabElem - HTML элемент текста над бегунком min
    maxTabElem - HTML элемент текста над бегунком max
    rangeElem - HTML элемент диапазона
    size - размер контейнера в пикселях
    scale - массив значений шкалы

Методы:

    initView() - создает разметку слайдера
    setTab() - устанавливает текст над бегунками
    setRange() - устанавливает стиль элемента диапазона
    createToggle() - создает объекты бегунков, отслеживает их перетаскивания, создает события moveToggle в виде
    onToggleCoincidence() - обрабатывает разделение бегунков при совпадении
    addScale() - создает шкалу
    changeTab() - изменяет текст над бегунками
    changeInput() - отслеживает событие changeInput в виде и меняет положение бегунков и текста на ними
    removeMarkup() - удаляет HTML разметку слайдера

### Модуль toggle.ts

#### Класс Toggle

Создает объект бегунка и отслеживает его перетаскивание

Свойства:

    toggle - HTML элемент бегунка
    min - ограничение минимума
    max - ограничение максимума
    mousePixel - значение координаты указателя мыши при перетаскивании бегунка (без ограничений) в пикселях
    pixel - значение бегунка в пикселях
    precent - значение бегунка в диапазоне от 0 до 1
    size - размер контейнера слайдера в пикселях
    isVertical - указатель вертикального вида слайдера
    isFixed - указатель фиксации бегунка

Методы:

    setStyle() - устанавливает стиль бегунка
    changeToggle() - рассчитывает значение бегунка и изменяет стиль
    onMoveToggle() - отслеживает перетаскивание бегунка

### Модуль scale.ts

#### Класс Scale

Создает шкалу

Свойства:

    slider - HTML элемент контейнера слайдера
    scale - массив значений шкалы
    isVertical - указатель вертикального вида слайдера

Методы:

  createItem() - создает разметку шкалы

### Модуль init-view-markup.ts

    initViewMarkup() - функция создания HTML разметки слайдера
    markup() - функция создания объекта из элементов разметки слайдера

## Слой "Модель"

Содержит модуль model.ts.

### Модуль model.ts

#### Класс Model

Содержит бизнес-логику слайдера, выводит значения слайдера в инпуты и отслеживает значения инпутов

Свойства:

    data - данные слайдера
    minInput - инпут для значения min
    maxInput - инпут для значения min
    value - числовое значение слайдера
    precent - числовое значение для слайдера по массиву строк
    tabText - значение слайдера, преобразованное в строки
    observer - HTML элемент, на котором создаются события модели
    scale - массив значений шкалы

Методы:

    setInput() - устанавливает значение инпутов
    setArrayValue() - устанавливает значение инпутов для слайдера по массиву строк
    init() - создает инпуты, рассчитывает значение и отслеживает событие модели setPrecent
    setScale() - создает массив элементов шкалы
    addListener() - отслеживает событие changeValue в модели, рассчитывает значение и создает событие changeTabText в модели
    changeInput() - отслеживает изменение инпутов, рассчитывает значение и создает событие changeInput в модели