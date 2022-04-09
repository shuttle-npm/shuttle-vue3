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

| Name          | Type     | Default | Description                                                                                                        |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `label`       | `String` | ""      | The label to display for the input.                                                                                |
| `layout`      | `String` | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `placeholder` | `String` | ""      | The placeholder to display for the input.                                                                          |
| `sv-class`    | `Object` | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-input` 
  - `--block` 
  - `--inline`

- `sv-input__label`
  - `--block` 
  - `--inline`
