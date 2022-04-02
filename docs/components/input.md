<script setup>
import { ref } from "vue";
import { Input } from "@/components";

const value = ref("");
</script>

# Input

## Examples

Value: {{ value }}

<Input v-model="value" placeholder="Please type something here" />

### Label

<Input v-model="value" label="Block layout" />
<Input v-model="value" label="Inline layout" layout="inline" class="mt-2" />

```vue
<Input v-model="value" label="Block layout" />
<Input v-model="value" label="Inline layout" layout="inline" />
```

## Properties

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | `String` | "" | The label to display for the input. |
| `layout` | `String` | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline` |
| `placeholder` | `String` | "" | The placeholder to display for the input. |

## Classes

Added to theh `div` container:

`sv-input` (`sv-input-block` | `sv-input-inline`)

Added to the `label`:

`sv-input-label`