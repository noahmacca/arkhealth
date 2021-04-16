import React, { ReactElement } from 'react'

interface Props {
  transparent?: boolean
}

function Navbar(props: Props): ReactElement {
  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " title-lg text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
          >
            Ark Health
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
