<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <button @click="showAlert">Hello world</button>
  </div>
</template>
<script setup>
import Swal from 'sweetalert2'
function showAlert() {
  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })
}


</script>