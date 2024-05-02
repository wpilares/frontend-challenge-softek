export const getAge = (dateOfBirth: string): string => {
  const dobParts = dateOfBirth.split('-').map(Number);
  const [dayOfBirth, monthOfBirth, yearOfBirth] = dobParts;

  const today = new Date();
  const birthDate = new Date(yearOfBirth, monthOfBirth - 1, dayOfBirth);

  let age = today.getFullYear() - birthDate.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  if (
    currentMonth < monthOfBirth ||
    (currentMonth === monthOfBirth && currentDay < dayOfBirth)
  ) {
    age--;
  }

  return age.toString();
};
