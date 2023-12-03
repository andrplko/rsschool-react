import convertToBase64 from './convertToBase64';

const transformFormData = async (data: FormData) => {
  const result: Record<string, string> = {};

  for (const [key, value] of data.entries()) {
    if (key === 'picture' && value instanceof File) {
      const picture = await convertToBase64(value);
      result[key] = picture;
    } else if (typeof value === 'string') {
      result[key] = value;
    }
  }

  return result;
};

export default transformFormData;
