import transporter from "@/hooks/mail-hooks";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
try {
    const {name, email, message, phone} = await request.json();
    await transporter.sendMail({
        to: process.env.EMAIL,
        subject: "New Message From " + name,
        replyTo: email,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <body>
            <div>
                <div>                        
                    <h1>Hostel Contact Form</h1>
                </div>
                <div>
                    <p>Hostel Admin</span>,</p>
                    <p>
                        You have received a new contact form submission from your hostel website.
                    </p>
                    <div> 
                        <h4>Form Details:</h4>
                        <p><strong>Name:</strong> ${ name }</p>
                        <p><strong>Email:</strong> ${ email }}</p>
                        <p><strong>Phone Number:</strong> ${ phone }</p>
                        <p><strong>Message:</strong> ${ message }</p>
                    </div>
                        
                </div>
            </div>
        </body>
        </html>
        `,
      });

      await transporter.sendMail({
        to: email,
        subject: "Thank you for contacting",
        replyTo: process.env.EMAIL,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <body>
            <div>
                <div>                        
                    <h1>Hostel Contact Form</h1>
                </div>
                <div>
                    <p><strong>Hostel Admin</strong></p>
                    <p>
                        We've received your contact form application and will surely contact you shortly.
                    </p>
                    <div> 
                        <p>Thank you for reaching out to us. We have received your message and our team will review it shortly. 
                        If your inquiry requires a response, we will get back to you as soon as possible.
                        </p>
                        <p>For any queries, please feel free to reach out to us at email  anurag.mbh@gmail.com</p>
                        <p>We appreciate your interest and look forward to assisting you.</p>
                        <p><strong>Best regards,</strong></p>
                        <p><strong>Spt. Dilip Patil</strong></p>
                        <p><strong>Military Boys Hostel, Karad</strong></p>
                        <p><strong>+91 9876543210</strong></p>
                    </div>

                
                        
                </div>
            </div>
        </body>
        </html>
        `,
      });

      return new NextResponse("Message sent successfully", {
        status: 200
      })
} catch (error: any) {
    return new NextResponse(
        "Internal Server Error" + error,
    {
        status: 500
    });
}
}