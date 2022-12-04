# RIXUTILS

- monitor.js
  - Easy to use wrapper around [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)  browser API
  - Good for adding animation when elements appear on the screen

- prefmotion.js
  - Good for determining whether to run motion intensive scripts.


## Usage

### monitor
```js

const observe = monitor({ threshold: 0.2, trigger: 'once' })

observe(document.querySelector('#elementToObserve'), () => {
  // what to do when this element appears on the screen?
})
```

### prefsmotion

```js
prefersMotion(() => {
    console.log('im ok with motion')
  }, () => {
    console.log('im not ok with motion')
})

// 
if (isMotionPreferred()) {
  console.log('motion is OK')
} else {
  console.log('motion is NOT OK')
}
```