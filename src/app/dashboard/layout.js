import DashboardSidebar from '@/components/layout/DashboardSidebar';
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import connectDB from '@/utils/coonectDB';
import User from '@/models/User';

async function DashboardLayout({children}) {
    const session = await getServerSession(authOptions);
    if(!session) redirect("/signin");

    await connectDB();
    const user = await User.findOne({email: session.user.email})
    console.log(user);

    if(!user) return <h3>مشکلی پیش امده است</h3>
  return (
    <DashboardSidebar email={user.email} role={user.role}>{children}</DashboardSidebar>
  )
}

export default DashboardLayout;