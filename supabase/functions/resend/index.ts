// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
const supabaseUrl = Deno.env.get('API_URL');
const supabaseKey = Deno.env.get('API_ANON_KEY');

const supabase = createClient(supabaseUrl, supabaseKey);
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
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
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'onboarding@resend.dev',
      to: [email],
      cc:['janani.g@spritle.com'],
      subject: 'Thanks for signing up',
      html: '<strong>Thanks for contacting us!</strong>',
    }),
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







/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/resend' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
