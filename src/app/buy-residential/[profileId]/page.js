import DetailsPage from '@/components/template/DetailsPage'
import Profile from '@/models/Profile'
import connectDB from '@/utils/coonectDB'
import React from 'react'

async function ProfileDetails({params: {profileId}}) {
  await connectDB()
  const profile = await Profile.findOne({_id: profileId})
  return (
    <DetailsPage data={profile} />
  )
}

export default ProfileDetails