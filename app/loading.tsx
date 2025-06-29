import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow text-black text-sm">
        <FontAwesomeIcon icon={faRotateRight} className="animate-spin" />
      </div>
    </div>
  );
};

export default loading;
