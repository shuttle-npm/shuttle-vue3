<template>
    <Listbox v-model="selectedOption">
        <div :class="getClasses()">
            <ListboxButton class="sv-listbox__button">
                <span class="sv-listbox__selected-option">{{ selectedOption.name }}</span>
                <span class="sv-listbox__icon-container">
                    <SelectorIcon class="sv-listbox__icon" aria-hidden="true" />
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions class="sv-listbox__options">
                    <ListboxOption
                        v-slot="{ active, selected }"
                        v-for="person in options"
                        :key="person.name"
                        :value="person"
                        as="template"
                    >
                        <li
                            :class="[active ? 'sv-listbox__option--active' : 'sv-listbox__option--inactive', 'sv-listbox__option']"
                        >
                            <span
                                :class="[
                                    selected ? 'sv-listbox__option-text--selected' : 'sv-listbox__option-text--not-selected', 'sv-listbox__option-text',
                                ]"
                            >{{ person.name }}</span>
                            <span
                                v-if="selected"
                                class="sv-listbox__option-icon-container--selected"
                            >
                                <CheckIcon class="sv-listbox__option-icon--selected" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script setup>
import { ref } from 'vue'
import {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

const options = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
]

const selectedOption = ref(options[0])

const getClasses = () => {
    return {
        "sv-listbox": true
    };
}
</script>