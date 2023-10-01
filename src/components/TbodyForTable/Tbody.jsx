import "./Tbody.css";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Tbody = ({ onData }) => {
  console.log(onData);
  return (
    <tbody>
      {onData.map((tdElement, index) => (
        <tr key={index}>
          <td>{tdElement.year}</td>
          <td>{formatter.format(tdElement.savingsEndOfYear)}</td>
          <td>{formatter.format(tdElement.yearlyInterest)}</td>
          <td>
            {formatter.format(
              tdElement.savingsEndOfYear -
                tdElement.initialInvestment -
                tdElement.yearlyContribution * tdElement.year
            )}
          </td>
          <td>
            {formatter.format(
              tdElement.initialInvestment +
                tdElement.yearlyContribution * tdElement.year
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default Tbody;
