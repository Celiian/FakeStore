<template>
  <div>
    <div class="l-navbar" id="navbar">
      <nav class="nav">
        <div>
          <div class="nav__brand">
           
            <p href="" class="nav__toggle">Category</p>
          </div>
          <div class="nav__list">
            <a href="" class="nav__link">
              <img src="" id="imageside" />
              <span class="nav__name">Electronics</span>
            </a>
          </div>
          <div class="nav__list">
            <a href="" class="nav__link">
              <img src="" id="imageside" />
              <span class="nav__name">Bijoux</span>
            </a>
          </div>
          <div class="nav__list">
            <a href="" class="nav__link">
              <img src="" id="imageside" />
              <span class="nav__name">Télévision</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
  },
  data() {
    return {
      toggleId:String,
      navbarId:String,
      bodyId:String,
      toggle:{},
      navBar: {},
      bodypadding: {},
    }
  },

  created: function () {
    this.toggleId = "nav-toggle",
    this.navbarId =  "navbar",
    this.bodyId = "body-content",
    this.toggle = document.getElementById(this.toggleId),
      this.navbar = document.getElementById(this.navbarId),
      this.bodypadding = document.getElementById(this.bodyId);
    if (this.toggle && this.navbar) {
      this.toggle.addEventListener("click", () => {
        this.navbar.classList.toggle("expander");

        this.bodypadding.classList.toggle("body-content");
      });
    }
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

:root {
  --nav-width: 93px;
  --first-color: rgb(44, 212, 204);
  --background-color: rgb(44, 212, 204);
  --white-color: white;
  --body-font: "Poppins", sans-serif;
  --normal-font-size: 1rem;
  --small-font-size: 0.975rem;
  --z-fixed: 100;
}

*,
::before,
::after {
  box-sizing: border-box;
}
.l-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: 100vh;
  background-color: rgb(44, 212, 204);
  color: var(--white-color);
  padding: 1.5rem 1.5rem 2rem;
  transition: 0.5s;
  z-index: var(--z-fixed);
}

.nav {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.nav__brand {
  display: grid;
  grid-template-columns: max-content max-content;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.nav__toggle {
  font-size: 30px;
  padding: 0.75rem;
  cursor: pointer;
}

.nav__logo {
  color: var(--white-color);
  font-weight: 600;
}

.nav__link {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 0.75rem;
  padding: 0.75rem;
  color: var(--white-color);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  transition: 0.3s;
  cursor: pointer;
}

.expander {
  width: calc(var(--nav-width) +19.25rem);
}

img {
  width: 40px;
}
</style>