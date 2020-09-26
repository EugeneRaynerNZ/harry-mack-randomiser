import React from 'react'

export default function Categories({ name }) {
    return (
        <div className="categories">
            <h3>Categories</h3>
            <ul>
                <li><label><input type="checkbox" />{name}</label></li>
                <li><label><input type="checkbox" />{name}</label></li>
                <li><label><input type="checkbox" />{name}</label></li>
                <li><label><input type="checkbox" />{name}</label></li>
            </ul>
        </div>
    )
}