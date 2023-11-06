'use client';
import { useParams } from "next/navigation"

export default function ProfilePostID() {
    const params = useParams();
    console.log(params.id);
    console.log(params.postId);
    return (
        <div>
        Profile Post ID Page Profile ID: {params.id} Post ID: {params.postId}
        </div>
    )
    }