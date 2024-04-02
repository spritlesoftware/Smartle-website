import { createClient} from '@supabase/supabase-js';

const supabaseUrl: string = 'https://rjgkhjvxkvkcrqamlrns.supabase.co';
const supabaseKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJqZ2toanZ4a3ZrY3JxYW1scm5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NzI4MDQsImV4cCI6MjAyNzU0ODgwNH0.6gjvj2IYDuvvaCV0UDwZkVg51LJ7rvLx-CKT-ROpNqk";

const supabase= createClient(supabaseUrl, supabaseKey);


const FirstName: HTMLInputElement | null = document.getElementById("FirstName") as HTMLInputElement;
const LastName: HTMLInputElement | null = document.getElementById("LastName") as HTMLInputElement;
const PhoneNumber: HTMLInputElement | null = document.getElementById("PhoneNumber") as HTMLInputElement;
const Email: HTMLInputElement | null = document.getElementById("Email") as HTMLInputElement;
const TextArea: HTMLTextAreaElement | null = document.getElementById("text-area") as HTMLTextAreaElement;

const TextAreaErr: HTMLElement | null = document.getElementById("TextAreaErr");
const FirstNameErr: HTMLElement | null = document.getElementById("FirstNameErr");
const EmailErr: HTMLElement | null = document.getElementById("EmailErr");
const submitBtn: HTMLElement | null = document.getElementById("submit");

if (submitBtn) {
  submitBtn.addEventListener("click", async function () {
    if (!FirstName || FirstName.value === "") {
      if (FirstNameErr) FirstNameErr.innerText = "This is a required field";
    }
    if (!Email || Email.value === "") {
      if (EmailErr) EmailErr.innerText = "This is a required field";
    }
    if (!TextArea || TextArea.value === "") {
      if (TextAreaErr) TextAreaErr.innerText = "This is a required field";
    }
    if (FirstName && Email && TextArea && FirstName.value && Email.value && TextArea.value) {
      console.log(FirstName.value, LastName?.value, Email.value, TextArea.value, PhoneNumber?.value);

      const { data, error } = await supabase.from('contactus').insert([
        {
          "First Name": FirstName.value,
          "Email": Email.value,
          "About Site": TextArea.value,
          "Last Name": LastName?.value,
          "Phone Number": PhoneNumber?.value,
        }
      ]);

      if (error) {
        console.error('Error inserting data:', error.message);
      } else {
        console.log('Data inserted successfully:', data);
        const RESEND_API_KEY: string = "re_YzzZKmbw_DegD4LfFVf8UGqHuQKvTUoXr";
        const handler = async function (_req: Request): Promise<Response> {
          const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
              from: 'Acme <onboarding@resend.dev>',
              to: ['janani.g@spritle.com'],
              subject: 'hello world',
              html: '<strong>it works!</strong>',
            })
          });

          const responseData = await res.json();

          return new Response(JSON.stringify(responseData), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
            },
          });
        };
        // Assuming serve is a function that serves the handler
        //serve(handler)
      };

      if (FirstName) FirstName.value = "";
      if (Email) Email.value = "";
      if (LastName) LastName.value = "";
      if (PhoneNumber) PhoneNumber.value = "";
      if (TextArea) TextArea.value = "";
      if (FirstNameErr) FirstNameErr.innerText = "";
      if (EmailErr) EmailErr.innerText = "";
      if (TextAreaErr) TextAreaErr.innerText = "";
    };
  });
};
