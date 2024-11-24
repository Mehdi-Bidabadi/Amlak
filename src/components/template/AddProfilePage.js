"use client"

import styles from "@/components/template/AddProfile.module.css"
import { useEffect, useState } from "react"
import TextInput from "../module/TextInput"
import RaidoList from "../module/RaidoList"
import TextList from "../module/TextList"
import CustomDataPicker from "../module/CustomDataPicker"
import { useRouter } from "next/navigation"

function AddProfilePage({ data }) {
  const [profileData, setProfileData] = useState({
    title: "",
    description: "",
    location: "",
    phone: "",
    price: "",
    realState: "",
    constructionDate: new Date(),
    category: "",
    rules: [],
    amenities: [],
  })

  useEffect(() => {
    if(data) setProfileData(data);
  },[])

  const router = useRouter();

  const submitHandler = async () => {
    console.log(profileData);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: { "Content-Type": "application/json" },

    })
    const data = await res.json()
    console.log(data);
  }

  const editHandler = async () => {
    
    const res = await fetch("/api/profile", {
      method: "PATCH",
      body: JSON.stringify(profileData),
      headers: {"Content-Type": "application/json"}
    })
    const data = await res.json()
    if(!data.error){
      console.log("object");
    }else{
      router.refresh();
    }
  }
  return (
    <div className={styles.container}>
      <h3>{data ? "ویرایش آگهی" : "ثبت آگهی"}</h3>
      <TextInput title="عنوان آگهی" name="title" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="توضبحات" name="description" profileData={profileData} setProfileData={setProfileData} textarea={true} />
      <TextInput title="آدرس" name="location" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="قیمت  " name="price" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="موبایل  " name="phone" profileData={profileData} setProfileData={setProfileData} />
      <TextInput title="ینگاه " name="realState" profileData={profileData} setProfileData={setProfileData} />
      <RaidoList profileData={profileData} setProfileData={setProfileData} />
      <TextList title="امکانات رفاهی" profileData={profileData} setProfileData={setProfileData} type="amenities" />
      <TextList title="قوانین " profileData={profileData} setProfileData={setProfileData} type="rules" />
      <CustomDataPicker profileData={profileData} setProfileData={setProfileData} />
      {data ? (

        <button className={styles.submit} onClick={editHandler}>ویرایش آگهی</button>
      ) : (
        <button className={styles.submit} onClick={submitHandler}>ثبت آگهی</button>

      )}
    </div>
  )
}

export default AddProfilePage;