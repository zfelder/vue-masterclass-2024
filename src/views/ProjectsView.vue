<template>
  <div class="projects">
    <h1>This is an projects page</h1>
    <div v-for="project in projects" :key="project.id">
      <h2>{{ project.name }}</h2>
    </div>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient'

const getProjects = async () => {
  const { data, error } = await supabase.from('projects').select('*')

  if (error) {
    console.error(error)
  }

  return data
}

const projects = ref([])

onMounted(async () => {
  projects.value = await getProjects()
})
</script>
