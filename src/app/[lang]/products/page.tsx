import React from 'react'

type ProductTypes = {
    id: string | number, 
    name: string, 
}

type ProductsTypes = Array <ProductTypes>

const products: ProductsTypes = [
    {
        id: 1, 
        name: "Cashapp"
    }, 
    {
        id: 2, 
        name: "Airtime"
    }, 
    {
        id: 3, 
        name: "Swivy"
    }, 
]

const ProductsPage = () => {
  return (
    <div className=' text-black h-screen w-full flex justify-center items-center'>
        <div className='w-[50%] overflow-y-scroll max-h-[50%] p-[2rem] shadow-lg rounded-2xl grid grid-cols-[repeat(3,minmax(80px,_1fr))] justify-center items-center gap-3'>
            
            {
                products && products.map((product: ProductTypes) => (
                    <div key={ product?.id } className='rounded-lg hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                        <h1>{ product?.name }</h1>
                    </div>
                ))
            }
            {/* <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div> */}
            {/* <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div> */}
            {/* <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div>
            <div className='hover:shadow-lg hover:bg-slate-100 hover:text-black text-slate-500 py-[1rem] shadow-sm cursor-pointer flex flex-col justify-center items-center gap-2'>
                <h1>CashApp</h1>

            </div> */}
        </div>
    </div>
  )
}

export default ProductsPage