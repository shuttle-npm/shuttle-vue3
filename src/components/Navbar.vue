<template>
    <div :class="getClasses()">
        <Disclosure as='nav' className='w-full bg-dark-gray-darker fixed top-0 z-[1000]'>
            <div v-if="isOpen" className='mx-auto px-2 sm:px-6 lg:px-8'>
                <div className='relative flex items-center justify-between h-16'>
                    <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                        {/* Mobile menu button*/}
                        <DisclosureButton
                            className='inline-flex items-center justify-center bg-gray-700 p-2 text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                            <span className='sr-only'>Open main menu</span>
                            {open ? (
                            <XIcon className='block h-6 w-6' aria-hidden='true' />
                            ) : (
                            <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                            )}
                        </DisclosureButton>
                    </div>
                    <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                        <div className='flex-shrink-0 flex items-center'>
                            <img className='block h-[30px] w-auto' src={touchSideLogo} alt='Touchsides' />
                        </div>
                        <div className='items-center hidden sm:flex'>
                            <Navigation />
                        </div>
                    </div>
                    {props.user && (
                    <div
                        className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                        <Menu as='div' className='ml-3 relative'>
                            <div>
                                <MenuButton className='bg-dark-gray-darker cursor-pointer'>
                                    <span className='sr-only'>Open user menu</span>
                                    <UserIcon
                                        className='align-middle h-6 w-6 bg-primary p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-white'
                                        aria-hidden='true' />
                                    <div className='align-middle text-white ml-2 hidden md:inline'>
                                        {props.user.FullName}</div>
                                    <ChevronDownIcon
                                        className='align-middle h-5 w-5 text-white ml-2 hidden md:inline' />
                                </MenuButton>
                            </div>
                            <Transition as={Fragment} enter='transition ease-out duration-100'
                                enterFrom='transform opacity-0 scale-95' enterTo='transform opacity-100 scale-100'
                                leave='transition ease-in duration-75' leaveFrom='transform opacity-100 scale-100'
                                leaveTo='transform opacity-0 scale-95'>
                                <MenuItems
                                    className='origin-top-right absolute right-0 mt-2 w-48 shadow-lg py-1 bg-light-gray text-gray-600 focus:outline-none'>
                                    <MenuItem>
                                    <a href='#'
                                        className='block px-4 py-2 text-sm text-gray-600 hover:bg-dark-gray hover:text-gray-500'
                                        onClick={clearStorage}>
                                        Logout
                                    </a>
                                    </MenuItem>
                                </MenuItems>
                            </Transition>
                        </Menu>
                    </div>
                    )}
                </div>
            </div>

            <DisclosurePanel className='sm:hidden'>
                <div className='px-2 pt-2 pb-3 space-y-1'>
                    <Navigation />
                </div>
            </DisclosurePanel>
            )}
        </Disclosure>
    </div>
</template>

<script setup>
import {
    Menu, MenuButton, MenuItems, MenuItem,
    Disclosure, DisclosureButton, DisclosurePanel
} from "@headlessui/vue";
import { ChevronDownIcon, MenuIcon, UserIcon, XIcon } from '@heroicons/vue/outline'
import Navigation from "./Navigation.vue";

import { ref } from "vue";

const isOpen = ref(false);

const props = defineProps({
    items: Array
});

const getClasses = () => {
    return {
        "sv-navbar": true
    };
}
</script>