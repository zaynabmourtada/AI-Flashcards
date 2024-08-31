'use client'
import { useState } from "react"

// Flashcard page overview
export default function Flashcard(){
    const {isLoaded, isSignedIn, user} = useUser()
    const [flashcards, setFlashcards] = useState([])
    const router = useRouter()
}

// Fetch Flashcard Sets
useEffect(() => {
    async function ggetFlashcards(){
        if(!user) return
        const docRef = doc(collection(db, 'users'), user.id)
        const docSnap = await getDoc(docRef)
        if(docSnap.exist()) {
            const collections = docSnap.data().flashcards || []
            setFlashcards(collections)
        } else{
            await setDoc(docRef, {flashcards: []})
        }
    }
    ggetFlashcards()
}, [user]
)
