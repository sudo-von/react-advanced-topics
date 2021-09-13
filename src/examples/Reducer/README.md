# useReducer

The useReducer hook allows us to handle "complex" states using a reducer function. 

## And what is a "complex" state?

A complex state is one that has a multi-level structure, for example: an object of objects that contains arrays. 

```javascript
{
    foo: {
        faa: {
        test: [],
        testB: ''
        }
    },
    fee: [],
    fii: {
        testC: [],
        testD: {}
    }
}
```

In the case that you require a state like the previous example and it's not easy to split it using different useStates, it's recommended to use useReducer. 