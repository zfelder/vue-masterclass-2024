<template>
  <div class="projects">
    <h1>This is an projects page</h1>

    {{ projects ? projects[0] : '' }}

    <ul>
      <li v-for="project in projects" :key="project.id">
        <h2>{{ project.name }}</h2>
      </li>
    </ul>

    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'

const projects = ref<any[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('projects').select()

  if (error) console.error(error)

  projects.value = data

  return data
})()
</script>
