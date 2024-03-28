import React from 'react'
import ClientTable from '@/components/clientTable/ClientTable';

function ClientListComp() {
  return (
    <div>
        <div className='text-black h-screen grid place-items-center'>
            <div className='w-[70%]'>
                <ClientTable />
            </div>
        </div>
    </div>
  )
}

export default ClientListComp;