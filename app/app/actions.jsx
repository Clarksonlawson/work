'use server'
import { revalidatePath, revalidateTag } from "next/cache";

export default async function submitContactForm(e){
    await addPost();
    revalidateTag('posts')
}