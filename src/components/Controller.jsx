import React, { useState, useEffect } from 'react'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux'
import { setData, updateData } from '../features/dataSlice';
function Controller() {

    const dispatch = useDispatch();
    const [flag, setFlag] = useState(true)
    const [values, setValues] = useState({
        caption: "1 & 2 BHK Luxury Apartments at just Rs.34.97 Lakhs",
        cta: "Shop Now",
        bgColor: "#0369A1"
    })

    useEffect(() => {
        if (flag) {
            dispatch(setData(values))
            setFlag(false)
        } else {
            dispatch(updateData(values))
        }
    }, [values])

    return (
        <div className='bg-white rounded-md h-[400px] w-[500px] px-6 py-2 flex flex-col gap-8'>
            <p className='text-3xl font-mono font-bold text-gray-500'>Control Box</p>

            <div className=' flex flex-col justify-center items-start gap-8 '>
                <Input value={values.caption} onChange={(e) => setValues({ ...values, caption: e.target.value })} />
                <Input value={values.cta} onChange={(e) => setValues({ ...values, cta: e.target.value })} />
                <Input type="color" className="h-7 w-7 rounded-full" value={values.bgColor} onChange={(e) => setValues({ ...values, bgColor: e.target.value })} />
            </div>
        </div>
    )
}

export default Controller
