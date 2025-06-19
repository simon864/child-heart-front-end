import { API_BASE_URL } from "./config";

interface TreatmentRequest {
  childName: string;
  birthDate: string;
  diagnosis: string;
  parentName: string;
  phone: string;
}

export const createTreatmentRequest = async (requestData: TreatmentRequest) => {
  const response = await fetch(`${API_BASE_URL}/treatmentRequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      childName: requestData.childName,
      memberName: requestData.parentName,
      dateOfBirth: requestData.birthDate,
      diagnose: requestData.diagnosis,
      phone: requestData.phone,
      status: "consideration",
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка при создании заявки");
  }

  return response.json();
};
