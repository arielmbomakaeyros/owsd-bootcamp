import React, { Suspense } from 'react';
import ClientListComp from './ClientListComp';

function page() {
  return (
    <Suspense fallback="loading">
      <div>
          <ClientListComp />
      </div>
    </Suspense>
  )
}

export default page