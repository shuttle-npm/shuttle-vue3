# Core Class Object

The core class object is passed along to components using the `:sv-class` property and has to be an object that contains properties that match a BEM (Block, Element, Modifier) with a value of either a `String` or an `Array` of strings:

```js
{
    "sv-button": "some-custom-class",
    "sv-button--primary": ["class-a", "class-b"]
}
```

This would result in the value for each proeprty being applied when the relevant BEM is rendered.

In this way a single object may be passed along with various BEM matches, not only for the current element but also in the case where multiple Shuttle Vue components are part of a single container component.