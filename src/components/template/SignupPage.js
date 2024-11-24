"use client"

import { useState } from 'react'
import styles from "@/components/template/SignupPage.module.css"
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ThreeDots } from 'react-loader-spinner';

function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const signupHandler = async (e) => {
        e.preventDefault()

        if (password !== rePassword) {
            toast.error("رمز و تکرار آن نادرست است")
            return
        }
        setLoading(true)
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },

        })
    
        const data = await res.json();
        setLoading(false)
        if (res.status === 201) router.replace("/signin")
    }
    return (
        <div className={styles.form}>
            <h4>فرم ثبت نام</h4>
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
                <label>تکرار رمز عبور</label>
                <input
                    type="password"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
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

                    <button type="submit" onClick={signupHandler}>ثبت نام</button>
                )}
            </form>
            <p>
                حساب کاربری دارید؟
                <Link href="/signin">ورود</Link>
            </p>
            <Toaster />
        </div>
    )
}

export default SignupPage;