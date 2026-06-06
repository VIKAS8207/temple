// src/pages/Donation.jsx
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Donation() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    isAnonymous: false,
    sevaType: '',
    otherSeva: '',
    amount: ''
  });

  const sevaOptions = [
    { value: 'akhand_deep', label: t('donate.subDainik1', 'अखंड दीप सेवा') },
    { value: 'annadaan', label: t('donate.subDainik7', 'अन्नदान सेवा') },
    { value: 'abhishek', label: t('donate.subAbhishek1', 'अभिषेक पूजन') },
    { value: 'others', label: t('donate.others', 'अन्य (Others)') }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Donation Data:", formData);
    // Add your payment gateway logic here
  };

  return (
    <div className="min-h-screen bg-[#fcf9f5] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-stone-100 p-8 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-aparajita text-[#8B3A2B] text-center mb-8 font-bold">
          {t('donate.formTitle', 'दान एवं सेवा अर्पण')}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" placeholder={t('donate.name', 'पूरा नाम')} required
              className="w-full p-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="tel" placeholder={t('donate.phone', 'मोबाइल नंबर')} required
              className="w-full p-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          {/* Anonymous Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input 
              type="checkbox" className="w-5 h-5 accent-[#8B3A2B]"
              onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
            />
            <span className="text-stone-600 font-medium">{t('donate.anonymous', 'गुमनाम दान (Anonymous Donation)')}</span>
          </label>

          {/* Seva Dropdown */}
          <select 
            required
            className="w-full p-4 border border-stone-200 rounded-xl outline-none"
            onChange={(e) => setFormData({...formData, sevaType: e.target.value})}
          >
            <option value="">{t('donate.selectSeva', 'सेवा का प्रकार चुनें')}</option>
            {sevaOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
          </select>

          {/* Conditional "Other" Field */}
          {formData.sevaType === 'others' && (
            <input 
              type="text" placeholder={t('donate.specify', 'कृपया सेवा बताएं')} required
              className="w-full p-4 border border-amber-300 bg-amber-50 rounded-xl outline-none"
              onChange={(e) => setFormData({...formData, otherSeva: e.target.value})}
            />
          )}

          {/* Amount */}
          <input 
            type="number" placeholder={t('donate.amount', 'राशि (₹)')} required
            className="w-full p-4 border border-stone-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
            onChange={(e) => setFormData({...formData, amount: e.target.value})}
          />

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all">
            {t('donate.payNow', 'भुगतान करें (Pay Now)')}
          </button>
        </form>
      </div>
    </div>
  );
}