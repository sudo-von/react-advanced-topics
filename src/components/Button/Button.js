const Input = ({ children, ...rest }) => {
    return(
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 m-1 rounded" {...rest}>
            {children}
        </button>
    )
}

export default Input