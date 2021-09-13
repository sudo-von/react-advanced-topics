# useRef

The useRef hook has its origin in the createRef method that is used in class components and that allows us to create a “reference” to a DOM element created during rendering.

This part is important. In React, the most common thing when we want to modify an element of the DOM is to force a new render by means of a change in the state, that is, we delegate the generation of the DOM to React, which will build the tree based on the properties passed to the elements. We can see it as a case of declarative programming.

However, there are times when we need to modify a DOM element imperatively, for example when we want to make an animation, play a multimedia file or force a "focus" on a field. 