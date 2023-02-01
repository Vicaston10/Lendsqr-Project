import React from "react"
import "./style.scss"
import logoImg from "../../assets/svgs/Union.svg"
import logoText from "../../assets/svgs/lendsqr.svg"
import heroImg from "../../assets/svgs/hero.svg"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Logo } from "../../components/Logo"
export const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState("")
    const loginUser = (e: any) => {
        e.preventDefault();
        if (email && password) {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                navigate("/user")
            }, 3000)
        }
        else {
            setErr("Input Email and password")
        }
    }

    return (
        <div className="login-container">
            <div className="login-wrapper-welcome">
                <Logo />
                <div className="hero-img-container">
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <div className="login-wrapper-form">
            <div className="logo-mobile"> <Logo /></div>
                <div className="form-header">
                    <h3>Welcome!</h3>
                    <h5>Enter details to login.</h5>
                </div>
                <form>
                    <section className="input-container">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </section>
                    <section className="input-container">
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <span>SHOW</span>
                    </section>
                    {err && <p>{err}</p>}
                    <div className="form-bottomm">
                        <h5>FORGOT PASSWORD?</h5>
                    </div>

                    <button onClick={loginUser}>{loading ? "logging in..." : "Log In"}</button>
                </form>

            </div>
        </div>
    )
}