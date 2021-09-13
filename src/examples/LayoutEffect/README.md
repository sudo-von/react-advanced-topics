# useLayoutEffect

The hooks useEffect and useLayoutEffect are very similar, they take two arguments, a callback that defines the effect and a list of dependencies but useEffect is ASYNCHRONOUS while useLayoutEffect is SYNCHRONOUS.

useLayoutEffect will run like this:
- The component is updated by some state change, props or the parent is re-rendered.
- React renders the component.
- Your effect is executed.
- The screen is updated "visually".

### When to use useLayoutEffect?
A common case is that your component has a "flickering" rendering behavior since the state changes quickly by modifying the DOM. 

