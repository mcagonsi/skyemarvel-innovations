// Improved error handling and logging for the contact API route
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import { contactMessage } from '@/types/message';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const message: contactMessage = {
        name: data.name as string,
        email: data.email as string,
        phone: data.phone as string,
        
    };

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
        console.error("GMAIL_USER or GMAIL_PASS environment variables are not set.");
        return NextResponse.json({ message: "Server configuration error." }, { status: 500 });
    }

    //automatic reply email
    const noReplytemplate = path.join(process.cwd(), 'src', 'template', 'noReply.html');
    let noReplyContent= '';
    try{
        noReplyContent = fs.readFileSync(noReplytemplate, 'utf8');

    }catch (err) {
        console.error('Error reading file:', err);
        return NextResponse.json({message: "Error reading template file"}, {status: 500});
    }

    noReplyContent = noReplyContent
        .replace('{{name}}', message.name)

      
      
    const senderTemplate = path.join(process.cwd(), 'src', 'template', 'contact.html');
    let senderContent= '';
    try{
        senderContent = fs.readFileSync(senderTemplate, 'utf8');

    }catch (err) {
        console.error('Error reading file:', err);
        return NextResponse.json({message: "Error reading template file"}, {status: 500});
    }

    senderContent = senderContent
        .replace('{{name}}', message.name)
        .replace('{{email}}', message.email)
        .replace('{{phone}}', message.phone);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER!,
            pass: process.env.GMAIL_PASS!,
        },
    });

    //setting up the notification email
    const senderOptions = {
        from: message.email,
        to: process.env.GMAIL_USER,
        subject: "New Connect Request!",
        html: senderContent,
        attachments: [
            {
                filename: 'footer_logo2.png',
                path: './public/footer_logo2.png',
                cid: 'footerlogo' 
            }
        ],
    };

    //setting up the no-reply email
    const noReplyOptions = {
        from: process.env.GMAIL_USER,
        to: message.email,
        subject: "Automatic Reply - Thank you for contacting us",
        html: noReplyContent,
        attachments: [
            {
                filename: 'footer_logo2.png',
                path: './public/footer_logo2.png',
                cid: 'footerlogo' 
            }
        ],

    };

    try {
        await transporter.sendMail(senderOptions);
        await transporter.sendMail(noReplyOptions);
        return NextResponse.json({ message: "Message sent successfully" });
    } catch (err) {
        console.error("Error sending email:", err);
        return NextResponse.json({ message: "Error sending email" }, { status: 500 });
    }
}