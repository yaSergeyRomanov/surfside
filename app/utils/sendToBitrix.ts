interface FormData {
  firstName: string;
  tel: string;
  email: string;
  social?: string | string[];
}

interface BitrixResponse {
  success: boolean;
  contactId?: number;
  error?: string;
}

export const sendToBitrix = async (
  formData: FormData,
): Promise<BitrixResponse> => {
  try {
    const response = await fetch("/bitrix-proxy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Ошибка отправки");
    }

    return result;
  } catch (error) {
    console.error("Ошибка отправки:", error);
    throw error;
  }
};
