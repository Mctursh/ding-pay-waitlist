<template>
    <div class="desktop:max-w-full desktop-above:max-w-[1440px] desktop-above:my-0 desktop-above:mx-auto h-[92vh] phone:h-auto">
        <header class="x-pad py-12 h-[17%]">
            <nav class="flex justify-between items-center">
                <div class="flex items-center gap-x-12 phablet:flex-col phablet: gap-y-6 phablet:items-start">
                    <img v-if="isTabPersonal" src="/ding-pay-dark-logo.svg" alt="light theme DingPay logo">
                    <img v-else src="/ding-pay-light-logo.svg" alt="light theme DingPay logo">
                    <div class="flex items-center gap-x-2">
                        <button @click="isTabPersonal = true"
                            class="text-white text-base font-medium px-6 py-4 rounded-[100px] laptop:py-2 android:px-3 android:py-1" type="button"
                            :class="{
                                'bg-primary': isTabPersonal
                            }"
                            >
                            Personal
                        </button>
                        <button @click="isTabPersonal = false"
                            class="text-base font-medium px-6 py-4 rounded-[100px] laptop:py-2" type="button" :class="{
                                'text-white bg-primary': !isTabPersonal,
                                'text-black': isTabPersonal
                            }"
                        >
                            Business
                        </button>
                    </div>
                </div>
                
            </nav>
        </header>
        <main :class="{'bg-secondary': !isTabPersonal}" class="x-pad h-[83%]">
            <section class="w-full h-full relative flex items-start" id="personal">
                <div class="flex w-[60%] desktop:w-[50%] flex-col gap-y-6 phablet:gap-y-12 mini:gap-y-6 mt-20 ipad:mt-32 phablet:mt-20 iphone:mt-10 phone:w-full phone:items-center">
                    <h1 v-show="isTabPersonal" class="text-6xl font-semibold text-black laptop:text-5xl phone:text-6xl android:text-5xl mini:text-4xl iphone:text-start phone:text-center phablet:leading-[48px]">All your cards in one place. Secure payments with just
                        a sound.</h1>
                    <h1 v-show="!isTabPersonal" class="text-6xl font-semibold text-white laptop:text-5xl phone:text-6xl android:text-5xl mini:text-4xl iphone:text-start phone:text-center phablet:leading-[48px]">Empower your business with every ding. Get paid in a heartbeat.</h1>
                    <h4 v-show="isTabPersonal" class="text-black font-normal text-xl laptop:text-lg phone:text-center phone:text-2xl android:text-xl mini:text-lg iphone:text-start">You never have to hold your physical ATM card. Store all
                        your cards securely in one place. Our state of the art technology allows you make instant and
                        secure payments with a simple sound.</h4>
                    <h4 v-show="!isTabPersonal" class="text-white font-normal text-xl laptop:text-lg phone:text-center phone:text-2xl android:text-xl mini:text-lg iphone:text-start">Accept payments effortlessly, enjoy instant withdrawals to your local bank, and manage your team with ease. You literally listen to the sound in inflow.</h4>
                    <form @submit.prevent="subscribe" class="phone:mb-10 flex items-center gap-x-3 w-3/4 phablet:flex-col phablet:gap-y-4 phablet:items-stretch iphone:w-full">
                        <input v-model="email" class="rounded-[100px] py-4 px-6 grow laptop:py-2 laptop:text-sm phone:text-lg android:text-base" type="email"
                            placeholder="Email Address"
                            :class="{
                                'bg-[#F9FAFB]': !isTabPersonal,
                                'bg-light-grey': isTabPersonal
                            }"
                            >
                        <button class="text-white text-base font-medium px-6 py-4 rounded-[100px] laptop:py-2 laptop:text-sm laptop:px-3 phone:text-lg android:text-base"
                            type="submit"
                            :class="{
                                'bg-[#249333]': successful,
                                'bg-primary': !successful,
                                'opacity-70 cursor-not-allowed': isLoading,
                            }">
                            {{`${successful ? 'Joined!' : 'Join Waitlist'}`}}
                        </button>
                    </form>
                </div>
                <div class="flex justify-center items-center h-full">
                    <img v-show="!isTabPersonal" class="h-full translate-x-[40%] laptop:translate-x-[30%] ipad:translate-x-[20%] tablet:translate-x-[10%] phone:hidden" src="/phone-light.png" alt="app demo light mode">
                    <img v-show="isTabPersonal" class="h-full translate-x-[40%] laptop:translate-x-[30%] ipad:translate-x-[20%] tablet:translate-x-[10%] phone:hidden" src="/phone-dark.png" alt="app demo dark mode">
                </div>
            </section>
        </main>
    </div>
    <footer class="bg-primary py-6 w-full h-[8vh] relative z-10"
        :class="{
            'bg-white': !isTabPersonal
        }"
        >
        <div class="desktop:max-w-full desktop-above:max-w-[1440px] desktop-above:my-0 desktop-above:mx-auto">
            <div class="x-pad flex justify-between">
                <p class="font-medium text-base iphone:text-sm mini:text-xs" :class="{'text-black': !isTabPersonal, 'text-white': isTabPersonal}">Copyright © DingPay 2024.</p>
                <div>
                    <NuxtLink target="_blank" to="mailto:usedingpay@gmail.com" class="text-black text-base font-medium iphone:text-sm mini:text-xs" :class="{'text-white': isTabPersonal}" >Contact us</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { store } from '~/stores/index';

const isTabPersonal = ref<boolean>(store.isTabPersonal)
const email = ref<string>('')
const successful = ref<boolean>(false)
const isLoading = ref<boolean>(false)


const subscribe = async () => {
    if (email.value.length === 0) {
        return
    }
    try {
        isLoading.value = true
        const { error } = await useFetch('/api/mail-chimp', {
            method: 'POST',
            body: {
                emailAddress: email.value,
                tags: isTabPersonal.value ? 'personal' : 'business',
            }
        })
        
        if (!error.value) {
            successful.value = true
            email.value = ""
        } else {
            createError('Failed to subscribed user')
            successful.value = false
        }
    } catch (error) {
        throw error
    } finally {
        isLoading.value = false
    }
}

watch(
    isTabPersonal,
    (newValue: boolean) => {
        store.setTab(newValue)
    }
)

</script>

<style scoped></style>