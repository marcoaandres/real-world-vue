<template>
  <div class="event-card" v-if="event">
    <h1>{{ title }}</h1>
    <p>{{ direction }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import EventServices from '@/services/EventServices'
const event = ref(null)

/**Propiedades para eventDetail */
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
})

/*computed props */
const direction = computed(
  () =>
    event.value.time + ' on ' + event.value.date + '@' + event.value.location
)
const title = computed(() => event.value.title)

const description = computed(() => event.value.description)

EventServices.getEvent(props.id)
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<style scoped></style>
