<script setup>
import { VTIconShuttle } from 'shuttle-theme';
</script>
<template>
    <section id="hero">
        <VTIconShuttle class="logo" />
        <h1 class="tagline">Shuttle Vue</h1>
        <p class="description">Vue 3 UI components built using Tailwind CSS and Headless UI.</p>
        <pre class="install">npm install shuttle-vue3</pre>
        <div class="actions">
            <a class="components" href="/shuttle-vue3/components/overview.html">
                Components
                <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                    <path
                        d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
                </svg>
            </a>
        </div>
    </section>

    <section id="highlights" class="vt-box-container">
        <div class="vt-box">
            <h2>Components</h2>
            <div>The most common use-cases are covered.</div>
        </div>
        <div class="vt-box">
            <h2>Why?</h2>
            <div>These components are for developing Shuttle based web applications. You are welcome to use them and
                assist in extending the framework.</div>
        </div>
        <div class="vt-box">
            <h2>Open Source</h2>
            <div>
                These packages are free open source software licensed under the
                <a href="https://opensource.org/licenses/BSD-3-Clause">3-Clause BSD License</a>. Pull requests are
                welcome.
            </div>
        </div>
    </section>
</template>

<style scoped>
a {
    color: var(--vt-c-orange-dark);
}

a:hover {
    color: var(--vt-c-orange);
}

.logo {
    height: 15em;
    width: 15em;
    margin: auto;
}

section {
    padding: 42px 32px;
}

#hero {
    padding: 32px 32px;
    text-align: center;
}

.tagline {
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0px auto;
}

html:not(.dark) .accent,
.dark .tagline {
    background: -webkit-linear-gradient(315deg,
            hsl(31, 75%, 52%) 25%,
            hsl(45, 69%, 44%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.description {
    max-width: 960px;
    line-height: 1.5;
    color: var(--vt-c-text-2);
    transition: color 0.5s;
    font-size: 22px;
    margin: 24px auto 40px;
}

.install {
    border-radius: .25rem;
    border: 1px solid rgb(120, 120, 120);
    padding: .25rem 1rem;
    margin: 0 auto;
    width: fit-content;
}

div.actions {
    padding-top: 2rem;
}

.actions a {
    font-size: 16px;
    display: inline-block;
    background-color: var(--vt-c-bg-mute);
    padding: 8px 18px;
    font-weight: 500;
    border-radius: 8px;
    transition: background-color 0.5s, color 0.5s;
}

.actions .components {
    font-weight: 600;
    background-color: var(--vt-c-orange);
    color: #fff;
}

.actions .icon {
    display: inline;
    position: relative;
    top: -1px;
    margin-left: 2px;
    fill: currentColor;
    transition: transform 0.2s;
}

.dark .actions .components {
    color: var(--vt-c-indigo);
}

.actions .components:hover {
    background-color: var(--vt-c-orange-dark);
    transition-duration: 0.2s;
}

.actions .components:hover .icon {
    transform: translateX(2px);
}

.dark .actions .components:hover {
    background-color: var(--vt-c-orange-light);
}

#special-sponsor {
    border-top: 1px solid var(--vt-c-divider-light);
    border-bottom: 1px solid var(--vt-c-divider-light);
    padding: 12px 24px;
    text-align: center;
}

#special-sponsor span {
    color: var(--vt-c-text-2);
    font-weight: 500;
    font-size: 13px;
    vertical-align: middle;
    margin: 0 24px;
}

#special-sponsor img {
    display: inline-block;
    vertical-align: middle;
    height: 36px;
}

.dark #special-sponsor img {
    filter: grayscale(1) invert(1);
}

#highlights {
    max-width: 960px;
    margin: 0px auto;
    color: var(--vt-c-text-2);
}

#highlights h2 {
    font-weight: 600;
    font-size: 20px;
    letter-spacing: -0.4px;
    color: var(--vt-c-text-1);
    transition: color 0.5s;
    margin-bottom: 0.75em;
}

#highlights p {
    font-weight: 400;
    font-size: 15px;
}

#highlights .vt-box {
    background-color: transparent;
}

#sponsors {
    max-width: 900px;
    margin: 0px auto;
}

#sponsors h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 1em;
}

#sponsors .sponsor-container {
    margin-bottom: 3em;
}

@media (max-width: 960px) {
    .tagline {
        font-size: 64px;
        letter-spacing: -0.5px;
    }

    .description {
        font-size: 18px;
        margin-bottom: 48px;
    }
}

@media (max-width: 768px) {
    .tagline {
        font-size: 48px;
        letter-spacing: -0.5px;
    }
}

@media (max-width: 576px) {
    #hero {
        padding: 64px 32px;
    }

    .description {
        font-size: 16px;
        margin: 18px 0 30px;
    }

    #special-sponsor img {
        display: block;
        margin: 2px auto 1px;
    }

    #highlights h3 {
        margin-bottom: 0.6em;
    }

    #highlights .vt-box {
        padding: 20px 36px;
    }
}

@media (max-width: 370px) {
    .tagline {
        font-size: 36px;
    }
}
</style>
