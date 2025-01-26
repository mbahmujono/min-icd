<template>
    <NuxtLayout name="default">
        <!-- Delete this and start building your app. Happy coding! -->
        <div class="h-dvh flex items-center justify-center">
            <div class="flex flex-col items-center justify-center gap-y-4 w-full mx-auto md:w-2/3">
                <div class="size-12">
                    <AppLogo />
                </div>
                <h1 class="font-extrabold text-5xl text-dark-900 font-family-instrument italic dark:text-dark-50">
                    ICD Code Extractor
                </h1>
                <p class="font-normal text-base text-left text-dark-900/60 dark:text-dark-50/60">
                    <strong>Case:</strong> <span class="font-bold italic">{{ name }}</span>
                    <br>
                    <br>
                    <div v-if="parsedData">
                        <h2><strong>Diagnoses:</strong></h2>
                        <ul>
                        <li v-for="(diagnosis, index) in parsedData.diagnoses" :key="index">
                            <strong>Diagnosis:</strong> {{ diagnosis.diagnosis }}<br />
                            <strong>Explanation:</strong> {{ diagnosis.explanation }}<br />
                            <strong>ICD-10 Code:</strong> {{ diagnosis.icd10_code }} - {{ diagnosis.icd10_name }}<br />
                            <strong>Alternative Codes:</strong>
                            <ul>
                            <li v-for="(alt, altIndex) in diagnosis.alternative_codes" :key="altIndex">
                                {{ alt.alternative_code }} - {{ alt.alternative_name }}: {{ alt.justification }}
                            </li>
                            </ul>
                        </li>
                        </ul>

                        <br><br>
                        <h2>Procedures:</h2>
                        <ul>
                        <li v-for="(procedure, index) in parsedData.procedures" :key="index">
                            <strong>Procedure:</strong> {{ procedure.procedure }}<br />
                            <strong>Explanation:</strong> {{ procedure.explanation }}<br />
                            <strong>ICD-9-CM Code:</strong> {{ procedure.icd9cm_code }} - {{ procedure.icd9cm_name }}<br />
                            <strong>Alternative Codes:</strong>
                            <ul>
                            <li v-for="(alt, altIndex) in procedure.alternative_codes" :key="altIndex">
                                {{ alt.alternative_code }} - {{ alt.alternative_name }}: {{ alt.justification }}
                            </li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <div v-else>
                        <p>Loading or no data available...</p>
                    </div>
                    <br>
                    v0.1 is an opinionated user friendly medical coding app created by
                    <br>
                    <ULink href="https://ecostudios.dev/" target="_blank" color="primary"
                        class="underline text-dark-950/80 dark:text-dark-50/80">
                        Diaz Adi Pradana, MD, FIAPS.
                    </ULink>
                </p>
                <div class="flex flex-col items-center gap-y-4 w-full">
                    <UButton @click="$router.back()" variant="solid" color="primary" icon="i-lucide-arrow-left">
                        Back
                    </UButton>
                </div>
            </div>
        </div>
        <!-- // -->

    </NuxtLayout>
    
</template>

<script lang="ts" setup>
/* Delete this and start building your app. Happy coding! */
import { useIndexStore } from '~/stores';
const { name } = storeToRefs(useIndexStore());
/* // */
const prompt = name.value;
console.log(prompt)
const { $trpcClient } = useNuxtApp();
const { hello } = $trpcClient;

const helloResp = await hello.useQuery({
      prompt: prompt,
    });

const parsedData = JSON.parse(helloResp.data.value.text);


useSeoMeta({
    title: "v0.1 | Alat Pencari Kode ICD",
    ogTitle: "Alat Pencarian Kode ICD Otomatis Dengan AI",
    description: "Mengubah Ringkasan Medis Menjadi Kode ICD dengan AI",
    ogDescription: "Mencari Kode ICD dari Ringkasan Medis",
    ogImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    ogUrl: 'https://www.kodeicd.com/',
    twitterImage: "/default-og-image.jpg",
    twitterCard: "summary_large_image",
    twitterTitle: "v0.1 | Pencarian Kode ICD",
    twitterDescription: "Alat Pencarian Kode ICD Otomatis untuk klaim BPJS",
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