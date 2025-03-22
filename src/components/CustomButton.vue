<script setup>

import CustomButton from 'primevue/button';

defineProps({

  label: {
    type: String,
    default: "Click Me",
  },
  type: {
    type: String,
    default: "Submit",
  }

});
</script>

<template>
  <CustomButton :label="label" :type="type" />
</template>
