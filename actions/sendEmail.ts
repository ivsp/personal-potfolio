'use server'
import ContactEmailTemplate from "@/email/contact-email-template";
import { getErrorMessage, validateStrind } from "@/lib/utils";
import {Resend} from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)


export const senEmail = async (formData: FormData) => {
    const senderEmail = formData.get("email") 
    const message = formData.get("message"); 
    if(!validateStrind(senderEmail, 50)){
        return{
            error: 'Invalid sender email'
        }
    }
    if(!validateStrind(message, 5000)){
        return{
            error: 'Invalid message'
        }
    }
    try{
        const {data, error} = await resend.emails.send({
            from: 'Mensaje desde portfolio <onboarding@resend.dev>',
            to: process.env.EMAIL_SEND_TO as string,
            subject: "Contacto portfolio web",
            replyTo: senderEmail as string,
            react: ContactEmailTemplate({ message: message as string, senderEmail: senderEmail as string }),     
        })
        return {data, error}
        
    }catch(error: unknown){
        return {
            error: getErrorMessage(error)
        }
    }
  };