const GROQ_API_KEY = "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";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT: ChatMessage = {
  role: "system",
  content: `You are NourishBot 🌿, a friendly and knowledgeable nutrition assistant for the NourishNote wellness blog. Your expertise includes:
- Healthy recipes and meal planning
- Nutritional information about foods and supplements
- Dietary advice for different lifestyles (vegan, keto, gluten-free, etc.)
- General wellness and healthy living tips

Guidelines:
- Keep responses concise but informative (2-4 paragraphs max)
- Use emojis sparingly to keep things friendly 🥗
- If asked about medical conditions, always recommend consulting a healthcare professional
- Be encouraging and positive about healthy eating choices
- Format responses with markdown when helpful (bold, lists, etc.)`,
};

export async function sendChatMessage(
  messages: ChatMessage[],
  onChunk?: (chunk: string) => void
): Promise<string> {
  const allMessages = [SYSTEM_PROMPT, ...messages];

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: allMessages,
      temperature: 0.7,
      max_tokens: 1024,
      stream: !!onChunk,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Groq API error: ${response.status} - ${error}`);
  }

  // Streaming mode
  if (onChunk && response.body) {
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullContent = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const text = decoder.decode(value, { stream: true });
      const lines = text.split("\n").filter((line) => line.trim() !== "");

      for (const line of lines) {
        if (line.startsWith("data: ")) {
          const data = line.slice(6);
          if (data === "[DONE]") continue;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              fullContent += content;
              onChunk(fullContent);
            }
          } catch {
            // Skip malformed JSON chunks
          }
        }
      }
    }

    return fullContent;
  }

  // Non-streaming mode
  const data = await response.json();
  return data.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response.";
}
