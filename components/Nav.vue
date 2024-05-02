<template>
  <header class="bg-slate-50 dark:bg-black">
    
    <!-- Whole Nav bar element
    items-center px-8 pb-4 pt-6 md:flex-row  md:space-x-12 md:px-12 -->
    <div
      class="container mx-auto flex flex-row items-center px-8 pb-4 pt-4 ">
      
      <!-- Logo words -->
      <div class="flex text-center md:w-2/5">
        <div class="text-sm md:text-lg font-extrabold md:w-fit md:text-left">
          <span class="text-mexicanred-500 active:text-mexicanred-300 
            md:hover:text-mexicanred-300">Doncigma</span>
          <span class="dark:text-slate-400">Design</span>
        </div>
      </div>
      
      <!-- About me link -->
      <div class="flex text-center text-slate-400 md:w-1/5 md:text-left">
        <nuxt-link class="text-md font-semibold" to="/about">About Me</nuxt-link>
      </div>
      
      <!-- Portfolio link -->
      <div class="text-center text-slate-400 md:w-1/5 md:text-left">
        <nuxt-link class="text-md font-semibold" to="/portfolio">Portfolio</nuxt-link>
      </div>
      
      <!-- Resume link -->
      <div class="text-center text-slate-400 md:w-1/5 md:text-left">
        <nuxt-link class="text-md font-semibold" to="/resume">Resume</nuxt-link>
      </div>
    </div>
    
    <div
      class="container mx-auto border-t border-slate-200 p-3 text-center text-sm text-slate-600 dark:border-slate-900 md:flex-row md:px-12"
    >
    </div>
  </header>
</template>
