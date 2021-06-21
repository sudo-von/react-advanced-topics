import { memo, useEffect } from 'react'
import PropTypes from 'prop-types'

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

const Item = memo(({ user, handleDelete }) => {
    
    useEffect(() => {
      console.log('Item render')
    })

    return(
        <li className="font-normal pl-2 flex justify-between items-center">
            {user.name}
            <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-1 rounded">
                Delete
            </button>
        </li>
    )
})

Item.propTypes = {
    user: PropTypes.object
}

export default Item