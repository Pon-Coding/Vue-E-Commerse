<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <nav class="nav-bar">
    <div class="nav-logo">
      <img src="@/assets/ropon_white.svg" alt="" />
    </div>
    <div class="nav-container">
      <router-link to="/" class="nav-home">
        <i class="fa-solid fa-house"></i>Home</router-link
      >
      <router-link to="/course" class="nav-course">
        <i class="fa-solid fa-graduation-cap"></i>Course</router-link
      >
      <router-link to="/cart" class="nav-about">
        <i class="fa-solid fa-cart-shopping"></i>My Cart
        <span class="badge-number">10</span>
      </router-link>
    </div>
    <div class="theme-mode">
      <label class="ui-switch">
        <input type="checkbox" />
        <div class="slider">
          <div class="circle"></div>
        </div>
      </label>
    </div>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.fa-cart-shopping {
  position: relative;
}
.badge-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: rgb(255, 0, 0);

  color: white;
  font-weight: bold;
  font-size: 12px;
  position: absolute;
  top: 0;
  right: 480px;
}
.nav-bar {
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #2f2626;
  height: 60px;
}
.nav-container {
  width: 60%;
  height: 100%;
  float: left;
  /* background-color: dodgerblue; */

  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-home,
.nav-course,
.nav-about {
  transition: 0.3s;
  /* background-color: red; */
  padding: 5px 20px;
  margin: 0 5%;
  border-radius: 10px;
}
.fa-solid {
  font-size: 25px;
  display: block;
  /* display: block; */
  /* margin: 0 1%; */
}
/* Hover */
.nav-home:hover,
.nav-course:hover,
.nav-about:hover {
  transition: 0.3s;
  border-radius: 10px;
  background-color: #070f2b;
}
.theme-mode {
  float: left;
  /* background-color: green; */
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  text-decoration: none;
  color: white;
}
.nav-logo {
  float: left;
  width: 20%;
  height: 100%;
  /* background-color: blueviolet; */
}
img {
  height: 100%;
}

/* Dark Mode */
/* switch settings 👇 */

.ui-switch {
  /* switch */
  --switch-bg: rgb(135, 150, 165);
  --switch-width: 48px;
  --switch-height: 20px;
  /* circle */
  --circle-diameter: 32px;
  --circle-bg: rgb(0, 56, 146);
  --circle-inset: calc((var(--circle-diameter) - var(--switch-height)) / 2);
}

.ui-switch input {
  display: none;
}

.slider {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: var(--switch-width);
  height: var(--switch-height);
  background: var(--switch-bg);
  border-radius: 999px;
  position: relative;
  cursor: pointer;
}

.slider .circle {
  top: calc(var(--circle-inset) * -1);
  left: 0;
  width: var(--circle-diameter);
  height: var(--circle-diameter);
  position: absolute;
  background: var(--circle-bg);
  border-radius: inherit;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTkuMzA1IDEuNjY3VjMuNzVoMS4zODlWMS42NjdoLTEuMzl6bS00LjcwNyAxLjk1bC0uOTgyLjk4Mkw1LjA5IDYuMDcybC45ODItLjk4Mi0xLjQ3My0xLjQ3M3ptMTAuODAyIDBMMTMuOTI3IDUuMDlsLjk4Mi45ODIgMS40NzMtMS40NzMtLjk4Mi0uOTgyek0xMCA1LjEzOWE0Ljg3MiA0Ljg3MiAwIDAwLTQuODYyIDQuODZBNC44NzIgNC44NzIgMCAwMDEwIDE0Ljg2MiA0Ljg3MiA0Ljg3MiAwIDAwMTQuODYgMTAgNC44NzIgNC44NzIgMCAwMDEwIDUuMTM5em0wIDEuMzg5QTMuNDYyIDMuNDYyIDAgMDExMy40NzEgMTBhMy40NjIgMy40NjIgMCAwMS0zLjQ3MyAzLjQ3MkEzLjQ2MiAzLjQ2MiAwIDAxNi41MjcgMTAgMy40NjIgMy40NjIgMCAwMTEwIDYuNTI4ek0xLjY2NSA5LjMwNXYxLjM5aDIuMDgzdi0xLjM5SDEuNjY2em0xNC41ODMgMHYxLjM5aDIuMDg0di0xLjM5aC0yLjA4NHpNNS4wOSAxMy45MjhMMy42MTYgMTUuNGwuOTgyLjk4MiAxLjQ3My0xLjQ3My0uOTgyLS45ODJ6bTkuODIgMGwtLjk4Mi45ODIgMS40NzMgMS40NzMuOTgyLS45ODItMS40NzMtMS40NzN6TTkuMzA1IDE2LjI1djIuMDgzaDEuMzg5VjE2LjI1aC0xLjM5eiIgLz4KPC9zdmc+");
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  -o-transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}

.slider .circle::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  border-radius: inherit;
  -webkit-transition: all 500ms;
  -o-transition: all 500ms;
  transition: all 500ms;
  opacity: 0;
}

/* actions */

.ui-switch input:checked + .slider .circle {
  left: calc(100% - var(--circle-diameter));
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjAiIHdpZHRoPSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNmZmYiCiAgICAgICAgZD0iTTQuMiAyLjVsLS43IDEuOC0xLjguNyAxLjguNy43IDEuOC42LTEuOEw2LjcgNWwtMS45LS43LS42LTEuOHptMTUgOC4zYTYuNyA2LjcgMCAxMS02LjYtNi42IDUuOCA1LjggMCAwMDYuNiA2LjZ6IiAvPgo8L3N2Zz4=");
}

.ui-switch input:active + .slider .circle::before {
  -webkit-transition: 0s;
  -o-transition: 0s;
  transition: 0s;
  opacity: 1;
  width: 0;
  height: 0;
}
/* Dark Mode */
</style>