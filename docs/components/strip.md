<script setup>
import { ref } from "vue";
import { Alert, Button, Strip } from "@/components";
import { PlusIcon, RefreshIcon } from "@heroicons/vue/outline";

const message = ref("You can click a button to change this message.");

const click = (type) => {
    message.value = `You clicked the "${type}" button.`;
}
</script>

# Strip

## Examples

<Alert variant="info" :message="message" class="mb-4" />

<Strip>
<Button :icon="RefreshIcon" size="sm" @click="click('refresh')"></Button>
<Button :icon="PlusIcon" size="sm" @click="click('add')"></Button>
<Button size="sm" @click="click('action')" variant="secondary">Action</Button>
</Strip>

```vue
<script setup>
</script>

<template>
    <Strip>
        <Button :icon="RefreshIcon" size="sm"></Button>
        <Button :icon="PlusIcon" size="sm"></Button>
        <Button size="sm">Action</Button>
    </Strip>
</template>
```

## Properties

| Name       | Type        | Default     | Description                                                                                                                    |
| ---------- | ----------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `sv-class` | `Object`    | `{}`        | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries.             |

## Classes

- `sv-strip`
