const { createClient } = require("@supabase/supabase-js");
const supabaseUrl = "https://rjgkhjvxkvkcrqamlrns.supabase.co";
const supabaseKey = process.env.API_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const PhoneNumber = document.getElementById("PhoneNumber");
const Email = document.getElementById("Email");
const TextArea = document.getElementById("text-area");
const TextAreaErr = document.getElementById("TextAreaErr");
const FirstNameErr = document.getElementById("FirstNameErr");
const EmailErr = document.getElementById("EmailErr");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", async function () {
  if (FirstName.value == "") {
    FirstNameErr.innerText = "This is a required field";
  }
  if (Email.value == "") {
    EmailErr.innerText = "This is a required field";
  }
  if (TextArea.value == "") {
    TextAreaErr.innerText = "This is a required field";
  }
  if (FirstName.value && Email.value && TextArea.value) {
    // console.log(FirstName.value , LastName.value ,  Email.value , TextArea.value , PhoneNumber.value)
    const { data, error } = await supabase.from("contactus").insert([
      {
        "First Name": FirstName.value,
        Email: Email.value,
        "About Site": TextArea.value,
        "Last Name": LastName.value,
        "Phone Number": PhoneNumber.value,
      },
    ]);

    if (error) {
      console.error("Error inserting data:", error.message);
    } else {
      //console.log('Data inserted successfully:', data);
      //alert('Thank you for your submission!');
      // fetching the edge function url to send email to the entered mail address
      const res = fetch(
        "https://rjgkhjvxkvkcrqamlrns.supabase.co/functions/v1/resend",
        { mode: "no-cors" }
      );
    }
    FirstName.value = "";
    Email.value = "";
    LastName.value = "";
    PhoneNumber.value = "";
    TextArea.value = "";
    FirstNameErr.innerText = "";
    EmailErr.innerText = "";
    TextAreaErr.innerText = "";
  }
});
