<template>
  <section>
    <div class="text-center mb-8">
      <h3 class="text-primary-0">Apa yang akan anda lakukan?</h3>
      <p>
        Jelajahi Wisata Rawa Bening dengan paket
        layanan yang telah Kami sediakan sesuai kebutuhan Anda
      </p>
    </div>
    <div class="flex flex-col items-center gap-4">
      <div @click="packageChoosed(cruise)" class="border rounded-xl w-fit p-4 text-center">
        <img class="mb-2" :src="imgCruise" alt="Cruise" />
        <p>Pesiar</p>
      </div>
      <div @click="packageChoosed(fieldtrip)" class="border rounded-xl w-fit p-4 text-center">
        <img class="mb-2" :src="imgFieldtrip" alt="Field Trip" />
        <p>Praktikum</p>
      </div>
      <div @click="packageChoosed(prewedding)" class="border rounded-xl w-fit p-4 text-center">
        <img class="mb-2" :src="imgPrewed" alt="Prewedding" />
        <p>Prewedding</p>
      </div>
    </div>
  </section>
  <section v-if="showModal" class="fixed bg-primary-0/50 w-screen h-screen top-0 left-0">
    <section @click="showModal = false" class="fixed w-screen h-screen top-0 left-0" />
    <div class="absolute text-center bg-primary-3 rounded-md shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 p-4">
      <h3>{{modalData.title}}</h3>
      <p class="mb-4">{{modalData.details}}</p>
      <div>
        <button class="bg-primary-4 text-primary-3 rounded-full py-2 px-4">{{modalData.costCopy}}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import imgCruise from '@/assets/cruise2.png'
  import imgFieldtrip from '@/assets/fieldtrip2.png'
  import imgPrewed from '@/assets/prewed2.png'
  import { ref, reactive } from 'vue'

  const cruise = {
    title: 'Pesiar',
    details: 'Perjalan yang akan Anda lakukan merupakan perjalanan wisata di sekitar Rawa Bening',
    costCopy: 'Rp 120.000,00',
  }
  const fieldtrip = {
    title: 'Praktikum',
    details: 'Perjalan yang akan Anda lakukan merupakan perjalanan praktikum sekolah di sekitar Rawa Bening',
    costCopy: 'Rp 120.000,00',
  }
  const prewedding = {
    title: 'Prewedding',
    details: 'Perjalan yang akan Anda lakukan merupakan perjalanan untuk merayakan dan penagmbilan gambar foto pra pernikahan Anda di sekitar Rawa Bening',
    costCopy: 'Rp 120.000,00',
  }

  const showModal = ref(false)
  const modalData = ref({
    title: '',
    details: '',
    costCopy: '',
  })

  const packageChoosed = (val:any) => {
    modalData.value = val
    showModal.value = true
  }
</script>