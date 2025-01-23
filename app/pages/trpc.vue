<template>
<NuxtLayout><div>
    <p>trpc test</p>
    <p>this {{helloResp.data}}</p>
  </div>
</NuxtLayout>
</template>

<script lang="ts" setup>
  const { $trpcClient } = useNuxtApp();
  const { hello } = $trpcClient;

  const helloResp = await hello.useQuery({name: "ADI"})

</script>

<style>

</style>