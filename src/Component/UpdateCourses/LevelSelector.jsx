import React from 'react';

export default function LevelSelector({ value, onChange }) {
    return (
        <select
            id="levels"
            name="level"
            className="bg-[#EFF4F8] border border-[#6CA6CD] text-black text-lg md:text-2xl rounded-lg block w-full max-w-6xl p-5 font-normal focus-visible:outline-none"
            onChange={(e) => onChange(e.target.value)}
            value={value}
        >
            <option value="0">المستويات</option>
            <option value="1">المستوى الأول</option>
            <option value="2">المستوى الثاني</option>
            <option value="3">المستوى الثالث</option>
            <option value="4">المستوى الرابع</option>
        </select>
    );
}
