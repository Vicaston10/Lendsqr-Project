import { UserPersonalDetails } from '../../components/Users.component/UserDetails'
import { UserProfile } from '../../components/Users.component/UserProfile'
import { useNavigate } from "react-router-dom";
import './userDetails.scss'
import { httpPrivate } from '../../utils/http';
import { useEffect, useState } from 'react';
import { userType } from '../../types/userType';
import { LoaderContainer } from '../../components/LoaderContainer';

export const UserDetails = () => {
    const [userDetail, setUserDetail] = useState<userType>();
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const details: any = sessionStorage.getItem("user")
    const getId = JSON.parse(details)


    const clickHandler = () => {
        navigate(-1)
        console.log("click")
    }

    const fetchOneUser = async (id: string) => {
        try {
            setLoading(true)
            const res = await httpPrivate.get(`/users/${id}`)
            const result = await res.data;

            setUserDetail(result)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOneUser(getId?.id)
    }, [getId?.id])

    return (
        <div>
            <div className='back-top-flex'>
                <img role={"button"} onClick={clickHandler} src="/assets/svgs/backBtn.svg" alt="" />
                <span>Back to Users</span>
            </div>
            <div className='page-title-flex'>
                <h3>User Details</h3>
                <div>
                    <button className='blacklist-btn'>BlackList User</button>
                    <button className='activate-btn'>Activate User</button>
                </div>
            </div>
            {
                loading ? <LoaderContainer /> : <>
                    <div>
                        <UserProfile detail={userDetail!} />
                    </div>
                    <div>
                        <UserPersonalDetails detail={userDetail!} />
                    </div>
                </>
            }
        </div>
    )
}