import React from 'react';

const Rewards = () => {
  return (
    <>
      <div className="min-h-screen bg-white">
        <header className="darkgreen text-white py-3 px-4 sm:py-4 sm:px-6">
          <h1 className="text-start ml-50 sm:text-lg font-medium tracking-wider">STARBUCKS® REWARDS</h1>
        </header>
        <section className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 beige flex items-center justify-center p-6 sm:p-8 lg:p-16 min-h-[400px] lg:min-h-[600px]">
                <div className="max-w-md w-full">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                        It's a great day for free coffee
                    </h2>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
                        Sign up and start enjoying the perks of Starbucks® Rewards.
                    </p>
                    <button className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all duration-300 mb-3 sm:mb-4 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Join now
                    </button>
                    <p className="text-sm text-gray-600">
                        It's even better{' '}
                        <span className="underline cursor-pointer hover:text-green-700 transition-colors duration-200">
                        with the app
                        </span>
                        .
                    </p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] relative overflow-hidden">
                <img src="rewards-hero.png" alt="Starbucks Coffee" className="w-full h-full object-cover object-center"/>
            </div>
        </section>
        <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Getting started is easy
                </h3>
                <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto">
                    Earn Stars and get rewarded in a few easy steps.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                    <div className="flex flex-col items-center">
                        <div className="size-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-2 border-green-800">
                            <span className="text-xl sm:text-2xl font-bold text-green-600">1</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">Create an account</h4>
                        <p className="text-gray-600 leading-relaxed max-w-sm text-sm sm:text-base px-4">
                            To get started, join now. You can also join in the Starbucks® app to access all features.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="size-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-2 border-green-800">
                            <span className="text-xl sm:text-2xl font-bold text-green-600">2</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                            Order and pay how you'd like
                        </h4>
                        <p className="text-gray-600 leading-relaxed max-w-sm text-sm sm:text-base px-4">
                            Use cash, credit/debit card or save some time and money by adding funds to your digital Starbucks Card in the app.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="size-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 border-2 border-green-800">
                            <span className="text-xl sm:text-2xl font-bold text-green-600">3</span>
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
                            Earn Stars, get Rewards
                        </h4>
                        <p className="text-gray-600 leading-relaxed max-w-sm text-sm sm:text-base px-4">
                            As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-gradient-to-r from-green-50 to-green-100 py-12 sm:py-16 px-4 sm:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
                    Ready to start earning?
                </h3>
                <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Join Starbucks® Rewards today and start collecting Stars with every purchase.
                </p>
                <button className="w-full sm:w-auto bg-green-700 hover:bg-green-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Join now
                </button>
            </div>
        </section>
      </div>
    </>
  );
};

export default Rewards;