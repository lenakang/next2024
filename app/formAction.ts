"use server";

export const handleForm = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (formData.get("name") === "hello") {
    console.log(true);
  } else {
    console.log(prevState)
    return ["invalid name"];
  }
};