import React from 'react'

const ImageCard = () => {
  return (
    <>
      {/***************** CARD *****************/}

      <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg">
        {/* image */}
        <img
          src="https://source.unsplash.com/random"
          className="w-full"
          alt=""
        />

        {/* description */}
        <div className="px-5 py-6">
          {/* title */}
          <div className="font-bold text-xl text-black mb-2">
            Photo by John Doe
          </div>
          {/* stats */}
          <div className="mb-6">
            <ul>
              <li>
                <strong>Views : </strong>15k
              </li>
              <li>
                <strong>Likes : </strong>2.5k
              </li>
              <li>
                <strong>Downloads : </strong>6k
              </li>
            </ul>
          </div>
          {/* tags */}
          <div className="space-x-2 text-sm font-medium">
            <span className="inline-block rounded-full px-2 py-1 bg-gray-200">
              #artist
            </span>
            <span className="inline-block rounded-full px-3 py-1 bg-gray-200">
              #outdoor
            </span>
            <span className="inline-block rounded-full px-3 py-1 bg-gray-200">
              #unsplash
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageCard;