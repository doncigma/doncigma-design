<template>
    <div class="flex flex-col bg-black pb-8">
        <p class="flex justify-center text-center text-5xl text-slate-500">Welcome to</p>
        <p class="flex justify-center text-center text-6xl text-mexicanred-500">Doncigma</p>
        <p class="flex justify-center text-center text-5xl text-slate-400 font-semibold">Design.</p>
    </div>

    <!-- Whole middle -->
    <div class="flex flex-col md:flex-row md:items-center justify-center
        bg-gradient-to-l from-slate-900 to-mexicanred-500"
    >
        <!-- Left image -->
        <div class="border-4">
            <NuxtImg src="/home/home-left.jpg"/>
        </div>

        <!-- Company desc -->
        <div class="m-2 bg-black text-left p-3">
            <p class="bg-black text-xl text-slate-400 text-justify 
                p-4 border-2 border-slate-800"
            >
                <span class="text-mexicanred-500">Doncigma</span>
                <span class="text-slate-300">Design</span> 
                provides 
                <span class="text-slate-200 font-semibold">custom web design </span>
                and 
                <span class="text-slate-200 font-semibold">development services</span> 
                to help you create a website that is 
                <span class="text-slate-200 font-semibold">unique</span>, 
                <span class="text-slate-200 font-semibold">modern</span>, 
                and most importantly, a 
                <span class="text-slate-200 font-semibold">representation of you</span>. 
                
                <br><br>
                Put the best part of you forward,
                <span class="text-mexicanred-500">Doncigma</span>
                <span class="text-slate-300">Design</span>.
            </p>
        </div>

        <!-- Right image -->
        <div class="border-4 m-4">
            <NuxtImg src="/home/home-right.jpg"/>
        </div>
    </div>
    
    
</template>