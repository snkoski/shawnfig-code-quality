We don't anticipate that it will be necessary for individual projects to extend the eslint project--it would be better to update the shared config in this repo and maintain common standards across all our projects.

But just in case we do have a valid use case for this in the future, here is an example of how it is technically possible to extend the config in this repo:

```js
module.exports = {
  extends: ['./node_modules/@artnet/frontend-code-quality/eslint/index.js'],
  rules: {
    // additional rules here...
  },
}
```