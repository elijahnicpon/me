<template>
  <div class="flex justify-between items-center border border-vscode-dark-border">
    <!-- Tab bar for large screens -->
    <div class="hidden md:flex justify-start">
      <router-link 
        to="/" 
        class="p-4 w-80 border-r border-vscode-dark-border hover:bg-vscode-dark-hover"
        @click="setActivePage('Elijah Nicpon')"
      >
        _elijah_nicpon
      </router-link>
      <router-link 
        to="/" 
        class="p-4 pr-8 pl-8 border-r border-vscode-dark-border hover:bg-vscode-dark-hover"
        :class="{ 'text-white border-b-2 border-b-vscode-dark-purple bg-vscode-dark-hover': isActivePage('Elijah Nicpon') }"
        @click="setActivePage('Elijah Nicpon')"
      >
        _about
      </router-link>
      <router-link 
        to="/Files" 
        class="p-4 pr-8 pl-8 border-r border-vscode-dark-border hover:bg-vscode-dark-hover"
        :class="{ 'text-white border-b-2 border-b-vscode-dark-purple bg-vscode-dark-hover': isActivePage('Files') }"
        @click="setActivePage('Files')"
      >
        _files
      </router-link>
    </div>
    <div class="hidden md:flex justify-end">
      <router-link 
        to="/Contact" 
        class="p-4 pr-8 pl-8 border-l border-vscode-dark-border hover:bg-vscode-dark-hover"
        :class="{ 'text-white border-b-2 border-b-vscode-dark-purple bg-vscode-dark-hover': isActivePage('Contact') }"
        @click="setActivePage('Contact')"
      >
        _contact
      </router-link>
    </div>

    <!-- Dropdown for mobile screens -->
    <div class="block md:hidden w-full relative">
      <button @click="toggleDropdown" class="p-4 w-full text-left border-b flex justify-between items-center bg-vscode-dark-background">
        <span>{{ activePage }}</span>
        <span v-if="dropdownOpen" class="text-xl">&times;</span>
        <span v-else class="text-xl">&#x25BC;</span> <!-- Down chevron -->
      </button>
      <div v-if="dropdownOpen" class="absolute top-0 left-0 w-full bg-vscode-dark-background border-b shadow-lg">
        <router-link 
          to="/" 
          class="block px-4 py-4 hover:bg-gray-200 border-b"
          :class="{ 'text-white': isActivePage('Elijah Nicpon') }"
          @click="setActivePage('Elijah Nicpon')"
        >
          _home
        </router-link>
        <router-link 
          to="/Files" 
          class="block px-4 py-4 hover:bg-gray-200 border-b"
          :class="{ 'text-white': isActivePage('Files') }"
          @click="setActivePage('Files')"
        >
          _files
        </router-link>
        <router-link 
          to="/Contact" 
          class="block px-4 py-4 hover:bg-gray-200"
          :class="{ 'text-white': isActivePage('Contact') }"
          @click="setActivePage('Contact')"
        >
          _contact
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data() {
    return {
      dropdownOpen: false,
      activePage: 'Elijah Nicpon', // Default active page
    };
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    setActivePage(pageName) {
      this.activePage = pageName;
      this.dropdownOpen = false; // Automatically close the dropdown
    },
    isActivePage(pageName) {
      return this.activePage === pageName;
    }
  },
};
</script>

<style scoped>
.text-white {
  color: white;
}
</style>
