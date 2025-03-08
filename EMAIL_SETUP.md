# Email Setup for Contact Form

To enable email notifications from the contact form to be sent to `anurag.mbh@gmail.com`, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Set Up an Email Service

1. Log in to your EmailJS account
2. Go to the "Email Services" section
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Follow the instructions to connect your email account
6. Name your service (e.g., "hostel_contact_service")
7. Note down the Service ID

## Step 3: Create an Email Template

1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Design your template with the following content:

Subject:
```
New contact message from {{from_name}} - {{subject}}
```

Content:
```
You have received a new message from the Military Boys Hostel website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save the template
5. Note down the Template ID

## Step 4: Update the Contact Form Code

1. Open `app/contact/page.tsx`
2. Update these values with your actual EmailJS credentials:
```javascript
const EMAILJS_SERVICE_ID = "service_replace_this" // Replace with your service ID
const EMAILJS_TEMPLATE_ID = "template_replace_this" // Replace with your template ID
const EMAILJS_PUBLIC_KEY = "public_key_replace_this" // Replace with your public key
```

3. Your public key can be found in your EmailJS dashboard under "Account" > "API Keys"

## Testing

After completing the setup, test the contact form by submitting a message. You should receive an email at `anurag.mbh@gmail.com` with the contact details.

The free tier of EmailJS allows 200 emails per month, which should be sufficient for your needs. 