"use client"

import React from 'react'

const Dashboard = () => {
  return (
  <>
  <div className="bg-gray-100 h-screen">
    <div className="flex h-full">
        <aside className="w-64 bg-gray-800 text-white hidden md:block">
            <div className="p-4 font-bold text-lg border-b border-gray-700">Dashboard</div>
            <nav className="mt-4">
                <ul className="space-y-2">
                    <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</a></li>
                    <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Profile</a></li>
                    <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Settings</a></li>
                    <li><a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">Logout</a></li>
                </ul>
            </nav>
        </aside>

        <div className="flex-1 flex flex-col">
            <header className="bg-white p-4 shadow">
                <nav className="text-sm text-gray-600">
                    <ul className="flex items-center space-x-2">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li>/</li>
                        <li><a href="#" className="hover:text-blue-500">Dashboard</a></li>
                        <li>/</li>
                        <li className="text-gray-500">Current Page</li>
                    </ul>
                </nav>
            </header>

            <main className="flex-grow p-6">
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-xl font-semibold mb-4">Data Table</h2>
                    <table className="min-w-full border-collapse border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">Name</th>
                                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">Email</th>
                                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">Role</th>
                                <th className="border border-gray-200 px-4 py-2 text-left text-sm font-semibold text-gray-600">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">John Doe</td>
                                <td className="border border-gray-200 px-4 py-2">john@example.com</td>
                                <td className="border border-gray-200 px-4 py-2">Admin</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <button className="text-blue-500 hover:underline">Edit</button>
                                </td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 px-4 py-2">Jane Smith</td>
                                <td className="border border-gray-200 px-4 py-2">jane@example.com</td>
                                <td className="border border-gray-200 px-4 py-2">User</td>
                                <td className="border border-gray-200 px-4 py-2">
                                    <button className="text-blue-500 hover:underline">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2025 Your Company. All rights reserved.</p>
            </footer>
        </div>
    </div>
</div>
  </>
  )
}

export default Dashboard