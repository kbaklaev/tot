import React from 'react'

const AuthButton = ({title, agreement}) => {
  const style = (title === 'создать профиль' && !agreement)
    ? "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed w-full sm:w-auto uppercase"
    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto uppercase"

  return (
    <div className="flex items-center justify-center py-4">
      <button
        className={style}
        type="submit"
        disabled={title === 'создать профиль' && !agreement}
      >
        {title}
      </button>
    </div>
  )
}

export default AuthButton
