const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyCBYM4nTKlABloyOdR2WZsH8lsyQtZ73PI');



export  const getMessage = async (prompt:string,textArea:string) =>{

      // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});


const textGenerete  = `${prompt} : ${textArea}`
  const result = await model.generateContent(textGenerete);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;

}
