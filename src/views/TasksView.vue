<template>
  <div class="tasks">
    <h1>This is an tasks page</h1>
    <RouterLink to="/">Go to home</RouterLink>

    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../database/types'

const tasks = ref<Tables<'tasks'>[] | null>(null)

;(async () => {
  const { data, error } = await supabase.from('tasks').select()

  if (error) console.error(error)

  tasks.value = data

  return data
})()
</script>
