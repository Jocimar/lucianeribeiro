
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getGeminiResponse = async (userPrompt: string) => {
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  const systemInstruction = `
    Você é a assistente virtual da Arquiteta Luciane Ribeiro. Você deve falar SEMPRE em nome dela, usando a primeira pessoa ("Eu faço", "Meu atendimento", "Minha consultoria").
    
    A Luciane é especialista em regularização de imóveis em Garça, SP.
    Ajude os clientes com dúvidas sobre:
    1. Regularização de imóveis (Eu trago segurança para seu patrimônio).
    2. Como obter o Habite-se em Garça (Eu cuido de todo o processo técnico).
    3. Desdobro e unificação de lotes (Eu realizo os projetos e aprovações).
    4. Importância da escritura e registro (Eu protejo sua família através da legalidade).
    
    Estilo: Profissional, acolhedor, direto e SEMPRE em primeira pessoa.
    Call to action: Sempre sugira que a pessoa peça uma análise técnica preenchendo o formulário ou clicando no botão de WhatsApp para falar diretamente com a Luciane.
    Localização: Garça - SP e região.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, tive um problema ao processar sua pergunta. Por favor, tente novamente ou fale comigo diretamente pelo WhatsApp.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro na conexão. Por favor, tente falar diretamente comigo pelo WhatsApp para que eu possa te atender.";
  }
};
