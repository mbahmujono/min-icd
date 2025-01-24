<template>
  <NuxtLayout>
    <div>
      <p>tRPC Test</p>
      {{ helloResp.data }}
      <br>
      this is {{ parsedData }} data
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
    <div>
      <p>tRPC Test</p>
      {{ helloResp.data }}
      <br>
      this is {{ parsedData }} data
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

const { $trpcClient } = useNuxtApp();
const { hello } = $trpcClient;

const helloResp = await hello.useQuery({
  prompt: "17 yo boy with paralytic ileus we give them probiotics",
});

// Extract and parse the nested response
const parsedData = JSON.parse(helloResp.data.value.text);

// if (helloResp.data) {
//   try {
//     parsedData = helloResp.data?.text
//   } catch (error) {
//     console.error('Error parsing nested response:', error);
//   }
// }

// // Watch for changes in the tRPC response and parse the data
// watchEffect(() => {
//   if (helloResp.data) {
//     try {
//       // Parse the top-level response if it's a string
//       const greeting = typeof helloResp.data?.greeting === 'string'
//         ? JSON.parse(helloResp.data.text)
//         : helloResp.data?.text;

//       // Access and parse the nested text if it exists
//       const text =
//         greeting?.response?.candidates?.[0]?.content?.parts?.[0]?.text ?? '{}';

//       // Parse the nested JSON text
//       parsedData.value = JSON.parse(text);
//     } catch (error) {
//       console.error('Error parsing response:', error);
//     }
//   }
// });
</script>

<style>
/* Add your styles here */
</style>
