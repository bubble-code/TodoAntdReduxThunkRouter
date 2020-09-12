import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TodoContainer } from '../container'

export const Routee = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TodoContainer />} />
            </Routes>
        </Router>
    )
}
