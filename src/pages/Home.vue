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
      <div class="border rounded-xl w-fit p-4 text-center">
        <img class="mb-2" :src="imgCruise" alt="Cruise" />
        <p>Pesiar</p>
      </div>
      <div class="border rounded-xl w-fit p-4 text-center">
        <img class="mb-2" :src="imgFieldtrip" alt="Field Trip" />
        <p>Praktikum</p>
      </div>
      <div class="border rounded-xl w-fit p-4 text-center">
        <img class="mb-2" :src="imgPrewed" alt="Prewedding" />
        <p>Prewedding</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import imgCruise from '@/assets/cruise2.png'
  import imgFieldtrip from '@/assets/fieldtrip2.png'
  import imgPrewed from '@/assets/prewed2.png'
</script>