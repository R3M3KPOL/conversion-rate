import "./Table.css";
import Thead from "../TheadForTable/Thead";
import Tbody from "../TbodyForTable/Tbody";

const Table = ({dataResult}) => {

  return (
    <table className="result">
      <Thead></Thead>
      <Tbody onData = {dataResult}></Tbody>
    </table>
  );
};

export default Table;
