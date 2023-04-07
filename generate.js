import { Configuration, OpenAIApi } from 'openai'
import * as RateLimiterFlexible from 'rate-limiter-flexible'

const opts = {
    points: 1000, 
    duration: 60 * 6, 
  };
  
  

  


      const basePromptPrefix = "Finish off this rap song about ";
      const generateAction = async (req, res) => {

         const configuration = new Configuration({
             apiKey: process.env.OPENAI_API_KEY,
           });
           
           const openai = new OpenAIApi(configuration);
           
           console.log(`API: ${basePromptPrefix}${req.body.userInput}`)
         console.log(`${basePromptPrefix}${req.body.userInput}:\n${req.body.userInput1}`)
     var baseCompletion
     try{
         baseCompletion = await openai.createCompletion({
         model: 'text-davinci-003',
         prompt: `${basePromptPrefix}${req.body.userInput}:\n${req.body.userInput1}`,
         temperature: 0.7,
         max_tokens: 150,
       })
     }catch{}
     
       const basePromptOutput = baseCompletion.data.choices.pop()
     
       res.status(200).json({ output: basePromptOutput });
    

     };
   
     export default generateAction
    