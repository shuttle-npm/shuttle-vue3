<script setup>
import { ref } from "vue";
import { Listbox } from "@/components";

const options = [
    { text: 'Wade Cooper' },
    { text: 'Arlene Mccoy' },
    { text: 'Devon Webb' },
    { text: 'Tom Cook' },
    { text: 'Tanya Fox' },
    { text: 'Hellen Schmidt' },
]
</script>

<style>
.vt-doc ul {
    padding-left: 0;
}
</style>

# Listbox

## Examples

<Listbox :options="options"/>