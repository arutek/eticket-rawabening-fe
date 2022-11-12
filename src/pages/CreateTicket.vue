<script setup lang=ts>
  import { ref } from 'vue'

  const pax = ref(1)
  const collapsable = (index:number) => {

  }
  const remove = () => {
    pax.value--
  }
  const add = () => {
    pax.value++
  }
</script>

<template>
  <main>
    <section v-for="(key, index) in pax" :key="index" class="mb-8">
      <div class="flex justify-between bg-neutral-400 text-white rounded-t p-2">
        <p class="mb-0">Penumpang {{index + 1}}</p>
        <p class="mb-0">-</p>
      </div>
      <div class="grid grid-cols-2 gap-y-4 bg-neutral-100 rounded-b p-4">
        <p class="my-auto">Nama</p>
        <label class="flex items-center">
          <span class="mr-2">:</span>
          <input type="text" class="border rounded w-full py-1" />
        </label>
        <p class="my-auto">Jenis Kelamin</p>
        <label class="flex items-center">
          <span class="mr-2">:</span>
          <input type="text" class="border rounded w-full py-1" />
        </label>
        <p class="my-auto">Usia</p>
        <label class="flex items-center">
          <span class="mr-2">:</span>
          <input type="text" class="border rounded w-full py-1" />
        </label>
        <p class="my-auto">Alamat</p>
        <label class="flex items-center">
          <span class="mr-2">:</span>
          <input type="text" class="border rounded w-full py-1" />
        </label>
        <button @click="remove" class="col-span-2 bg-red-600 rounded-full text-white py-2">Hapus penumpang</button>
      </div>
    </section>
    <section v-if="pax < 5" @click="add" class="cursor-pointer flex justify-center items-center bg-neutral-400 rounded-full h-12 w-12 mx-auto mb-8">
      <p class="text-white text-2xl font-bold mb-0">+</p>
    </section>
    <RouterLink to="/" class="bg-green-600 rounded-full text-white px-4 py-2">Pesan tiket</RouterLink>
  </main>
</template>