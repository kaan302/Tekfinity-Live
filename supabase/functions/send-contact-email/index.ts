import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  type: "contact" | "project";
  projectDetails?: {
    budget?: string;
    timeline?: string;
    services?: string[];
    description?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received contact form submission:", { name: data.name, email: data.email, type: data.type });

    let htmlContent = "";
    let subjectLine = "";

    if (data.type === "project") {
      subjectLine = `Nieuw Project Aanvraag: ${data.name}`;
      htmlContent = `
        <h1>Nieuwe Project Aanvraag</h1>
        <h2>Contactgegevens</h2>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        
        <h2>Project Details</h2>
        <p><strong>Budget:</strong> ${data.projectDetails?.budget || "Niet opgegeven"}</p>
        <p><strong>Timeline:</strong> ${data.projectDetails?.timeline || "Niet opgegeven"}</p>
        <p><strong>Gewenste Services:</strong> ${data.projectDetails?.services?.join(", ") || "Niet opgegeven"}</p>
        
        <h2>Project Beschrijving</h2>
        <p>${data.projectDetails?.description || data.message}</p>
      `;
    } else {
      subjectLine = `Contact Formulier: ${data.subject}`;
      htmlContent = `
        <h1>Nieuw Contact Bericht</h1>
        <p><strong>Naam:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Onderwerp:</strong> ${data.subject}</p>
        <h2>Bericht</h2>
        <p>${data.message}</p>
      `;
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Tekfinity <onboarding@resend.dev>",
        to: ["info@tekfinity.nl"],
        subject: subjectLine,
        html: htmlContent,
        reply_to: data.email,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    const emailResponse = await res.json();
    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, id: emailResponse.id }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
