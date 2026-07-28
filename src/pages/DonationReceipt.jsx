// src/pages/DonationReceipt.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { jsPDF } from 'jspdf'; 
import html2canvas from 'html2canvas';

export default function DonationReceipt() {
  const { t } = useTranslation();
  const location = useLocation();
  const receiptData = location.state;
  
  const [isDownloading, setIsDownloading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!receiptData) {
    return <Navigate to="/donation" replace />;
  }

  // Determine if this is a "Book Seva" action or a "Donation" action
  const isBooking = receiptData.actionType === 'book';
  
  // Handle both ID types depending on which page routed here
  const idToDisplay = receiptData.transactionId || receiptData.donationId;

  const showToast = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 4000); 
  };

  const downloadPDF = async () => {
    setIsDownloading(true);
    setNotification({ show: false, message: '', type: '' }); 

    try {
      const receiptElement = document.getElementById('donation-receipt-container');
      
      const canvas = await html2canvas(receiptElement, { 
        scale: 2, 
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      
      // Dynamic File Name
      const fileNameType = isBooking ? 'Booking_Receipt' : 'Donation_Receipt';
      pdf.save(`${idToDisplay}_${fileNameType}.pdf`);

      showToast(t('luckyNew.pdfSuccess', 'रसीद सफलतापूर्वक डाउनलोड हो गई!'), 'success');

    } catch (error) {
      console.error("Error generating PDF:", error);
      showToast(t('luckyNew.pdfError', 'PDF जनरेट करने में विफल। कृपया पुनः प्रयास करें।'), 'error');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcf9f5] py-12 sm:py-16 px-4 flex flex-col items-center relative overflow-hidden">
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* TOAST NOTIFICATION */}
      {notification.show && (
        <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[200] px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-[fadeInDown_0.3s_ease-out] border-2 backdrop-blur-md
          ${notification.type === 'success' 
            ? 'bg-green-50/95 border-green-200 text-green-800' 
            : 'bg-red-50/95 border-red-200 text-red-800'
          }`}
        >
          {notification.type === 'success' ? (
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
          ) : (
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          )}
          <span className="font-bold text-sm sm:text-base">{notification.message}</span>
        </div>
      )}

      {/* =========================================
          THE RECEIPT CONTAINER
      ========================================= */}
      <div 
        id="donation-receipt-container" 
        className="w-full max-w-2xl bg-white shadow-2xl relative overflow-hidden mb-8 z-10 border-[12px] border-[#f4ece1]"
      >
        <div className="border border-stone-300 m-2 p-6 sm:p-12 relative bg-white">
          
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
            <svg width="300" height="300" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 30c0-16.57 13.43-30 30-30v60c-16.57 0-30-13.43-30-30zM0 30c0 16.57 13.43 30 30 30V0C13.43 0 0 13.43 0 30z" fill="#8B3A2B" fillRule="evenodd"/>
            </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 opacity-10 pointer-events-none z-0 select-none">
            {/* Dynamic Watermark */}
            <span className="text-[90px] md:text-[120px] font-black text-green-600 uppercase tracking-widest border-8 border-green-600 p-4 rounded-xl">
              {isBooking ? 'BOOKING' : 'DONATION'}
            </span>
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 pb-6 border-b-2 border-stone-800">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl border border-amber-300">
                ॐ
              </div>
              <h1 className="text-3xl sm:text-4xl font-rozha text-[#8B3A2B] mb-2 uppercase tracking-wide">
                {/* Dynamic Title */}
                {isBooking ? t('donate.bookingReceiptTitle', 'बुकिंग रसीद') : t('donate.receiptTitle', 'दान रसीद')}
              </h1>
              <p className="text-stone-600 font-medium tracking-widest uppercase text-xs mb-2">
                Shri Badi Mata Mandir Trust
              </p>
              <p className="text-sm font-medium text-stone-500 italic bg-amber-50 inline-block px-4 py-1 rounded-full border border-amber-200">
                {/* Dynamic Thank You Note */}
                {isBooking 
                  ? t('donate.bookingThanks', 'माँ की सेवा में सहभागी बनने के लिए धन्यवाद!')
                  : t('donate.receiptThanks', 'मंदिर निर्माण में आपके अमूल्य सहयोग के लिए धन्यवाद!')}
              </p>
            </div>

            {/* Receipt Metadata (ID & Date) */}
            <div className="flex justify-between items-center bg-stone-50 border border-stone-200 py-3 px-6 rounded mb-8">
              <div>
                <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">
                  {/* Dynamic ID Label */}
                  {isBooking ? t('donate.bookingId', 'बुकिंग आईडी') : t('donate.receiptId', 'दान आईडी')}
                </p>
                <p className="font-mono text-lg font-bold text-stone-800 tracking-wider">
                  {idToDisplay}
                </p>
              </div>
              <div className="text-right">
                <p className="text-stone-400 text-[10px] font-bold uppercase tracking-widest mb-0.5">{t('donate.receiptDate', 'दिनांक')}</p>
                <p className="font-bold text-stone-800">{receiptData.date}</p>
              </div>
            </div>

            {/* Categories Supported */}
            <div className="mb-8 p-4 bg-amber-50/50 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-[10px] font-bold uppercase tracking-widest mb-1">{t('donate.categoriesSupported', 'सहयोग श्रेणियां')}</p>
              <p className="font-bold text-amber-900 text-base leading-relaxed">{receiptData.causesList}</p>
            </div>

            {/* User Details Grid - CONDITIONAL RENDERING FOR ANONYMOUS */}
            <div className="border border-stone-200 rounded overflow-hidden">
              {receiptData.isAnonymous ? (
                <div className="p-8 bg-stone-50 text-center flex flex-col items-center justify-center">
                  <svg className="w-12 h-12 text-stone-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                  <h3 className="text-stone-700 font-bold text-xl uppercase tracking-widest mb-2">
                    {/* Dynamic Anonymous Label */}
                    {isBooking ? t('donate.anonymousSevak', 'गुमनाम सेवक') : t('donate.anonymousDonor', 'गुमनाम दानदाता')}
                  </h3>
                  <p className="text-stone-500 text-sm">
                    {/* Dynamic Anonymous Message */}
                    {isBooking 
                      ? t('donate.anonymousSevakMsg', 'सेवक ने अपनी पहचान गुप्त रखने का विकल्प चुना है।') 
                      : t('donate.anonymousMsg', 'दानदाता ने अपनी पहचान गुप्त रखने का विकल्प चुना है।')}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 border-b border-stone-200">
                    <div className="p-4 bg-white">
                      <p className="text-stone-400 text-[10px] font-bold uppercase tracking-wider mb-1">{t('luckyNew.receiptName', 'नाम')}</p>
                      <p className="font-bold text-stone-800 text-base">{receiptData.name}</p>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-stone-400 text-[10px] font-bold uppercase tracking-wider mb-1">{t('luckyNew.receiptPhone', 'मोबाइल नंबर')}</p>
                      <p className="font-bold text-stone-800 text-base">{receiptData.phone}</p>
                    </div>
                  </div>
                  <div className="p-4 border-b border-stone-200 bg-stone-50/50">
                    <p className="text-stone-400 text-[10px] font-bold uppercase tracking-wider mb-1">{t('luckyNew.receiptEmail', 'ईमेल')}</p>
                    <p className="font-bold text-stone-800 text-base">{receiptData.email}</p>
                  </div>
                  <div className="p-4 bg-white">
                    <p className="text-stone-400 text-[10px] font-bold uppercase tracking-wider mb-1">{t('donate.addressPlaceholder', 'पता')}</p>
                    <p className="font-medium text-stone-700 text-sm leading-relaxed">{receiptData.address}</p>
                  </div>
                </>
              )}
            </div>

            {/* Total Amount Paid */}
            <div className="flex justify-between items-end border-t-2 border-stone-800 pt-6 mt-8">
              <div>
                <p className="text-stone-800 text-sm font-bold uppercase tracking-widest mb-1">{t('luckyNew.receiptAmount', 'जमा राशि')}</p>
                <p className="text-stone-500 text-xs italic">Received with thanks</p>
              </div>
              <p className="text-4xl font-black text-[#8B3A2B]">₹{receiptData.amount}</p>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================
          ACTION BUTTONS
      ========================================= */}
      <div className="flex flex-col sm:flex-row gap-4 relative z-10 w-full max-w-2xl">
        <button 
          onClick={downloadPDF}
          disabled={isDownloading}
          className={`flex-1 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
            isDownloading 
              ? 'bg-stone-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-orange-600 to-[#8B3A2B] hover:shadow-orange-900/40 hover:-translate-y-1'
          }`}
        >
          {isDownloading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              {t('luckyNew.downloadBtn', 'PDF रसीद डाउनलोड करें')}
            </>
          )}
        </button>

        <Link 
          to="/"
          className="flex-1 bg-white text-stone-600 font-bold py-4 rounded-xl shadow-md border border-stone-200 hover:bg-stone-50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          {t('luckyNew.backToHome', 'मुख्य पृष्ठ पर लौटें')}
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}} />

    </div>
  );
}