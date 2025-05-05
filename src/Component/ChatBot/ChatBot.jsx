import React, { useRef, useState } from 'react'
import { Client } from "@gradio/client";
import { NavMenu } from '../NavMenu';
import ProgressBar from '../shared/ProgressBar';

import './ChatBot.css'

export default function ChatBot() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const textAreaRef = useRef(null);


    function linkify(text) {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        return text.replace(
            urlRegex,
            (url) =>
                `<a href="${url}" target="_blank" class="text-blue-600 underline hover:text-blue-800">${url}</a>`
        ).replace(/\n/g, "<br>");
    }

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto";
        }

        try {
            setLoading(true);
            const client = await Client.connect("ziadziad/Agentic_Academic_Advisor");
            const result = await client.predict("/predict", { question: input, });
            const parser = new DOMParser();
            const doc = parser.parseFromString(result.data, "text/html");
            const cleanText = doc.body.textContent || "";
            setMessages((prev) => [
                ...prev,
                { text: cleanText, sender: "bot" },]);
        } catch (error) {
            console.error("Error sending to chatbot:", error);
            setMessages((prev) => [...prev, { sender: "bot", text: "حدث خطأ أثناء الاتصال بالمساعد." }]);
        } finally {
            setLoading(false);
        }
    };



    return <>
        <div className='w-full flex flex-row'>
            <NavMenu />
            <div className='w-full'>
                <ProgressBar />
                <div className="flex flex-col min-h-64 justify-center bg-gray-100 mx-auto pt-16 py-8 px-4" dir="rtl">
                    <div className="w-full bg-white rounded-2xl shadow-lg flex flex-col">
                        <div className="p-4 bg-blue-500 text-white font-bold text-lg flex items-center justify-center gap-2 shadow-md">
                            <i className="text-2xl fas fa-robot" />
                            <span>المساعد الذكي</span>
                        </div>
                        <div className="flex-1 overflow-y-auto py-12 px-6 space-y-2 bg-gray-50 flex flex-col items-start">
                            {messages.map((msg, index) => (
                                msg.sender === "bot" ? (
                                    <div
                                        key={index}
                                        className="p-3 rounded-xl max-w-xs text-sm shadow-sm whitespace-pre-line bg-gray-200 self-start text-right"
                                        dangerouslySetInnerHTML={{ __html: linkify(msg.text) }}
                                    />
                                ) : (
                                    <div
                                        key={index}
                                        className="p-3 rounded-xl max-w-xs text-sm shadow-sm whitespace-pre-line bg-blue-100 self-end text-right"
                                    >
                                        {msg.text}
                                    </div>
                                )
                            ))}

                            {/* Typing animation only when loading is true */}
                            {loading && (
                                <div className="typing-indicator self-start ml-4 mt-2">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            )}

                        </div>

                        <div className="p-4 border-t flex gap-2 items-start">
                            <textarea
                                ref={textAreaRef}
                                rows={1}
                                className="flex-1 border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none overflow-hidden"
                                placeholder="اكتب رسالتك..."
                                value={input}
                                onChange={(e) => {
                                    setInput(e.target.value);
                                    e.target.style.height = "auto";
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" && !e.shiftKey) {
                                        e.preventDefault();
                                        sendMessage();
                                    }
                                }}
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-blue-500 text-white px-4 py-2 text-sm rounded-xl hover:bg-blue-600 transition"
                            >
                                إرسال
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


}
