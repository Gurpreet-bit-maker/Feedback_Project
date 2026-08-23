import React, { useEffect, useState } from 'react'
import { Heart } from "lucide-react";
import axios from 'axios';

function LinkAndCommentBtns({ isLike, setIslike, isComment, index }) {


    useEffect(() => {
        const res = JSON.parse(localStorage.getItem("btnValue"));
        setIslike(res || false);
    }, []);


    const handleLikeBtn = async () => {
        try {
            const res = await axios.patch("http://localhost:3000/user/like", { index, isLike })
            console.log(res.data)
            localStorage.setItem("btnValue", JSON.stringify(!isLike))
            setIslike(!isLike)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>


            <button onClick={handleLikeBtn}>{isLike ? <Heart fill="red" color="red" /> : <Heart />}</button>

        </div >
    )
}

export default LinkAndCommentBtns
