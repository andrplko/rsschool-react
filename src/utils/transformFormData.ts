import { FieldValues } from 'react-hook-form';
import convertToBase64 from './convertToBase64';

const handleDataEntry = async (
  key: string,
  value: number | FormDataEntryValue | FileList,
  result: Record<string, string>
) => {
  if (key === 'picture') {
    if (value instanceof FileList) {
      const picture = await convertToBase64(value[0]);
      result[key] = picture;
    }
  } else if (typeof value === 'string' || typeof value === 'number') {
    result[key] = value.toString();
  }
};

export const transformFormData = async (data: FieldValues) => {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(data)) {
    await handleDataEntry(key, value, result);
  }

  return result;
};

export const transformUncontrolledFormData = (data: FormData) => {
  const result: Record<string, FormDataEntryValue> = {};

  for (const [key, value] of data.entries()) {
    result[key] = value;
  }

  return result;
};

export const transformDataWithConvertedPicture = async (data: FormData) => {
  const result: Record<string, string> = {};

  for (const [key, value] of data.entries()) {
    if (key === 'picture' && value instanceof File) {
      const picture = await convertToBase64(value);
      result[key] = picture;
    } else if (typeof value === 'string') result[key] = value;
  }

  return result;
};
