const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} bg-rd rounded-md shadow-sm border-black focus:border-black focus:ring focus:ring-black focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
