import React from "react";
import "./Lists.css";

export default function Lists(props) {
  console.log("LIST", props);
  return (
    <div className="dashboard">
      <table className="table">
        <thead>
          <tr >
            <th>AWB NUMBER</th>
            <th>TRANSPORTER</th>
            <th>SOURCE</th>
            <th>DESTINATION</th>
            <th>BRAND</th>
            <th>START DATE</th>
            <th>ETD</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item, i) => {
              const start_date = item.pickup_date ? new Date(item.pickup_date) : null;
              const etd =
                item.extra_fields && item.extra_fields.expected_delivery_date
                  ? new Date(item.extra_fields.expected_delivery_date)
                  : null;
              return (
                // <div style={{ border: "1px solid #dee2e6", padding: "10px" }}>
                // <tbody>
                <tr
                  className="table-row"
                  scope="row"
                  key={i}
                  onClick={() => props.getTimelineData(item)}
                >
                  <th>#{item.awbno}</th>
                  <td>{item.carrier.toUpperCase()}</td>
                  <td>{item.from}</td>
                  <td>{item.to}</td>
                  <td>USPA</td>
                  {start_date ? (
                    <td>
                      {start_date.getDate() +
                        "/" +
                        start_date.getMonth() +
                        "/" +
                        start_date.getFullYear()}
                    </td>
                  ) : (
                    <td></td>
                  )}
                  {etd ? (
                    <td>
                      {etd.getDate() +
                        "/" +
                        etd.getMonth() +
                        "/" +
                        etd.getFullYear()}
                    </td>
                  ) : (
                    <td></td>
                  )}
                  <td
                    className={
                      item.current_status_code == "DEL" ? "delivered" : ""
                    }
                  >
                    {item.current_status}
                  </td>
                </tr>
                // {/* </tbody> */}
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
