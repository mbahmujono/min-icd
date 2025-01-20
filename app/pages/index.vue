<template>
    <NuxtLayout name="default">
        <!-- Delete this and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-2/3">
                <div class="size-12">
                    <AppLogo />
                </div>
                <h1 class="font-extrabold text-5xl text-dark-900 font-family-instrument italic dark:text-dark-50">v0.1
                </h1>
                <p class="font-normal text-base text-center text-dark-900/60 dark:text-dark-50/60">
                    AI ICD Code Finder
                    <br>
                    Write your medical summary below and get your ICD code
                </p>
                <div class="w-full flex items-center justify-center gap-2">
                    <AppSwitchMode />
                    <AppSwitchPrimaryColor />
                </div>
                <div class="flex flex-col items-center gap-y-6 w-full px-5">
                    <UTextarea :rows="10" v-model="name" label="Name" placeholder="13 yo boy diagnosed with appendicitis had underwent laparoscopic surgery. During stay he had transfused with packed red blood cell and electrolytes. We give prophylactic antibiotic too.." color="primary" variant="outline" size="xl" class="w-full"/>
                    <UButton @click="openToast" variant="solid" color="primary">
                        Give me the ICD Code
                    </UButton>
                </div>
            </div>
        </div>
        <!-- // -->
    </NuxtLayout>
</template>

<script setup>
/* Delete this and start building your app. Happy coding! */
import { useIndexStore } from '~/stores';

const { name } = storeToRefs(useIndexStore());
const toast = useToast();

function openToast() {
    toast.add({
        title: 'Hey!',
        description: 'Hello! You just clicked the button!',
        color: 'success'
    })
    navigateTo('/about')
}
/* // */

useSeoMeta({
    title: "v4.20 | Your Project Title",
    ogTitle: "v4.20 | Your Project Title",
    description: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogDescription: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    ogUrl: 'https://www.yourproject.com/',
    twitterImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "v4.20 | Your Project Title",
    twitterDescription: "Opinionated Starter Template Minimal, Fast, and Developer-Friendly",
    ogImageWidth: 1200,
    ogImageHeight: 630,
});

useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/svg+xml',
            href: '/favicon.svg'
        }
    ]
})
</script>