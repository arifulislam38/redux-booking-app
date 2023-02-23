import { Provider } from "react-redux";
import "./App.css";
import BookingTable from "./components/BookingTable/BookingTable";
import BookSection from "./components/BookSection/BookSection";
import Header from "./components/Header/Header";
import "./components/Style/style.css";
import store from "./Redux/Store/Store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header></Header>
        <BookSection></BookSection>
        <BookingTable></BookingTable>
      </Provider>
    </div>
  );
}

export default App;
