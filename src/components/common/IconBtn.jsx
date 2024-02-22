export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        className={`flex items-center ${
          outline ? "border border-[#07beb8] bg-transparent" : "bg-[#07beb8]"
        } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-[#495057] ${customClasses}`}
        type={type}
      >
        {children ? (
          <>
            <span className={`${outline && "text-[#07beb8]"}`}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    )
  }