<template>
    <div>
        <!-- Portfolio carousel -->
        <div class="carousel mt-1 bg-gradient-to-t from-slate-900 to-mexicanred-500 h-22 md:h-144">
            <div id="item1" class="carousel-item w-full overflow-hidden">
                <NuxtImg src="portfolio/mock-creatures.png" class="w-full h-full object-cover" />
            </div>

            <div id="item2" class="carousel-item w-full overflow-hidden">
                <NuxtImg src="portfolio/mock-design.png" class="w-full h-full object-cover" />
            </div>

            <div id="item3" class="carousel-item w-full overflow-hidden">
                <NuxtImg src="portfolio/mock-graphic.png" class="w-full h-full object-cover" />
            </div>
        </div>

        <div class="flex justify-center w-full py-2 gap-2 border border-slate-500">
            <a href="#item1" class="btn btn-xs">1</a> 
            <a href="#item2" class="btn btn-xs">2</a> 
            <a href="#item3" class="btn btn-xs">3</a>
        </div>

        <!-- Middle section -->
        <div class="flex flex-col md:flex-row justify-between 
            bg-gradient-to-t from-slate-900 to-mexicanred-500"
        >
            <!-- Projects description -->
            <div class="bg-black m-2 p-3 text-left md:w-2/5">
                <p class="bg-black text-sm md:text-lg text-slate-400 text-justify p-4 
                    border-2 border-slate-800"
                >
                Hello, I'm Elijah Johnson, a passionate and creative web developer. 
                I specialize in crafting modern and unique websites that represent 
                my clients' personalities and businesses. With a strong background in 
                custom web design and development, I strive to bring your vision to life 
                and create an online presence that stands out.
            
                <br><br>
            
                Let's work together to showcase the best of your brand and 
                bring your ideas to the digital world. Reach out to me 
                to discuss your project and how we can collaborate to achieve 
                your goals.
            
                <br><br>
            
                Elijah Johnson.
                </p>
            </div>
            
            <!-- Logo -->
            <div class="p-4 md:w-1/5">
                <NuxtImg src="/doncigma-logo.jpg" class=""/>
            </div>
            
            <!-- About Me -->
            <div class="bg-black m-2 p-3 text-left md:w-2/5">
                <p class="bg-black text-sm md:text-lg text-slate-400 text-justify p-4 
                    border-2 border-slate-800"
                >
                Hello, I'm Elijah Johnson, a passionate and creative web developer. 
                I specialize in crafting modern and unique websites that represent 
                my clients' personalities and businesses. With a strong background in 
                custom web design and development, I strive to bring your vision to life 
                and create an online presence that stands out.
            
                <br><br>
            
                Let's work together to showcase the best of your brand and 
                bring your ideas to the digital world. 
                <NuxtLink to="/contact" class="underline" target="_blank">Reach out to me</NuxtLink>
                to discuss your project and how we can collaborate to achieve 
                your goals.
            
                <br><br>
            
                Elijah Johnson.
                </p>
            </div>
        </div>
    </div>
</template>

<!-- <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script> -->

<!-- 
    <Carousel>
            <template #item="img">
                <div class="flex flex-row">
                    <div>
                        <img :src="img.data" alt="Carousel Image">
                    </div>
                </div>
            </template>
        </Carousel>

    <script>
    import Carousel from 'primevue/carousel';

    export default {
        data() {
            return {
                carouselImages: [
                    "home/home-left.jpg",
                    "home/home-right.jpg",
                    "home/home-left.jpg"
                ]
            };
        }
    };
</script>
 -->