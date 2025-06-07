export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s-()]+$/;
  return phoneRegex.test(phone);
};

export const validatePrice = (price: string): boolean => {
  const numPrice = Number(price);
  return !isNaN(numPrice) && numPrice > 0;
};

export const validateDate = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, "");

  // Format as +XXX XX XXX XXX for Tunisian numbers
  if (digits.length === 8) {
    return `+216 ${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(
      5
    )}`;
  }

  return phone;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/\s+/g, " ");
};
