<template>
  <div class="flex flex-row items-center justify-between p-20 relative">
    <div class="css-blurry-gradient-pink z-10"></div>
    <div class="css-blurry-gradient-purple z-10"></div>
    <div class="css-blurry-gradient-blue z-10"></div>

    <div class="flex flex-col items-start">
      <span>Hiya! I'm</span>
      <h1>Elijah Nicpon</h1>
      <span class="diple flex">
        >&nbsp;
        <h2 class="line-1 anim-typewriter max-w-fit"> Software Engineer </h2>
      </span>
      <span>// welcome to my personal website</span>
      <span>// you should checkout the /files page ;)</span>
    </div>

    <!-- Profile Picture (only on non-mobile screens) -->
     <div class="flex relative z-20">
       <img
       v-if="!isMobile"
       src="../assets/me-pic.jpg"
       alt="Elijah Nicpon"
       class="z-20 w-80 h-110 rounded-full ml-10 transition-all duration-300 filter blur-sm hover:blur-none"
       />
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      isMobile: false,
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
};
</script>

<style scoped>
/* gradients! */
@keyframes float-rotate-pulse {
  0% {
    transform: translateY(0) scale(1) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) scale(1.1) rotate(10deg);
  }
  100% {
    transform: translateY(0) scale(1) rotate(0deg);
  }
}

.css-blurry-gradient-purple {
  position: fixed;
  bottom: 30%;
  right: 5%;
  width: 300px;
  height: 300px;
  border-radius: 0% 0% 50% 50%;
  rotate: 10deg;
  filter: blur(70px);
  background: radial-gradient(circle at 50% 50%, rgb(153, 93, 212), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
  animation: float-rotate-pulse 8s ease-in-out infinite;
}

.css-blurry-gradient-pink {
  position: absolute;
  top: 15%;
  right: 30%;
  width: 300px;
  height: 300px;
  border-radius: 0% 50% 0% 50%;
  filter: blur(70px);
  background: radial-gradient(circle at 50% 50%, rgb(210, 72, 199), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
  animation: float-rotate-pulse 10s ease-in-out infinite;
}

.css-blurry-gradient-blue {
  position: absolute;
  top: 60%;
  right: 25%;
  width: 300px;
  height: 300px;
  border-radius: 0% 50% 0% 50%;
  filter: blur(70px);
  background: radial-gradient(circle at 50% 50%, rgb(72, 183, 210), rgba(76, 0, 255, 0));
  opacity: 0.5;
  z-index: 10;
  animation: float-rotate-pulse 6s ease-in-out infinite;
}

.css-blurry-gradient-purple,
.css-blurry-gradient-pink,
.css-blurry-gradient-blue {
  pointer-events: none; /* Add this line */
}

.line-1 {
  width: fit-content;
  border-right: 3px solid rgba(255, 255, 255, .75);
  white-space: nowrap;
  overflow: hidden;
  padding-right: 2px;
}

.anim-typewriter {
  animation: typewriter 3.5s steps(40) 1s 1 normal both, blinkTextCursor 800ms steps(40) infinite normal;
}

@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, .75);
  }
  to {
    border-right-color: transparent;
  }
}

.code {
  color: #e5e9f0;
}

.code .identifier {
  color: #4d5bce;
}

.code .variable-name {
  color: #43d9ad;
}

.code .operator {
  color: white;
}

.code .string {
  color: #e99287;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}
</style>
