<template>
  <header class="bg-slate-50 dark:bg-black">
    <div
      class="container mx-auto flex flex-col items-start space-y-12 px-8 pb-8 pt-12 md:flex-row md:space-y-0 md:space-x-12 md:px-12"
    >
      <div
        class="flex w-full flex-col space-y-4 text-center md:w-2/5 md:text-left"
      >
        <div class="w-full text-lg font-extrabold md:w-fit md:text-left">
          <span class="text-mexicanred-500">Doncigma</span>
          <span class="dark:text-slate-400">Design</span>
        </div>
      </div>
      
      <div class="w-full text-center text-slate-400 md:w-1/5 md:text-left">
        <nuxt-link class="text-md font-semibold" to="/about">About Me</nuxt-link>
      </div>
      
      <div class="w-full text-center text-slate-400 md:w-1/5 md:text-left">
        <nuxt-link class="text-md font-semibold" to="/portfolio">Portfolio</nuxt-link>
      </div>
      
      <div class="text-center text-slate-400 md:w-1/5 md:text-left">
        <nuxt-link class="text-md font-semibold" to="/resume">Resume</nuxt-link>
      </div>
    </div>
    
    <div
      class="container mx-auto border-t border-slate-200 p-2 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12"
    >
    </div>
  </header>
</template>
