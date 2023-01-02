function TableBlog({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>S.N</th>
          <th>Subject</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Drawing</td>
          <td>Lately, i'm more into scribble art and i'm so enjoying it!</td>
          <td>20/11/2022</td>
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

export default TableBlog;
