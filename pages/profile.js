import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Metadata from "../components/Metadata";

const altImage = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedicine.fiu.edu%2Fabout%2Ffaculty-and-staff%2Fpeople%2F_assets%2Fprofiles%2Fheadshot-placeholder.png&f=1&nofb=1"

export default function profile({user, userInfo}) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(userInfo&& userInfo.image? userInfo.image : altImage)
  const auth = useAuth();
  const router = useRouter();

  profile.getInitialProps = async () => {
    if (auth.user){
      const details = await fetch(`https://wod-with-faris-backend.herokuapp.com/user/getuser?email=${auth.user.email}`)
      .then(resp => resp.json())
      return { user: auth.user, userInfo: details};
    }
    return {}
  };

  const fileChangedHandler = event => {

    let reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result)
        uploadImage(reader.result)
    }
    reader.readAsDataURL(event.target.files[0])
  }

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

  if (user) {
    return (
      <div className={styles.container}>
        <Metadata title={"Xmas Throwdown Profile"} />
        <NavBar />
        <main className={styles.main}>
          <h1 className={styles.fontandcenter}>Hey {userInfo.first_name}!</h1>
            <div className="center-item">
              <img style={{ borderRadius: "100px", width: "150px", height: "150px"}} src={imagePreviewUrl} alt="..."/>
            </div>
              <input className="center-item" id="profile-img" type="file" style={{display: "none"}} name="avatar" onChange={fileChangedHandler} />
              <label className={styles["change-img-btn"]} for="profile-img">
                Change Image
              </label>
        </main>
        <Footer />
      </div>
    );
  } else {
    if (typeof window !== "undefined" && !user) {
      router.push("/login");
    }
    return (
      <div className={styles.container}>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
