import DateSelector from "../components/DateSelector";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "生日快樂";
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <div>
        <DateSelector />
      </div>
    </div>
  );
}

export default Home;
