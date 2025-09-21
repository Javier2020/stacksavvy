import React from 'react';
import Navbar from './components/Navbar';
import StackingCalculator from './features/StackingCalculator';
import ReceiptScanner from './features/ReceiptScanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section>
          <h1>Welcome to StackSavvy</h1>
          <p>Link your accounts, scan receipts, and stack coupons like a pro.</p>
        </section>
        <StackingCalculator />
        <ReceiptScanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;



