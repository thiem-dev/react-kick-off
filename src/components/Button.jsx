const Button = ({clearSinglePost}) => {

    const handleClick = () => {
        clearSinglePost()
    }

    return <div className="btn" onClick={handleClick}>Home</div>
}

export default Button