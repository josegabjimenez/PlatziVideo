import React from 'react'
import '../assets/styles/components/Categories.scss'

function Categories({children}) {
    return (
        <div>
            <h3 className="categories_title">Mi lista</h3>
            {children}
        </div>
    )
}

export default Categories
