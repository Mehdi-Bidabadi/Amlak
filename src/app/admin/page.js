import connectDB from '@/utils/coonectDB'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import User from '@/models/User';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import AdminPage from '@/components/template/AdminPage';
import Profile from '@/models/Profile';

async function Admin() {
    await connectDB();
    const session = await getServerSession(authOptions);
    if(!session) redirect("/signin");

    const user = await User.findOne({email: session.user.email})
    if(user.role !== "ADMIN") redirect("/dashboard");

    const profiles = await Profile.find({published: false})
    
  return (
    <DashboardSidebar role={user.role} email={user.email}>
    <AdminPage profiles={profiles} />
    </DashboardSidebar>
  )
}

export default Admin