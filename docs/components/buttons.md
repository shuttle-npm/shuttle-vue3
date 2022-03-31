<script setup>
import { ref } from "vue";
import { Alert, Button } from "@/components";
import { PlayIcon } from '@heroicons/vue/outline'

const message = ref("You can click a button to change this message.");

const click = (type) => {
    message.value = `You clicked the "${type}" button.`;
}
</script>

# Buttons

## Examples

<Alert type="info" :message="message" class="mb-4" />

<div class="flex flex-row">
<Button type="primary" @click="click('primary')">Primary</Button>
<Button type="secondary" class="ml-2" @click="click('secondary')">Secondary</Button>
<Button type="success" class="ml-2" @click="click('success')">Success</Button>
<Button type="danger" class="ml-2" @click="click('danger')">Danger</Button>
<Button type="warning" class="ml-2" @click="click('warning')">Warning</Button>
<Button type="info" class="ml-2" @click="click('info')">Info</Button>
<Button type="link" class="ml-2" @click="click('link')">Link</Button>
</div>

```vue
<Button type="primary">Primary</Button>
<Button type="secondary">Secondary</Button>
<Button type="success">Success</Button>
<Button type="danger">Danger</Button>
<Button type="warning">Warning</Button>
<Button type="info">Info</Button>
<Button type="link">Link</Button>
```

## Custom Icon

<Button :icon="PlayIcon">Custom Icon</Button>

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `type` | `String` | `primary` | The type of alert:<br/>- `primary`<br/>- `secondary`<br/>- `success`<br/>- `danger`<br/>- `warning`<br/>- `info`<br/>- `link` |
| `icon` | `Component` | `undefined` | Displays the given icon in front of the content. |

## Events

| Name | Description |
| --- | --- |
| `click` | Called when the button is clicked. |

## Classes

`sv-btn` `sv-btn-{type}`