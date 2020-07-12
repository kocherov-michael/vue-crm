<template>
  <!-- добавляем класс 'open', если значение value в массиве props будет истиной -->
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <!-- чтобы компонент отображался как тег li, задаём tag="li" -->
    <!-- если страница совпадает с ссылкой, добавляется класс, стоящий в значении аттрибута active class -->
    <!-- to указывает на какую-то страницу -->
    <!-- exact - для того, чтобы не путать активные ссылки - смотрит совпадение -->
    <!-- не по части ссылки, а по ссылке целиком -->
    <!-- :exat="link.exact" - забиндили добавление аттрибута exact, если link.exact == true -->
    <!-- key - некоторое уникальное значение  -->
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  // если в MainLayput для сайдбара передаём модель v-model
  // то здесь принимаем параметр props со значением value, 
  // которое будет соответствовать тому состоянию, которое передаём
  // нужно для добавления класса open сайдбару
  props: ['value'],
  // в значение data возвращаем объект.
  // заключаем в круглые скобки, иначе будет считаться телом функции
  data: () => ({
    // в массиве Links каждый объект описывает параметры ссылки
    links: [
      { title: 'Счет', url: '/', exact: true},
      { title: 'История', url: '/history'},
      { title: 'Планирование', url: '/planning'},
      { title: 'Новая запись', url: '/record'},
      { title: 'Категории', url: '/categories'},
    ]
  })
}
</script>
