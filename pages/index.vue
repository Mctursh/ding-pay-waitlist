<template>
    <div class="desktop:max-w-full desktop-above:max-w-[1440px] desktop-above:my-0 desktop-above:mx-auto h-[92vh]">
        <header class="x-pad py-12 h-[17%]">
            <nav class="flex justify-between items-center">
                <div class="flex items-center gap-x-12" >
                    <img src="/ding-pay-dark-logo.svg" alt="light theme DingPay logo">
                    <div class="flex items-center gap-x-2">
                        <button class="text-white text-base font-medium px-6 py-4 rounded-[100px] bg-primary" type="button">
                            Personal
                        </button>
                        <button class="text-black text-base font-medium px-6 py-4 rounded-[100px]" type="button">
                            Business
                        </button>
                    </div>
                </div>
                <div>
                    <NuxtLink class="text-black text-base font-medium" to="#">Contact us</NuxtLink>
                </div>
            </nav>
        </header>
        <main class="x-pad h-[83%]" >
            <section class="w-full h-full relative flex items-start" id="personal">
                <div class="flex w-[60%] flex-col gap-y-6 mt-20">
                    <h1 class="text-6xl font-semibold text-black" >All your cards in one place. Secure payments with just a sound.</h1>
                    <h4 class="text-black font-normal text-xl" >You never have to hold your physical ATM card. Store all your cards securely in one place. Our state of the art technology allows you make instant and secure payments with a simple sound.</h4>
                    <form class="flex items-center gap-x-3 w-3/4">
                        <input class="bg-light-grey rounded-[100px] py-4 px-6 grow" type="email" placeholder="Email Address">
                        <button class="text-white text-base font-medium px-6 py-4 rounded-[100px] bg-primary" type="button">
                            Join Waitlist
                        </button>
                    </form>
                </div>
                <div class="absolute top-[-10%] right-[-25%] desktop-above:right-[-20%]">
                    <img class="w-[80%] desktop-above:w-[94.5%]" src="/phone.png" alt="app demo">
                </div>
            </section>
            <!-- <section id="business">
    
            </section> -->
        </main>
    </div>
    <footer class="bg-primary py-6 w-full h-[8vh] relative z-10">
        <div class="desktop:max-w-full desktop-above:max-w-[1440px] desktop-above:my-0 desktop-above:mx-auto" >
            <div class="x-pad">
                <p class="text-white font-medium text-base">Copyright © DingPay 2024.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>