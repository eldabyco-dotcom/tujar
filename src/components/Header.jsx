import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{ direction: 'rtl', padding: '10px', background: '#f8f8f8' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ textAlign: 'right' }}>توجّه إلى التسوق</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input type="text" placeholder="ابحث..." style={{ padding: '5px', marginRight: '10px' }} />
          <button style={{ padding: '5px' }}><FaSearch /></button>
        </div>
        <div>
          <a href="#" style={{ margin: '0 10px' }}>تسجيل الدخول</a>
          <a href="#">إنشاء حساب</a>
        </div>
      </div>
    </header>
  );
};

export default Header;