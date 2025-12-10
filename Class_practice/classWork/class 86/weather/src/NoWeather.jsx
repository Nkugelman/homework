import React from 'react'


export default function NoWeather() {
  return (
    <div className="row">
      <h2>enter zip to see weather</h2>
      <h5 id="error" className="text-danger"></h5>
    </div>
  );
}
