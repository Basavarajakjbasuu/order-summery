import OrderSummery from "./components/order-summery";

const App = () => {
  return ( 
    <div
      className="
        font-red-hat-display
        bg-[#d6e1ff]
        h-screen
        flex
        items-center
        justify-center
      "
    >
      <OrderSummery />
    </div>
  );
}
 
export default App;