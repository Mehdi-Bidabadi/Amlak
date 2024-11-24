"use client"
import styles from "@/components/module/Shared.module.css";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function Shared() {
    const [url, setUrl] = useState("");
    useEffect(() => {
        setUrl(window.location.href)

    },[])
    return (

        <CopyToClipboard text={url}>

            <div className={styles.container}>
                <button>اشتراک گذاری</button>
            </div>
        </CopyToClipboard>
    )
}

export default Shared