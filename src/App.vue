<template>
  <header>󰖟 Online Code Editor 󰖟 </header>
  <div class="side-bar">
    this is the side bar<br>
    <ul class="directory">
      <h4 class="directory-lable">󰁃  pmo</h4>
      <li class="file">󰘍  main.ts</li>
      <li class="file">󰘍  index.html</li>
      <li class="file">󰘍  app.css</li>
      <li class="file">󰘍  main.c</li>
    </ul>
  </div>
  <div class="main-content">this is the main content div</div>
  <footer> this is the footer</footer>
</template>

<script setup>
</script>

<style>
/* Layout styles */

@font-face {
  font-family: 'JetBrainsNF'; /* Name of the font */
  src: url('./assets/ttf/JetBrainsMonoNerdFont-Medium.ttf') format('truetype'); /* Path to the font file */
}

* {
  font-family: 'JetBrainsNF'
}

.filename {
  border: none;
  background-color: transparent;
  color: white;
}

ul {
  list-style-type: none; /* Removes the bullets */
  padding: 0;            /* Optional: Removes default padding */
  margin: 0;             /* Optional: Removes default margin */ 
}

li {
  margin-left: 15px;
  transition-duration: 200ms;
}

li:hover {
  padding: 5px;
  cursor: pointer;
}

:root {
  --side-bar-width: 200px;
  --side-bar-padding: 10px;
  --side-bar-margin: 0px;

  --header-bar-height: 50px;
  --header-bar-padding: 10px;
  --header-bar-margin: 0px;

  --footer-bar-height: 50px;
  --footer-bar-padding: 10px;
  --footer-bar-margin: 0px;
  
  --window-height-without-header-and-footer: calc( 100vh - ( var(--footer-bar-height) + var(--header-bar-height) ) );
  --window-width-without-side-bar: calc(100vw - var(--side-bar-width));
}

header {
  text-align: center;
  top: 0;
  width: 100vw;
  left: 0;
  padding: var(--header-bar-padding);
  margin: var(--header-bar-margin);
  height: var(--header-bar-height);
  position: fixed;
}

.side-bar {
  left: 0;
  top: 0;
  width: var(--side-bar-width);
  padding: var(--side-bar-padding);
  margin: var(--side-bar-margin);
  height: var(--window-height-without-header-and-footer);
  margin-top: var(--header-bar-height);
  position: fixed;
}

.main-content {
  text-align: center;
  width: var(--window-width-without-side-bar);
  height: var(--window-height-without-header-and-footer);
  margin:0;
  margin-top: var(--header-bar-height);
  margin-bottom: var(--footer-bar-height);
  margin-left: var(--side-bar-width);
  position: fixed;
  left: 0;
  top: 0;
  margin-bottom: var(--footer-bar-height);
}

footer {
  text-align: center;
  left: 0;
  bottom: 0;
  position: fixed;
  width: 100vw;
  padding: var(--footer-bar-padding);
  margin: var(--footer-bar-margin);
  height: var(--footer-bar-height);
}
</style>