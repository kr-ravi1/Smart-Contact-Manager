import React from 'react'

function Alert({type, message}) {
    return (
        <div>
            <div className={`flex justify-center ${type == "info" ? '' : 'hidden'} fixed top-15 right-8 p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400`} role="alert">
                <span className="font-medium mr-1">Info alert!</span> {message}
            </div>
            <div className={`flex justify-center ${type == "danger" ? '' : 'hidden'} fixed top-15 right-8 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400`} role="alert">
                <span className="font-medium mr-1">Danger alert!</span> {message}
            </div>
            <div className={`flex justify-center ${type == "success" ? '' : 'hidden'} fixed top-15 right-8 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400`} role="alert">
                <span className="font-medium mr-1">Success alert!</span> {message}
            </div>
            <div className={`flex justify-center ${type == "warning" ? '' : 'hidden'} fixed top-15 right-8 z-50 p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300`} role="alert">
                <span className="font-medium mr-1">Warning alert!</span> {message}
            </div>
            <div className={`flex justify-center ${type == "dark" ? '' : 'hidden'} fixed top-15 right-8 p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300`} role="alert">
                <span className="font-medium mr-1">Dark alert!</span> {message}
            </div>
        </div>
    )
}

export default Alert