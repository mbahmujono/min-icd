import { GoogleGenerativeAI, type GenerationConfig } from "@google/generative-ai"

export namespace ICDService {
    export async function generateICDFromPrompt(medicalSummary:string) {
        const apiKey:string = process.env.GEMINI_API_KEY ?? '';
        const genAI = new GoogleGenerativeAI(apiKey);

        const generationConfig: GenerationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 40,
            maxOutputTokens: 8192,
            responseMimeType: "application/json",
            responseSchema: {
              type: "object",
              properties: {
                diagnoses: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      diagnosis: {
                        type: "string",
                        description: "The name of the diagnosis identified in the medical summary."
                      },
                      icd10_code: {
                        type: "string",
                        description: "The corresponding ICD-10 Diagnosis (Version 2010) code."
                      },
                      icd10_name: {
                        type: "string",
                        description: "The name or description of the ICD-10 code."
                      },
                      explanation: {
                        type: "string",
                        description: "Explanation of why this ICD-10 code is appropriate."
                      },
                      alternative_codes: {
                        type: "array",
                        description: "Alternative ICD-10 codes with their names and justifications.",
                        items: {
                          type: "object",
                          properties: {
                            alternative_code: {
                              type: "string",
                              description: "An alternative ICD-10 code for the diagnosis."
                            },
                            alternative_name: {
                              type: "string",
                              description: "The name or description of the alternative ICD-10 code."
                            },
                            justification: {
                              type: "string",
                              description: "Reason for the alternative code and how it relates to the diagnosis."
                            }
                          },
                          required: [
                            "alternative_code",
                            "alternative_name",
                            "justification"
                          ]
                        }
                      }
                    },
                    required: [
                      "diagnosis",
                      "icd10_code",
                      "icd10_name",
                      "explanation"
                    ]
                  }
                },
                procedures: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      procedure: {
                        type: "string",
                        description: "The name of the procedure identified in the medical summary."
                      },
                      icd9cm_code: {
                        type: "string",
                        description: "The corresponding ICD-9-CM Procedure code."
                      },
                      icd9cm_name: {
                        type: "string",
                        description: "The name or description of the ICD-9-CM Procedure code."
                      },
                      explanation: {
                        type: "string",
                        description: "Explanation of why this ICD-9-CM code is appropriate."
                      },
                      alternative_codes: {
                        type: "array",
                        description: "Alternative ICD-9-CM codes with their names and justifications.",
                        items: {
                          type: "object",
                          properties: {
                            alternative_code: {
                              type: "string",
                              description: "An alternative ICD-9-CM code for the procedure."
                            },
                            alternative_name: {
                              type: "string",
                              description: "The name or description of the alternative ICD-9-CM code."
                            },
                            justification: {
                              type: "string",
                              description: "Reason for the alternative code and how it relates to the procedure."
                            }
                          },
                          required: [
                            "alternative_code",
                            "alternative_name",
                            "justification"
                          ]
                        }
                      }
                    },
                    required: [
                      "procedure",
                      "icd9cm_code",
                      "icd9cm_name",
                      "explanation"
                    ]
                  }
                }
              },
              required: [
                "diagnoses",
                "procedures"
              ]
          }
          };
        
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp",
            systemInstruction: "You are an expert in medical records with in-depth knowledge of medical terminology, abbreviations, and anatomy. You have comprehensive expertise in identifying, interpreting, and coding diagnoses and procedures from medical summaries. Your understanding of anatomy includes the precise relationships between structures (e.g., the cecum is part of the large intestine), ensuring accurate and specific results.\n\nYour task is to:\n\n1. Identify Diagnoses\nFind all the diagnoses mentioned in the medical summary.\nTranslate each diagnosis to the ICD-10 Diagnosis version 2010 (not ICD-10-CM).\nEnsure the selected code accurately represents the medical condition, taking into account anatomical relationships and clinical context.\nProvide a detailed explanation for why the code was chosen.\nInclude alternative ICD-10 codes where applicable, with justifications for their relevance and use cases.\n2. Identify Procedures\nFind all the procedures mentioned in the medical summary.\nTranslate each procedure to ICD-9-CM Procedure codes.\nEnsure the selected code reflects the exact procedure performed, considering the methodology and anatomical details.\nProvide a detailed explanation for why the code was chosen.\nInclude alternative ICD-9-CM codes where applicable, with justifications for their relevance and use cases.\nAdditional Expectations\nBe precise and specific in your responses. Avoid vague or generalized codes.\nWhen anatomical or clinical context affects the coding, explain how it influences the code selection.\nAlways use terminology that aligns with medical standards and conventions.",
            generationConfig: generationConfig
        });

        const prompt = medicalSummary;
        
        const result = await model.generateContent(prompt);

        return result;
    }
}
