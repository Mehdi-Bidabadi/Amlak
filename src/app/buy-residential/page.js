import BuyResidentialsPage from '@/components/template/BuyResidentialsPage';
import React from 'react'

async function BuyResidentials({searchParams}) {
    const res = await fetch("http://localhost:3000/api/profile", {cache: "no-store"});
    const data = await res.json()

      let finalData = data.data;
    if(searchParams.category) {
      finalData = finalData.filter((i) => i.category === searchParams.category)
    }
  return (
    <BuyResidentialsPage data={finalData} />
  )
}

export default BuyResidentials;