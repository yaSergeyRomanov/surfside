import { NextResponse } from "next/server";

interface FormData {
  firstName: string;
  tel: string;
  email: string;
  social?: string | string[];
  message?: string;
}

interface BitrixLeadFields {
  TITLE: string;
  NAME: string;
  PHONE: Array<{ VALUE: string; VALUE_TYPE: string }>;
  EMAIL: Array<{ VALUE: string; VALUE_TYPE: string }>;
  SOURCE_ID: string;
  SOURCE_DESCRIPTION: string;
  COMMENTS?: string;
  STATUS_ID: string; // NEW - новый лид
}

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();

    const WEBHOOK_URL =
      "https://surfside.bitrix24.ru/rest/5759/bi514tpt7bxw2vgl/";

    let comments = `Имя: ${formData.firstName}\nТелефон: ${formData.tel}\nEmail: ${formData.email || "не указан"}`;

    if (formData.social && formData.social.length > 0) {
      const socialValue = Array.isArray(formData.social)
        ? formData.social.join(", ")
        : formData.social;
      comments += `\nПредпочитаемый способ связи: ${socialValue}`;
    }

    if (formData.message && formData.message.trim() !== "") {
      comments += `\n\nСообщение от пользователя:\n${formData.message}`;
    }

    const leadFields: BitrixLeadFields = {
      TITLE: `Заявка с сайта от ${formData.firstName}`,
      NAME: formData.firstName,
      PHONE: [
        {
          VALUE: formData.tel,
          VALUE_TYPE: "WORK",
        },
      ],
      EMAIL: [
        {
          VALUE: formData.email,
          VALUE_TYPE: "WORK",
        },
      ],
      SOURCE_ID: "WEB_FORM",
      SOURCE_DESCRIPTION: "booking.surfsidebali.com",
      COMMENTS: comments,
      STATUS_ID: "IN_PROCESS",
    };

    const leadData = {
      fields: leadFields,
      // params: {
      //   REGISTER_SONET_EVENT: "N",
      // },
    };

    console.log("Sending lead to Bitrix:", JSON.stringify(leadData, null, 2));

    const response = await fetch(`${WEBHOOK_URL}crm.lead.add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const result = await response.json();

    console.log("Bitrix lead response:", result);

    if (result.error) {
      return NextResponse.json(
        { error: result.error_description || result.error },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      leadId: result.result,
    });
  } catch (error) {
    console.error("Bitrix API Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 },
    );
  }
}
