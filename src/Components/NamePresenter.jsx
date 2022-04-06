import React from 'react';
import NamePresenter from './Components/NamePresenter/NamePresenter
'
const NamePresenter = (props) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Entry Number</th>
            <th>weight</th>
            <th>date</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index)=> {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{entry.weight}</td>
                <td>{entry.date}</td>
              </tr>
    )
};

export default NamePresenter;