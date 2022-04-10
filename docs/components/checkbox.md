<script setup>
import { ref } from "vue";
import { Checkbox } from "@/components";

const value = ref(false);
</script>

# Checkbox

## Examples

Value: {{ value }}

<Checkbox v-model="value" />

### Label

<Checkbox v-model="value" label="Use express delivery?" />

```vue
<Checkbox v-model="value" label="Use express delivery?" />
```

### Disabled

<Checkbox v-model="value" label="Is this disabled?" :disabled="true" />

```vue
<Checkbox v-model="value" label="Is this disabled?" :disabled="true" />
```

## Properties

| Name          | Type      | Default | Description                                                                                                        |
| ------------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------ |
| `label`       | `String`  | ""      | The label to display for the input.                                                                                |
| `layout`      | `String`  | `block` | The layout of the input when a label is included:<br/>- `block`<br/>- `inline`                                     |
| `placeholder` | `String`  | ""      | The placeholder to display for the input.                                                                          |
| `disabled`    | `Boolean` | `false` | Indicates whether the checkbox is in a disabled state.                                                             |
| `sv-class`    | `Object`  | `{}`    | The [core class object](/components/core-class) that will render classes along with the corresponding BEM entries. |

## Classes

- `sv-checkbox`
  - `sv-checkbox--checked`
  - `sv-checkbox--unchecked`
  - `sv-checkbox__box--disabled`

- `sv-checkbox__box`
  - `sv-checkbox__box--checked`
  - `sv-checkbox__box--unchecked`
  - `sv-checkbox__box--disabled`

- `sv-checkbox__icon`
  - `sv-checkbox__icon--checked`
  - `sv-checkbox__icon--unchecked`
  - `sv-checkbox__icon--disabled`

- `sv-checkbox__label`
  - `sv-checkbox__label--checked`
  - `sv-checkbox__label--unchecked`
  - `sv-checkbox__label--disabled`