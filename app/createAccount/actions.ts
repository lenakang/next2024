"use server";

export const handleForm = async (prevState:any,formData: FormData) => {
  console.log(prevState)
  await new Promise((res) => setTimeout(res, 2000));
  console.log(formData);
};