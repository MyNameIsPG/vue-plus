<template>
  <router-view />
</template>

<script>
export default {
  created() {
    const language = localStorage.getItem('language')
    if (!language) {
      localStorage.setItem('language', 'zh')
    }
  }
}
</script>
