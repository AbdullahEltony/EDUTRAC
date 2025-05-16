import React from 'react';

export default function SemesterSelector({ value, onChange }) {
    return (
        <div className="flex gap-8 mt-8 flex-wrap">
            {[
                { label: 'الفصل الدراسي الاول (الخريفي)', value: '1', id: 'semester-1' },
                { label: 'الفصل الدراسي الثاني (الربيعي)', value: '2', id: 'semester-2' }
            ].map((sem) => (
                <div className="flex items-center" key={sem.value}>
                    <label htmlFor={sem.id} className="ms-2 text-lg sm:text-[24px] font-normal me-2 text-black">
                        {sem.label}
                    </label>
                    <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                        <input
                            id={sem.id}
                            type="radio"
                            name="semester"
                            value={sem.value}
                            className="w-5 h-5 text-[#6CA6CD]"
                            onChange={(e) => onChange(e.target.value)}
                            checked={value === sem.value}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
