import CategoryButton from '../components/categories/CategoryCard';
import { FaPizzaSlice, FaMobile, FaGlassCheers, FaRegFutbol, FaShoppingCart } from 'react-icons/fa';
import { BsBagFill } from 'react-icons/bs';


function App() { 
  return (
    <>
      <div style={{ 
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)", // 2 items per row
        gap: "40px", // Space between items
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        padding: "20px",
        marginTop: "20px", 
        boxSizing: "border-box",
        }}
      >
      <div style={{ textAlign: "center" }}>
        <CategoryButton
          icon={<FaPizzaSlice color="white" size={35} />}
          onClick={() => alert("Pizza button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Food
        </p>
      </div>
      <div style={{ textAlign: "center" }}>  
        <CategoryButton
          icon={<BsBagFill color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Shopping
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <CategoryButton
          icon={<FaShoppingCart color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Grocery
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <CategoryButton
          icon={<FaMobile color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Electronics
        </p>
      </div>
      <div>
        <CategoryButton
          icon={<FaGlassCheers color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Events
        </p>
      </div>
      <div>
        <CategoryButton
          icon={<FaRegFutbol color="white" size={35} />}
          onClick={() => alert("Apple button clicked!")}
          backgroundColor="#ff7043"
        />
        <p style={{ marginTop: "10px", fontSize: "14px", color: "#524243" }}>
          Sports
        </p>
      </div>
      </div>
    </>
  );
}

export default App;