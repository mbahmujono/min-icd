<template>
  <NuxtLayout>
    <div>
      <p>tRPC Test</p>
      {{ helloResp.data }}
      <div v-if="parsedData">
        <h2>Diagnoses:</h2>
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
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';

// Define the expected response type
interface GreetingResponse {
  greeting: {
    response: {
      candidates: {
        content: {
          parts: { text: string }[];
        };
      }[];
    };
  };
}

const { $trpcClient } = useNuxtApp();
const { hello } = $trpcClient;

const helloResp = await hello.useQuery<GreetingResponse>({
  name: "17 yo boy with paralytic ileus we give them probiotics",
});

// Extract and parse the nested response
const parsedData = ref(null);

if (helloResp.data) {
  try {
    parsedData.value = JSON.parse(
      helloResp.data.value
    );
  } catch (error) {
    console.error('Error parsing response:', error);
  }
}

// Watch for changes in the tRPC response and parse the data
watchEffect(() => {
  if (helloResp.data) {
    try {
      parsedData.value = JSON.parse(
        helloResp.data.greeting.response.candidates[0].content.parts[0].text
      );
    } catch (error) {
      console.error('Error parsing response:', error);
    }
  }
});
</script>

<style>
/* Add your styles here */
</style>
