"use client"
import { searchManufacturerProps } from '@/types'
import React from 'react'
import { Combobox, Transition } from '@headlessui/react'

const SearchManufacturer = ({manufacturer, setManufacturer}: searchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className="relative w-full">

            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer