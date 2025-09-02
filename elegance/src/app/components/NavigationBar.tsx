import React from 'react';

export default function NavigationBar() {
  return (
    <nav>
      <ul  dir="rtl"
        className="bg-amber-100 flex flex-row justify-end items-center gap-5 p-5 shadow-2xl shadow-amber-100">

        <li>
          <a href="" className="text-lg font-bold">
            LOGO
          </a>
        </li>

        {/* Spacer between logo and buttons */}
        <li className="flex-grow" />

        {/* Navigation Buttons */}
        <li className="p-2 bg-amber-300 w-[6rem] flex justify-center items-center rounded">
          <a href="">درباره ما</a>
        </li>

        <li className="p-2 bg-amber-300 w-[6rem] flex justify-center items-center rounded">
          <a href="">ارتباط با ما</a>
        </li>

        <li className="p-2 bg-amber-300 w-[4rem] flex justify-center items-center rounded">
          <a href="">وبلاگ</a>
        </li>

        {/* Cart Button with Icon */}
        <li className="p-2 bg-amber-300 w-[6rem] flex justify-center items-center rounded">
          <a href="" className="flex items-center gap-1 whitespace-nowrap">
            <img src="/icons/cart.svg" alt="Cart" className="w-4 h-4" />
            سبد خرید
          </a>
        </li>
      </ul>
    </nav>
  );
}
