<template>
  <div class="projects">
    <h1>This is an projects page</h1>

    {{ projects }}

    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref([])

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.error(error)
  console.log(data)

  projects.value = data

  return data
})()
</script>
