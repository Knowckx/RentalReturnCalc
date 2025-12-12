import { PropertyCostCalculator } from './components/calculators/PropertyCostCalculator';
import { RentalIncomeCalculator } from './components/calculators/RentalIncomeCalculator';
import { YieldCalculator } from './components/calculators/YieldCalculator';
// import { Provider } from 'jotai'; // Jotai Provider is often optional for basic usage

function CalcApp() {
  return (
    // <Provider> // Provider is mainly for <DevTools /> or advanced use cases like useStore
    <div className="min-h-screen w-full bg-brand-purple flex flex-col items-center justify-start p-4 sm:p-8 sm:space-y-3">
      <header className="">
        <h1 className="text-2xl font-bold text-center">
        租金回报计算器
        </h1>
      </header>

      <main className="w-full flex flex-col items-center space-y-6">
        <PropertyCostCalculator />
        <RentalIncomeCalculator />
        <YieldCalculator />
      </main>

      <footer className="mt-auto py-4 text-center text-purple-200 text-sm">
        © {new Date().getFullYear()} 租金回报计算器. All rights reserved.
      </footer>
    </div>
    // </Provider>
  );
}

export default CalcApp;