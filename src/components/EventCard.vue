<template>
  <router-link
    :to="{ name: 'EventDetails', params: { id: id } }"
    class="event-link"
  >
    <div class="event-card">
      <span>@{{ header }}</span>
      <h4>{{ title }}</h4>
    </div>
  </router-link>
</template>

<script setup>
import { computed, defineProps } from 'vue'

/*computed props */
const header = computed(() => props.event.time + ' on ' + props.event.date)
const title = computed(() => props.event.title)
const id = computed(() => props.event.id)
/**Props */
const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
