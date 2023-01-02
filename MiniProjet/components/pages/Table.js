function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Phone Number</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Kawther</td>
          <td>Kawther@gmail.com</td>
          <td>0631857754</td>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data, index) => {
          return (
            <tr key={index}>
              <td>{index + 2}</td>
              <td>{data.fullName}</td>
              <td>{data.emailAddress}</td>
              <td>{data.salary}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
