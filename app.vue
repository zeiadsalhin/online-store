<template>
  <NuxtLayout>
    <v-app>
      <Nav />
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
<script setup>
// import Swal from 'sweetalert2'
// function showAlert() {
//   Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })
// }


</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
</style>