<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <!-- $emit('click') - передаём событие клик наверх (название может быть любое) -->
        <!-- наверху, в теге Navbar слушаем это сыбытие 'click' -->
        <!-- для имён событий исползовать только kebab-case -->
        <a href="#" @click.prevent="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <!-- в итнерполяции после вывода даты ставим вертикальную черту и указывает название фильтра -->
        <span class="black-text">{{date | dateVueFilter('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <!-- добавляем атрибут ref="dropdown" чтобы в скрипте найти этот элемент  -->
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <!-- для преобразования ссылки заменяем a на router-link и href="" на to="/profile"-->
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <!-- для выхода из профиля вешаем обработчик logout -->
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    // создаём текущую дату
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  // mounted() - хук, который отрабатывает после готовности DOM-дерева
  mounted() {
    // для обновления времени на странице
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    // M - объект matherialize
    // для нахождения элемента на странице добавляем атрибут ref="dropdown"
    // таким образом элемент добавляется в объект this.$refs
    this.dropdown = window.M.Dropdown.init(this.$refs.dropdown, {
      // для того, чтобы ширина дропдауна равнялась родительскому элементу ставим constrainWidth: true
      constrainWidth: false
    })
  },
  methods: {
    logout() {
      console.log('Logout')
      // делаем редирект и передаём сообщение, чтобы сообщить пользователю что произошло
      this.$router.push('/login?message=logout')
    }
  },
  beforeDestroy() {
  // для предотвращения утечек памяти сбраываем интервал
    clearInterval(this.interval)
    // чтобы не было ошибок при быстром открытии и закрытии лейаута
    // проверяем существует ли такая переменная и такой метод
    if(this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
  
}
</script>
