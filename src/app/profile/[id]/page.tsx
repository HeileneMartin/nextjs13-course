'use client';
import { useParams } from "next/navigation"
export default function ProfileID() {
    const params = useParams();
    return (
        <div>
            Profile ID Page {params.id}
        </div>
    )
    }