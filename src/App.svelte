<script lang="ts">
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <Counter />
  <select
    name=""
    id=""
    class="select w-full max-w-xs"
  >
    <option disabled selected>Select vehicle make </option>
    <option value="audi">Audi</option>
    <option value="bmw">BMW</option>
    <option value="mb">Mercedes-Benz</option>
    <option value="vw">Volkswagen</option>
  </select>
  <input
    type="text"
    name=""
    id=""
    placeholder="Enter text here"
    class="input w-full"
  />
</main>

<style>
</style>
