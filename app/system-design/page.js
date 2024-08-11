'use client';

import React, {useState} from 'react';
import { ArrowDown } from '../arrowDown';

export default function SystemDesign() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectValue, setSelectValue] = useState('Option 1');

    const updateValue = (value) =>{
        setSelectValue(value);
        setIsOpen(false);
    }

  return (
    <div>
        <h1>This is a title</h1>
        <h2>This is a subtitle</h2>
        <p className='text-base'>This is a paragraph</p>
        <a href="#">This is an anchor</a>
        <div className='my-4'>
            <button className='btn btn-primary'>This is a primary button</button>
        </div>
        <div className='my-4'>
            <button className='btn btn-secondary'>This is a secondary button</button>
        </div>
        <div className='my-4'>
            <button disabled className='btn btn-secondary'>This is a disabled button</button>
        </div>
        <div>
            <input type="text" placeholder='Phone number'/>
        </div>
        <div>
            <input disabled type="text" placeholder='E-mail'/>
        </div>
        <div>
            <input type="date" name="date" id="date" />
        </div>
        <div className='flex items-start'>
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut esse quae nam eos numquam consequatur repellat ipsum debitis incidunt maxime suscipit enim error iusto a sint, eligendi ullam rerum atque.</label>
        </div>
        <div>
            <select name="select" id="select">
                <option value="o1">Option 1</option>
                <option value="o2">Option 2</option>
            </select>
        </div>

        <div className="select">
            <div className='flex items-center justify-between child' onClick={() => setIsOpen(!isOpen)}>
                <span>{selectValue}</span>
                <div className={isOpen ? "rotate-180 transition" : "rotate-0 transition"}>
                    <ArrowDown />
                </div>
            </div>
            {
                isOpen && (
                <div>
                    <ul className='flex flex-col divide-y border'>
                        <li className='child' onClick={() => updateValue("Option 1")}>Option 1</li>
                        <li className='child' onClick={() => updateValue("Option 2")}>Option 2</li>
                        <li className='child' onClick={() => updateValue("Option 3")}>Option 3</li>
                    </ul>
                </div>
                )
            }
        </div>
    </div>
  )
}
