import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Sparkles, Trash2 } from "lucide-react";
import { sendChatMessage, type ChatMessage } from "@/lib/groq";

interface DisplayMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

const SUGGESTIONS = [
  "🥗 Quick healthy lunch ideas?",
  "🍳 High protein breakfast?",
  "🥑 Benefits of avocados?",
  "🫐 Best foods for immunity?",
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Stop pulse animation after first open
  useEffect(() => {
    if (isOpen) setShowPulse(false);
  }, [isOpen]);

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: DisplayMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Create placeholder for assistant message
    const assistantId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      {
        id: assistantId,
        role: "assistant",
        content: "",
        timestamp: new Date(),
        isStreaming: true,
      },
    ]);

    try {
      // Build chat history for context
      const chatHistory: ChatMessage[] = [
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant",
          content: m.content,
        })),
        { role: "user" as const, content: messageText },
      ];

      await sendChatMessage(chatHistory, (streamedContent) => {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: streamedContent, isStreaming: true }
              : m
          )
        );
      });

      // Mark streaming as complete
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, isStreaming: false } : m
        )
      );
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  "Sorry, I'm having trouble connecting right now. Please try again in a moment! 🌿",
                isStreaming: false,
              }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  // Simple markdown-like rendering for bold and lists
  const renderContent = (content: string) => {
    if (!content) return null;

    return content.split("\n").map((line, i) => {
      // Process bold text
      const parts = line.split(/(\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} className="font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={j}>{part}</span>;
      });

      // Handle list items
      if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
        return (
          <div key={i} className="flex gap-1.5 ml-2">
            <span className="text-primary shrink-0">•</span>
            <span>{rendered}</span>
          </div>
        );
      }

      return (
        <p key={i} className={line.trim() === "" ? "h-2" : ""}>
          {rendered}
        </p>
      );
    });
  };

  return (
    <>
      {/* Chat Widget Button */}
      <button
        id="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-[9999]
          w-14 h-14 rounded-full
          flex items-center justify-center
          shadow-lg shadow-primary/25
          transition-all duration-300 ease-out
          hover:scale-110 hover:shadow-xl hover:shadow-primary/30
          active:scale-95
          ${
            isOpen
              ? "bg-card text-foreground rotate-0"
              : "bg-gradient-to-br from-primary to-emerald-600 text-white"
          }
        `}
        aria-label={isOpen ? "Close chat" : "Open nutrition assistant"}
      >
        {isOpen ? (
          <X className="w-5 h-5 transition-transform duration-200" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 transition-transform duration-200" />
            {showPulse && (
              <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
            )}
          </>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-24 right-6 z-[9998]
          w-[380px] max-w-[calc(100vw-2rem)]
          transition-all duration-300 ease-out origin-bottom-right
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-90 translate-y-4 pointer-events-none"
          }
        `}
      >
        <div className="rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden flex flex-col h-[520px]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/90 via-emerald-600/90 to-teal-600/90 px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold text-sm tracking-wide">
                NourishBot
              </h3>
              <p className="text-white/70 text-xs">
                Your nutrition assistant 🌿
              </p>
            </div>
            {messages.length > 0 && (
              <button
                onClick={clearChat}
                className="p-1.5 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Clear chat"
                title="Clear chat"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">
                  Hi there! 👋
                </h4>
                <p className="text-muted-foreground text-sm mb-5 max-w-[260px]">
                  I'm NourishBot — ask me anything about nutrition, healthy
                  recipes, or wellness tips!
                </p>
                <div className="grid grid-cols-2 gap-2 w-full">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSend(suggestion)}
                      className="text-xs text-left px-3 py-2.5 rounded-xl bg-secondary/60 text-secondary-foreground hover:bg-secondary transition-colors border border-border/40"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed
                      ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-primary to-emerald-600 text-white rounded-br-md"
                          : "bg-secondary/70 text-foreground rounded-bl-md border border-border/30"
                      }
                    `}
                  >
                    {msg.role === "assistant" && msg.isStreaming && !msg.content ? (
                      <div className="flex items-center gap-1.5 py-1">
                        <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:0ms]" />
                        <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:150ms]" />
                        <div className="w-2 h-2 rounded-full bg-primary/60 animate-bounce [animation-delay:300ms]" />
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {renderContent(msg.content)}
                      </div>
                    )}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border/40 bg-card/80 backdrop-blur-sm px-4 py-3">
            <div className="flex items-end gap-2">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about nutrition..."
                rows={1}
                className="
                  flex-1 resize-none
                  bg-secondary/50 text-foreground placeholder:text-muted-foreground
                  rounded-xl px-4 py-2.5 text-sm
                  border border-border/40 outline-none
                  focus:ring-2 focus:ring-primary/30 focus:border-primary/40
                  transition-all duration-200
                  max-h-24
                "
                style={{
                  height: "auto",
                  minHeight: "40px",
                }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = "auto";
                  target.style.height =
                    Math.min(target.scrollHeight, 96) + "px";
                }}
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className={`
                  w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                  transition-all duration-200
                  ${
                    input.trim() && !isLoading
                      ? "bg-gradient-to-br from-primary to-emerald-600 text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 active:scale-95"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }
                `}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-muted-foreground/60 text-center mt-2">
              Powered by Groq AI • Not medical advice
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
