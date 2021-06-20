import { memo, useEffect } from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

/**
 *  React memoizes the rendered output of the wrapped component then skips unnecessary renderings.
 *  When a component is wrapped in React.memo(), 
 *  React renders the component and memoizes the result. 
 *  Before the next render, if the new props are the same, 
 *  React reuses the memoized result skipping the next rendering. 
 *
 *  The best case of wrapping a component in React.memo() is when you expect the functional component 
 *  to render often and usually with the same props.
 *
 *  A common situation that makes a component render with the same props is being forced to render by 
 *  a parent component.
 */

const List = memo(({ users }) => {
    
    useEffect(()=>{
      console.log('List render')
    })

    return(
        <ul>
            { users.map(user =>
                <Item user={user} key={user.id}/>
            )}
        </ul>
    )
})

List.propTypes = {
    users: PropTypes.array
}

export default List