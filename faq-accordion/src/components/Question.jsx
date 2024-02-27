import React, { useState } from 'react'

function Question({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="FAQ bg-white py-2 px-3 rounded-md">
        {/* question and toggler */}
        <div className="flex justify-between">
            <span className="font-semibold">{question.title}</span>
            <button onClick={() => setIsOpen(!isOpen)} className="w-6 h-6 hover:bg-gray-200 rounded-full">
                {isOpen ? <i class="ri-arrow-up-s-line"></i> : <i class="ri-arrow-down-s-line"></i>}
            </button>
        </div>
        {/* answer */}
        {isOpen && <div className="pl-3 mt-1 leading-6 text-lg text-gray-600">{question.info}</div>}
    </section>
  )
}

export default Question
