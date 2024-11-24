"use client"

import { useState } from 'react'
import styles from "@/components/template/SignupPage.module.css"
import toast, { Toaster } from 'react-hot-toast';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from "next-auth/react"
import { ThreeDots } from 'react-loader-spinner';

function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const router = useRouter();

    const signinHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        setLoading(false)
        if (res.error) {
            toast.error(res.error)
        } else {
            router.push("/")
        }


    }
    return (
        <div className={styles.form}>
            <h4>فرم ورود</h4>
            <form>
                <label>ایمیل</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>رمزعبور</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {loading ? (

                    <ThreeDots
                        visible={true}
                        height="45"
                        width="45"

                        color="#304ffe"
                        radius="9"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{ margin: "auto" }}
                    />
                ) : (

                    <button type="submit" onClick={signinHandler}>ورود</button>
                )}
            </form>
            <p>
                حساب کاربری ندارید؟
                <Link href="/signup">ثبت نام</Link>
            </p>
            <Toaster />
        </div>
    )
}

export default SigninPage;