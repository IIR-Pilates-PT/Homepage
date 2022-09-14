<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <div>
    <b-navbar toggleable="lg" type="dark" variant="light">
      <b-navbar-brand href="/">IIR</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="아이르"
          toggle-class="nav-link-custom"
          center>
            <b-dropdown-item><RouterLink to="/about">아이르 소개</RouterLink></b-dropdown-item>
            <b-dropdown-item><RouterLink to="/beforAfter">비포애프터</RouterLink></b-dropdown-item>
            <b-dropdown-item><RouterLink to="/review">고객후기</RouterLink></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item><RouterLink to="/program">프로그램</RouterLink></b-nav-item>
          <b-nav-item-dropdown
          id="my-nav-dropdown"
          text="지점안내"
          toggle-class="nav-link-custom"
          center>
            <b-dropdown-item><RouterLink to="/branch/snu">서울대입구점</RouterLink></b-dropdown-item>
            <b-dropdown-item><RouterLink to="/branch/mia">미아점</RouterLink></b-dropdown-item>
            <b-dropdown-item><RouterLink to="/branch/suyu">수유점</RouterLink></b-dropdown-item>
            <b-dropdown-item><RouterLink to="/branch/nowon">노원점</RouterLink></b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item><RouterLink to="/notice">공지사항</RouterLink></b-nav-item>
          <b-nav-item><RouterLink to="/event">이벤트</RouterLink></b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" right>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Reservation</b-button>
        </b-navbar-nav>
      </b-collapse>      
    </b-navbar>
  </div>
  
  <RouterView />
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
