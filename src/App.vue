<template>
  <div id="app">
    <!-- component в дальнейшем будет заменяться на нужный layout -->
    <component :is="layout">
      <!-- в router-view рендерим все страницы через router -->
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
  computed: {
    layout() {
      // получаем значение meta изобъекта страницы массива routes
      // '-layout' - для того, чтобы VUE понял, какой компонент нужен
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style lang="scss">
// для перехода в node_modules используем тильду ~
  @import '~materialize-css/dist/css/materialize.min.css';
  @import 'assets/index.css';
</style>
