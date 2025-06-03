import { PropertyCostCalculator } from './components/calculators/PropertyCostCalculator';
import { RentalIncomeCalculator } from './components/calculators/RentalIncomeCalculator';
import { YieldCalculator } from './components/calculators/YieldCalculator';
// import { Provider } from 'jotai'; // Jotai Provider is often optional for basic usage

function CalcApp() {
  return (
    // <Provider> // Provider is mainly for <DevTools /> or advanced use cases like useStore
    <div className="min-h-screen w-full bg-brand-purple flex flex-col items-center justify-start p-4 sm:p-8 space-y-6 sm:space-y-8">
      <header className="my-6 sm:my-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center shadow-sm">
          房产投资计算器
        </h1>
        <p className="text-center text-purple-100 mt-2">
          轻松计算您的房产投资回报
        </p>
      </header>

      <main className="w-full flex flex-col items-center space-y-6 sm:space-y-8">
        <PropertyCostCalculator />
        <RentalIncomeCalculator />
        <YieldCalculator />
      </main>

      <footer className="mt-auto py-4 text-center text-purple-200 text-sm">
        © {new Date().getFullYear()} 房产计算小助手. All rights reserved.
      </footer>
    </div>
    // </Provider>
  );
}

export default CalcApp;