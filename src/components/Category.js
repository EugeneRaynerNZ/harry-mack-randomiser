import React from 'react'

export default function Category({name, onCheck, checked}) {
    return (
        <li><label><input type="checkbox" value={name} onChange={onCheck} checked={checked}/>{name}</label></li>
    )
}