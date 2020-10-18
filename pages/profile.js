import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";

const altImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedicine.fiu.edu%2Fabout%2Ffaculty-and-staff%2Fpeople%2F_assets%2Fprofiles%2Fheadshot-placeholder.png&f=1&nofb=1"

export default function profile() {
  const auth = useAuth();
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState(undefined)
  const [user, setUser] = useState(undefined)
  const [imagePreviewUrl, setImagePreviewUrl] = useState(userInfo&& userInfo.image? userInfo.image : altImage)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)

    if (auth.user){
      fetch(`https://wod-with-faris-backend.herokuapp.com/user/getuser?email=${auth.user.email}`)
      .then(resp => resp.json()).then(data => {
        setUserInfo(data)
        setImagePreviewUrl(data.image)
      })
      setUser(auth.user)
    }
  }, [auth])

  const fileChangedHandler = event => {
    let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result)
        uploadImage(reader.result)
    }
    reader.readAsDataURL(event.target.files[0])
  }

  // Sends Base64 image to backend
  const uploadImage = async image => {
    const user = await fetch("https://wod-with-faris-backend.herokuapp.com/user/store_profile_img", {
      method: "POST",
      headers: { 
        "Content-type": "application/json"
      },
      body: JSON.stringify({ 
        img: image,
        user_id: userInfo.id
    })
    }).then(resp => resp.json())
    setImagePreviewUrl(user.image)
  }

    return (
      <div className={styles.container}>
        <Metadata title={"Xmas Throwdown Profile"} />
        <NavBar />
        {user?
          <main className={styles.main}>
          {userInfo?
            <>
              <h1 className={styles.fontandcenter}>Hey {userInfo.first_name}!</h1>
              <div className="center-item">
                <img className={styles["profile-image"]} src={imagePreviewUrl} alt="..."/>
              </div>
              <input className="center-item" id="profile-img" type="file" style={{display: "none"}} name="avatar" onChange={fileChangedHandler} />
              <label className={styles["change-img-btn"]} htmlFor="profile-img">
                Change Image
              </label>
            </>
            :
            <div className="spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          }
        </main>
        :
        <>
        {loading?
          <div className="spinner-border text-success" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          :
          <>
            <h1 className={styles.fontandcenter}>Access Denied. Please Login</h1>
            <Link href="/login">
              <button type="button" className="btn btn-primary">Login</button>
            </Link>
          </>
          }
          </>
        }
        <div className={styles.bottom}>
          <Footer />
        </div>
      </div>
    );
}

