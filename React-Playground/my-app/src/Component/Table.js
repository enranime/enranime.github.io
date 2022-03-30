import React, {Component} from 'react'

const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
    // console.log(props.characterDatas);
    const rows = props.characterDatas.map((row,index) => {
    return (

        <tr key = "{index}">
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
              <button onClick={() => props.removeCharacters(index)}>Delete</button>
            </td>
            <td>{console.log(row)}</td>
        </tr>
    )
    })

    return (
      <tbody>{rows}</tbody>
        
    )
}
const Table = (props) => {
    const {characterData, removeCharacter} = props

    return (
        <table>
        <TableHeader />
        <TableBody characterDatas={characterData} removeCharacters={removeCharacter}/>
        </table>
    )
}

export default Table