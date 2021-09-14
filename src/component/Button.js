function Button ({buttonText, disabled}) {
    return (
        <button disabled={disabled} type='button'
        onClick={() => console.log({buttonText})}>
            {buttonText}
        </button>
    )
}

export default Button