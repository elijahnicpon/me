<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TabBar from './components/TabBar.vue'
import BottomBar from './components/BottomBar.vue'
</script>

<template>
  <div class="font-mono text-vscode-dark-text bg-vscode-dark-background border-vscode-dark-border w-screen h-screen flex flex-col overflow-hidden">
    <TabBar class="w-full h-16 fixed top-0 left-0 z-50   " />
    <router-view class="w-full pt-16 pb-12 flex-grow overflow-auto" />
    <BottomBar class="w-full h-12 fixed bottom-0 left-0 z-50 md:block" />
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
