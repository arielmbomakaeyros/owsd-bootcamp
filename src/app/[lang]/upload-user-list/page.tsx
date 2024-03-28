import React, { Suspense } from 'react'
import UploadUserList from './UploadUserList'

const UploadUserListPage = () => {
  return (
    <Suspense fallback="loading...">
      <div className='flex justify-center h-screen items-center'>
          <UploadUserList />
      </div>
    </Suspense>
  )
}

export default UploadUserListPage