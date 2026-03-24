import React from 'react';
import Link from 'next/link';

export default function SupplierSection() {
  return (
    <section className="py-16 bg-gradient-to-l from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center" dir="rtl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          هل أنت مصنع أو مورد؟
        </h2>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          سجل كمصنع واعرض منتجاتك لآلاف التجار
        </p>
        <Link
          href="/supplier-register"
          className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-200"
        >
          سجل كمورد الآن
        </Link>
      </div>
    </section>
  );
}