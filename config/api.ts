export const API_ENDPOINTS = {
  INQUIRIES: "/api/inquiries",
} as const;

export const getInquiriesUrl = (): string => {
  return API_ENDPOINTS.INQUIRIES;
};
