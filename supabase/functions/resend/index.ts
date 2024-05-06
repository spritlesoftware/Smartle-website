// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
const supabaseUrl = Deno.env.get('API_URL');
const supabaseKey = Deno.env.get('API_ANON_KEY');

const supabase = createClient(supabaseUrl, supabaseKey);
const  POSTMARK_API_KEY = Deno.env.get('POSTMARK_API_KEY')
async function fetchLastEnteredData() {
  try {
    const { data, error } = await supabase
      .from('contactus')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      return data[0].Email
      // Do something with the last entered data
     
    } else {
      console.log('No data found in the table');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

const handler = async (_request: Request): Promise<Response> => {
 const email =  await fetchLastEnteredData()
  console.log("TOEMAIL" ,email)
  const res = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${POSTMARK_API_KEY}`,
      "X-Postmark-Server-Token": `${POSTMARK_API_KEY}` 
    },
    body: JSON.stringify({
      "From": "prabhu.m@spritle.com",
      "To": email,
      "Cc": "prabhu.m@spritle.com",
      "Bcc": "prabakaran.m@spritle.com",
      "Subject": "Thanks for contacting us!",
      "HtmlBody": "Thank you for reaching out to us, We appreciate your interest. We will get back to you shortly!",
    })
  })

  const data = await res.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}


Deno.serve(handler)
