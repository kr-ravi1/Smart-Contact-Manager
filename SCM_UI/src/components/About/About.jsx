import React from 'react'

function About() {
  return (
    <div className='flex justify-center items-center min-h-[80vh] flex-col'>
      <div id='left-content' className='w-full md:w-[35%] min-h-[70%] flex justify-center items-center flex-col text-center text-wrap'>
        <p className='text-5xl font-semibold mb-10'>About Managing Contact on Cloud.</p>
      </div>
      <div id='right-content' className='w-full md:w-[35%] flex justify-center items-start gap-10'>
        <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 border-l-2 pl-5">
          <li>
            Accessibility
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Anytime, Anywhere Access</li>
              <li>Multi-Device Synchronization</li>
            </ol>
          </li>
          <li>
            Collaboration
            <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Shared Contacts</li>
              <li>Real-Time Updates</li>
            </ul>
          </li>
          <li>
            Backup and Recovery
            <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Automatic Backups</li>
              <li>Easy Recovery</li>
            </ul>
          </li>
        </ul>

        <ul className="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400 border-r-2 pr-5">
          <li>
            Scalability
            <ol className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Easily Scalable</li>
              <li>Cost-Effective</li>
            </ol>
          </li>
          <li>
            Security
            <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Advanced Security Measures</li>
              <li>Compliance</li>
            </ul>
          </li>
          <li>
            Integration
            <ul className="ps-5 mt-2 space-y-1 list-decimal list-inside">
              <li>Third-Party Integration</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About