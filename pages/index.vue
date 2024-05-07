<template>
    <div class="flex flex-col bg-black pb-8">
        <p class="flex justify-center text-center text-5xl text-slate-500">Welcome to</p>
        <p class="flex justify-center text-center text-6xl text-mexicanred-500">Doncigma</p>
        <p class="flex justify-center text-center text-5xl text-slate-400 font-semibold">Design.</p>
    </div>

    <!-- Middle element -->
    <div class="flex flex-col md:flex-row md:items-center ">
        <div class="bg-blue-500">
            <NuxtImg class="object-fill" src="/stock-red.jpg"/>
        </div>

        <div class="bg-blue-500 md:mx-44">
            <p class="bg-red-500 my-auto md:mx-44 text-3xl">
                Doncigma Design provides custom web design and development services 
                to help you create a website that is unique, modern, and
                most importantly, a representation of you. Put the best of you first, Doncigma Design.
            </p>
        </div>

        <div class="md:mb-96 md:ml-auto">
            <NuxtImg src="/red-laptop.jpg"/>
        </div>
    </div>
    
    
</template>