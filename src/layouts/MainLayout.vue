<template>
  <div class="app-main-layout">
    
    <Navbar @click="isOpen = !isOpen" />
    
    <Sidebar v-model="isOpen" />

    <!-- добавляем класс full, если сайдбар закрыт и isOpen == false -->
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <!-- для преобразования ссылки заменяем a на router-link и href="" на to="/record"-->
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'

export default {
  name: 'main-layout',
  // в поле data храним состояние сайдбара
  data: () => ({
    isOpen: true
  }),
  components: {
    Navbar, Sidebar
  }
}
</script>
