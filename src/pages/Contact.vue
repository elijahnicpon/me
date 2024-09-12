<template>
  <div class="flex flex-row items-center transition-all lg:pl-20 md:pl-8 sm:pl-4">
    <div class="css-blurry-gradient-pink"></div>
    <div class="css-blurry-gradient-purple"></div>
    <div class="css-blurry-gradient-blue"></div>

    <div class="flex flex-col items-start space-y-2">

      <!-- Email -->
      <a :href="'mailto:elijah@nicpon.com'" class="block group hover:animate-pulse whitespace-nowrap">
        <div class="flex flex-wrap">
          <p class="code">
            <span class="text-vscode-dark-function-name">const </span>
            <span class="text-vscode-dark-purple">email </span>
            <span class="text-vscode-dark-text">=</span>
            <span class="text-vscode-dark-green group-hover:underline underline-offset-4">
              "elijah@nicpon.com"
            </span>
          </p>
        </div>
      </a>

      <!-- Phone -->
      <a :href="'tel:6788766531'" class="block group hover:animate-pulse whitespace-nowrap">
        <div class="flex flex-wrap">
          <p class="code">
            <span class="text-vscode-dark-function-name">const </span>
            <span class="text-vscode-dark-purple">phone </span>
            <span class="text-vscode-dark-text">=</span>
            <span class="text-vscode-dark-keyword group-hover:underline underline-offset-4">
              (678) 876-6531
            </span>
          </p>
        </div>
      </a>

      <!-- GitHub -->
      <a :href="'https://github.com/elijahnicpon'" target="_blank" class="block group hover:animate-pulse whitespace-nowrap">
        <div class="flex flex-wrap">
          <p class="code">
            <span class="text-vscode-dark-function-name">const </span>
            <span class="text-vscode-dark-purple">githubLink </span>
            <span class="text-vscode-dark-text">=</span>
            <span class="text-vscode-dark-green group-hover:underline underline-offset-4">
              "https://github.com/elijahnicpon"
            </span>
          </p>
        </div>
      </a>

      <!-- LinkedIn -->
      <a :href="'https://linkedin.com/in/elijah-nicpon'" target="_blank" class="block group hover:animate-pulse whitespace-nowrap">
        <div class="flex flex-wrap">
          <p class="code">
            <span class="text-vscode-dark-function-name">const </span>
            <span class="text-vscode-dark-purple">linkedinLink </span>
            <span class="text-vscode-dark-text">=</span>
            <span class="text-vscode-dark-green group-hover:underline underline-offset-4">
              "https://linkedin.com/in/elijahnicpon"
            </span>
          </p>
        </div>
      </a>

    </div>
  </div>
</template>


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


#info {
  font-size: 14px;
}

/* Typewrite Animation */

.line-1 {
  width: fit-content;
  border-right: 3px solid rgba(255, 255, 255, .75);
  white-space: nowrap;
  overflow: hidden;
  padding-right: 2px;
}

.anim-typewriter {
  animation: typewriter 3.5s steps(40) 1s 1 normal both,
    blinkTextCursor 800ms steps(40) infinite normal;
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



</style>
  
<script>
export default {
  name: 'Contact'
}
</script>